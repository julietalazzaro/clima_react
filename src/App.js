import React, { Fragment } from "react";
import Header from "./components/Header.js";
import Formulario from "./components/Formulario.js";

function App() {
  return (
    <Fragment>
      <Header titulo="Clima React" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
