import React, { useState } from "react";

function LocalEjercicio() {
  const [inputValue, setInputValue] = useState("");
  const [locals,setLocals] = useState("");

  function save() {
    localStorage.setItem("inputValue", inputValue);
  }

  function read() {
    let algo = localStorage.getItem("inputValue");
    setLocals(algo);
  }

  function clean() {
    localStorage.clear();
    
  }

  return (
    <>
      {/* <Link to="/agregar">Agregar startup</Link> */}
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={save}>Guardar</button>
      <button onClick={read}>Leer</button>
      <button onClick={clean}>Borrar</button>
      <p>El valor de localStorage es: {locals} </p>
    </>
  );
}

export default LocalEjercicio;