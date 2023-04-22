import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskList() {

 const {tasks} = useContext(TaskContext)
 console.log(tasks);
  if (tasks.length === 0) {
    return <div className="task__empty"><p className="task__empty--desc">No hay tareas</p> </div> ;
    
  }

  return (
    <div className="task__container">
      {tasks.map((task) => (
      <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
