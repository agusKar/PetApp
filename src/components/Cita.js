import React from 'react';
import PropTypes from 'prop-types';


const Cita = ({cita, borrarCita}) => {
    
    const { propietario, mascota, fecha, sintomas } = cita; // Destructuring
    
    return ( 
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>Propietario: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button className="button eliminar" onClick={ () => borrarCita(cita.id)}>Borrar Cita</button>
        </div>
     );
}
 
Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    borrarCita: PropTypes.func.isRequired
}

export default Cita;