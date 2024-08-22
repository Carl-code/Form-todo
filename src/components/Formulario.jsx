import { useState } from "react";
import Swal from 'sweetalert2'

const Formulario = ({addTodo}) => {
  const [todo, setTodo] = useState({
    title: "Todo #1",
    description: "Descripcion #1",
    state: "pendiente",
    priority: true,
  });

  const { title, description, state, priority } = todo;

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }

    addTodo({
      id: Date.now(),
      ...todo,
      state: state === 'completado'
    })

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese ToDo"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese Descripcion"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="priority"
          id="inputCheck"
          className="form-check-input"
          checked={priority}
          onChange={handleChange}
        />
        <label htmlFor="inputCheck">Dar Prioridad</label>
      </div>
      <select
        className="form-control mb-2"
        name="state"
        value={state}
        onChange={handleChange}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Agregar ToDo
      </button>
    </form>
  );
};

export default Formulario;
