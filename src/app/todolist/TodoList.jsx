'use client'
import React, { useState } from "react";

function TodoList() {
  const [value, setValue] = useState(""); // tarea individual
  const [tasks, setTasks] = useState([]); // lista de tareas

  // Maneja el cambio en el input
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Añadir la tarea a la lista
  const handleAddTask = () => {
    if (value.trim()) {
      setTasks([...tasks, value]); // Añadir tarea al array
      setValue(""); // Resetear el campo de input
    }
  };

  // Eliminar una tarea
  const handleDeleteTask = (index) => {
    console.log("Deleting ", index)
    const newTasks = tasks.filter((_, i) => {
      return i !== index
    });
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Añade una tarea"
      />
      <button onClick={handleAddTask}>Añadir</button>

      <ul>
        {tasks.map((value, index) => (
          <li key={index}>
            {value}
            <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;