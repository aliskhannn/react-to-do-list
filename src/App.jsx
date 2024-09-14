import { useState } from "react";
import TaskList from "./components/TaskList";
// import MyAddButton from "./components/UI/MyAddButton";
import Input from "./components/UI/Input";
import Modal from "./components/UI/Modal";
import { useEffect } from "react";
import "./index.scss";
import Loader from "./components/UI/Loader";
import Button from "./components/UI/Button";

function App() {
  const [opened, setOpened] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((json) => setTasks(json))
      .catch((e) => console.error(`An ${e} error was occured`))
      .finally(() => setIsLoading(false));
  }, []);

  function createTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function changeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function removeTask(task) {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  return (
    <div className={`App ${isDark ? "dark" : ""}`}>
      <div className='container'>
        <div className='wrapper'>
          <span
            className='change-theme-btn material-symbols-outlined'
            onClick={() => setIsDark(!isDark)}
          >
            {!isDark ? "dark_mode" : "light_mode"}
          </span>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Search...'
            autoComplete='off'
          />
          <Button className="add-button" onClick={setOpened}>
            Add new task
            <span className='material-symbols-outlined'>add</span>
          </Button>
          {isLoading ? (
            <Loader />
          ) : (
            <TaskList
              searchValue={searchValue}
              tasks={tasks}
              setTasks={setTasks}
              remove={removeTask}
              change={changeTask}
            />
          )}
          <Modal
            createTask={createTask}
            opened={opened}
            setOpened={setOpened}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
