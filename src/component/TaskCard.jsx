import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  const valor = useContext(TaskContext);
  console.log(valor);
  return (
  

    <div className="task__content">
      <h1 className="task__title">{task.title}</h1>
      <p className="task__description">{task.description}</p>
      <button className="task__button" onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  
  );
}

export default TaskCard;
