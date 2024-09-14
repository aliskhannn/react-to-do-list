/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function Modal({ opened, setOpened, createTask }) {
  const [task, setTask] = useState("");

  function addNewTask() {
    if (task === "") return;
    const newTask = {
      title: task,
      id: Date.now(),
    };
    createTask(newTask);
    setTask("");
    setOpened(false);
  }

  return (
    <div
      className={`modal animated ${opened ? "show" : ""}`}
      onClick={() => setOpened(false)}
    >
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <span
          className='material-symbols-outlined'
          onClick={() => setOpened(false)}
        >
          close
        </span>
        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder='What tasks do you have for today?'
        />
        <div className='modal-btns'>
          <Button
            className='my-button'
            onClick={() => {
              setTask("");
              setOpened(false);
            }}
          >
            Cancel
          </Button>
          <Button className='my-button primary' onClick={addNewTask}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
