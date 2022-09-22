import React from "react";
import Button from "react-bootstrap/Button";
import "./styles.css";
const Tarea = (props) => {
  return (
    <div className="Tarea">
      <div>
        <input type="checkbox" />
        <span>{props.indice + 1} - </span>
        <span>{props.titulo}</span>
        <Button
          variant="danger"
          onClick={() => {
            props.eliminarTarea(props.indice);
          }}
        >
          X
        </Button>
      </div>
      <p>{props.descripcion}</p>
    </div>
  );
};

export default Tarea;
