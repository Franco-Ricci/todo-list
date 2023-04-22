import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const {createTask} = useContext(TaskContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    
    if(title && description !== "") { 
      createTask(title, description);
      document.querySelector(".form__warn").classList.add("form__warn--off")
    }else{
      document.querySelector(".form__warn").classList.remove("form__warn--off")
      document.querySelector(".form__warn").innerHTML =`
       <p className="task__empty">Ingrese una tarea valida</p>
      `
    }
   
    setTitle("");
    setDescription("");
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };
  return (
    <div className="form__container">
    <h1 className="form__title">Lista de Tareas</h1>
      <form className="form__content" onSubmit={handleSubmit}>
        <input
          className="form__task"
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          className="form__task"
          placeholder="Escribe la descripción aqui"
          onChange={handleChange}
          value={description}
        ></textarea>
        <button className="form__save">Guardar</button>
        <span className="form__warn"></span>
      </form>
    </div>
  );
}

export default TaskForm;
