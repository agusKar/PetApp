import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCitas}) => {

  // State de cita
  const [cita, guardarCita] = useState({
    propietario: '',
    mascota: '',
    fecha: '',
    sintomas: ''
  });

  // State de error
  const [error, guardarError] = useState(false);

  // Guardo la cita individualmente
  const actualizarEstado = (e) => {
    guardarCita({
      ...cita, // toma una copia de lo que ya estaba, para que no lo pise
      [e.target.name]: e.target.value
    });
  }

  const { propietario, mascota, fecha, sintomas } = cita; // Destructuring

  // Cargo en el array de citas, la nueva cita
  const actualizarCitas = (e) => {
    e.preventDefault();


    // Validar FORM
    if (propietario.trim() === '' || mascota.trim() === '' || fecha.trim() === '' || sintomas.trim() === '') {
      guardarError(true);
      return; // PARA QUE NO SE CONTINUE EJECUTANDO EL CODIGO
    }
    guardarError(false);


    // Asignar ID
    cita.id = uuid();

    // Reiniciar el FORM

    // Enviar a APP la cita
    crearCitas(cita);

    // Reiniciar FORM
    guardarCita({
      propietario: '',
      mascota: '',
      fecha: '',
      sintomas: ''
    });
  }

  return (
    <Fragment>
      <h1>Formulario</h1>

      { error ? <div className="alerta-error">Todos los campos son obligatorios</div> : null}


      <form onSubmit={actualizarCitas}>
        <input type="text"
          className="u-full-width"
          name="propietario"
          placeholder="Nombre de propietario"
          value={propietario}
          onChange={actualizarEstado} />
        <input type="text"
          className="u-full-width"
          name="mascota"
          placeholder="Nombre de la mascota"
          value={mascota}
          onChange={actualizarEstado} />
        <input type="date"
          name="fecha"
          className="u-full-width"
          value={fecha}
          onChange={actualizarEstado} />
        <textarea name="sintomas"
          placeholder="Sintomas"
          className="u-full-width"
          value={sintomas}
          onChange={actualizarEstado} ></textarea>
        <button className="button-primary">Crear cita</button>
      </form>
    </Fragment>
  );
}

Formulario.protoType = {
  crearCitas: PropTypes.object.isRequired
}

export default Formulario;