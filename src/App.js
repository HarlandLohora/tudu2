import logo from "./logo.svg";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavbarComponent from "./components/Navbar";
import Formulario from "./components/Formulario";
import ListaTareas from "./components/ListaTareas";

function App() {
  const todasLasTareasIniciales = [
    {
      titulo: "Hacer que funcione el Tudu",
      descripcion: "Estamos aprendiendo React",
      completada: false,
    },
    {
      titulo: "Aprender Rutas en React",
      descripcion: "Estamos aprendiendo React",
      completada: false,
    },
    {
      titulo: "Subir nuestro proyecto",
      descripcion: "Para tener una URL",
      completada: false,
    },
  ];

  const [todasLasTareas, setTodasLasTareas] = useState(todasLasTareasIniciales);

  const envioDeTarea = (nuevaTarea) => {
    /**
     * Como actualizar un arreglo con nuevos datos??
     *
     * 1.- Crea la copia con el spreadOperator para arreglos
     *     NUNCA SE USA PUSH
     * 2.- Agregar el nuevo objeto al arreglo copia
     * 3.- Actualizar el estado con el nuevo arreglo
     */

    /**Hacemos una copia */
    const nuevoArreglo = [...todasLasTareas, nuevaTarea];
    setTodasLasTareas(nuevoArreglo);
  };

  const eliminarTarea = (posicion) => {
    /**
     * 1- Crea la copia con el spreadOperatos para arreglos
     * 2- Usamos el método SPLICE para eliminar apartir de una posicion
     * 3- Actualizamos el estado con el nuevo arreglo del paso -> 2
     */
    const nuevoArreglo = [...todasLasTareas];
    nuevoArreglo.splice(posicion, 1);
    setTodasLasTareas(nuevoArreglo);
  };

  return (
    <div className="App">
      <NavbarComponent todasLasTareas={todasLasTareas} />
      <Container>
        <Row>
          <Col>
            <Formulario envioDeTarea={envioDeTarea} />
          </Col>
          <Col>
            <ListaTareas
              todasLasTareas={todasLasTareas}
              eliminarTarea={eliminarTarea}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
