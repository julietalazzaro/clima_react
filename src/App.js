import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header.js";
import Formulario from "./components/Formulario.js";
import Clima from "./components/Clima.js";

function App() {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=de3dce4778439099809b01381a728d65`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado);
        setConsultar(false);
      }
    };

    consultarAPI();
  }, [consultar]);

  return (
    <Fragment>
      <Header titulo="Clima React" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">
              <Clima resultado={resultado} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
