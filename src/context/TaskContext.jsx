import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext();
function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([]);
  const taskDb = JSON.parse(localStorage.getItem("task"))||[]
  console.log(taskDb)
  useEffect(() => {
    setTasks(taskDb)
  }, [])
  

  const createTask = (taskTitle, taskDescription) => {
  const newTask = {
      title: taskTitle,
      id: uuidv4(),
      description: taskDescription,
    };
    setTasks([...tasks, newTask]);
    localStorage.setItem("task", JSON.stringify([...tasks, newTask]));
  };

 

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    const updateTaskDb = taskDb.filter((task) => task.id !== taskId)
    localStorage.setItem("task", JSON.stringify(updateTaskDb))
    console.log(updateTaskDb)

    console.log(tasks);
    console.log(taskId);
  };

  return (
    <div >
      <TaskContext.Provider
        value={{
          tasks: tasks,
          deleteTask: deleteTask,
          createTask: createTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </div>
  );
}

export default TaskContextProvider;
