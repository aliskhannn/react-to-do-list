import { CSSTransition, TransitionGroup } from "react-transition-group";
import TaskItem from "./TaskItem";

function TaskList({ tasks, searchValue, remove }) {
  if (tasks.length === 0) {
    return <p className="tasks-empty">No tasks for today</p>;
  }

  return (
    <TransitionGroup className="tasks-list">
      {tasks
        .filter((task) => task.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((task) => (
          <CSSTransition key={task.id} timeout={500} classNames="task">
            <TaskItem task={task} remove={remove}>
              {task.title}
            </TaskItem>
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
}

export default TaskList;
