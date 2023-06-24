import { useState } from "react";
import TaskList from "./components/TaskList";
import MyAddButton from "./components/UI/MyAddButton";
import MyInput from "./components/UI/MyInput";
import MyModal from "./components/UI/MyModal";
import { useEffect } from "react";
import "./index.scss";
import Loader from "./components/UI/Loader";

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
		setTasks(tasks.map(t => {
			if (t.id === task.id) {
				return task;
			} else {
				return t;
			}
		}));
	}

  function removeTask(task) {
    setTasks(tasks.filter(t => t.id !== task.id));
  }

  return (
    <div className={`App ${isDark ? 'dark' : ''}`}>
      <div className="container">
        <div className="wrapper">
        	<span className="change-theme-btn material-symbols-outlined" onClick={() => setIsDark(!isDark)}>{!isDark ? 'dark_mode' : 'light_mode'}</span>
          <MyInput
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
            autoComplete="off"
          />
          <MyAddButton onClick={setOpened} />
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
          <MyModal createTask={createTask} opened={opened} setOpened={setOpened} />
        </div>
      </div>
    </div>
  );
}

export default App;
