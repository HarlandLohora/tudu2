import React from "react";
import Tarea from "../Tarea";
const ListaTareas = (props) => {
  const { todasLasTareas } = props;
  return (
    <div>
      <h2>ListaTareas</h2>
      {todasLasTareas.map((info, posicion) => {
        return (
          <Tarea
            key={posicion}
            titulo={info.titulo}
            descripcion={info.descripcion}
            completada={info.completada}
            indice={posicion}
            eliminarTarea={props.eliminarTarea}
          />
        );
      })}
    </div>
  );
};

export default ListaTareas;
