/* eslint-disable react/prop-types */
import { useState } from "react";
import MyButton from "./MyButton";
import MyInput from "./MyInput";

function MyModal({ opened, setOpened, createTask }) {
  const [task, setTask] = useState("");

  function addNewTask() {
		if (task === '') return;
    const newTask = {
      title: task,
			id: Date.now()
    };
    createTask(newTask);
    setTask("");
    setOpened(false);
  }

  return (
    <div className={`modal animated ${opened ? "show" : ""}`} onClick={() => setOpened(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="material-symbols-outlined" onClick={() => setOpened(false)}>
          close
        </span>
        <MyInput
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What tasks do you have for today?"
        />
        <div className="modal-btns">
          <MyButton
            className="my-button"
            onClick={() => {
              setTask("");
              setOpened(false);
            }}
          >
            Cancel
          </MyButton>
          <MyButton className="my-button primary" onClick={addNewTask}>
            Add
          </MyButton>
        </div>
      </div>
    </div>
  );
}

export default MyModal;
