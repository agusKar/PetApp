import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  const [citas, guardarCitas] = useState(citasIniciales);

  /* 
    ** useEffect, se ejecuta cuando el componente esta listo o cuando cambia
    ** Siempre lleva dentro un arrow function
    ** Para que se ejecute solo una vez, tenes que pasarla un array vacio como segundo parametro
    ** En ese array se lo llama como dependencia, y ahi pasandole el STATE, cada vez que ocurra un cambio se va a ejecutar
    */
  useEffect( () => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales] );

  const crearCitas = cita => {
    guardarCitas([...citas, cita]);
  }

  const borrarCita = id => {
    const citasArray = citas.filter(cita => (cita.id !== id) );
    guardarCitas(citasArray);
    // console.log(id);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="twelve column">
            <h1>Administrador de Citas</h1>
          </div>
        </div>
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCitas={crearCitas} />
          </div>
          <div className="one-half column">
            <h1>
              {citas.length ? "Listado de citas":"Agrega una cita" }
            </h1>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                borrarCita={borrarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
