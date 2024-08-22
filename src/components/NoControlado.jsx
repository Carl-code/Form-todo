import { useRef, useState } from "react";

const NoControlado = () => {

  const [error, setError] = useState("");
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    //capturar los datos
    const data = new FormData(form.current);
    const { title, description, state } = Object.fromEntries([
      ...data.entries(),
    ]);
    console.log(title, description, state);

    //validar los datos
    if (!title.trim() || !description.trim() || !state.trim() )
        return setError("Llena todos los Campos");

    //enviar los datos
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="Ingrese ToDo"
        className="form-control mb-2"
        name="title"
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese Descripcion"
        name="description"
      />
      <select className="form-control mb-2" name="state">
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
      {error !== "" && error}
    </form>
  );
};

export default NoControlado;
