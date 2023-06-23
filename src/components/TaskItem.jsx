import { useState } from "react";

function TaskItem({ remove, children, task, ...props }) {
	const [isImportant, setIsImportant] = useState(false);
	const [isCompleted, setIsCompleted] = useState(false);

  return (
    <li className={`tasks-item ${isImportant ? 'important' : ''} ${isCompleted ? 'completed' : ''}`} {...props}>
      <span className="tasks-item-title" onClick={() => setIsCompleted(!isCompleted)}>{children}</span>
      <div className="tasks-control">
        <span className="material-symbols-outlined" onClick={() => setIsImportant(!isImportant)}>star</span>
        <span className="material-symbols-outlined">edit</span>
        <span className="material-symbols-outlined" onClick={() => remove(task)}>delete</span>
      </div>
    </li>
  );
}

export default TaskItem;
