import { useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";

function TaskItem({ remove, change, children, task, ...props }) {
  const [isImportant, setIsImportant] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <div className="tasks-edit">
        <Input
          value={task.title}
          onChange={(e) => {
            change({
              ...task,
              title: e.target.value,
            });
          }}
        />
        <Button className="my-button" onClick={() => setIsEditing(false)}>Save</Button>
      </div>
    );
  } else {
    taskContent = (
      <li
        className={`tasks-item ${isImportant ? "important" : ""} ${isCompleted ? "completed" : ""}`}
        {...props}
      >
        <span className="tasks-item-title" onClick={() => setIsCompleted(!isCompleted)}>
          {children}
        </span>
        <div className="tasks-control">
          <span className="material-symbols-outlined" onClick={() => setIsImportant(!isImportant)}>
            star
          </span>
          <span className="material-symbols-outlined" onClick={() => setIsEditing(true)}>
            edit
          </span>
          <span className="material-symbols-outlined" onClick={() => remove(task)}>
            delete
          </span>
        </div>
      </li>
    );
  }

  return <>{taskContent}</>;
}

export default TaskItem;
