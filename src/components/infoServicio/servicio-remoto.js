import React, { Component, Fragment } from 'react';
import foto from '../../assets/servicio-remoto.jpeg'

export default class ServicioRemoto extends Component{
    render(){
        return (
            <Fragment>
                <h1 className = "col" >Servicio de asistencia tecnica remota</h1>
                <div className = "row servicioCell align-items-center">
                    <div className = "col">
                        <span>
                            <img src={foto} alt="Imagen ejemplo remoto" className = "rounded img-fluid"/>
                        </span>
                    </div>
                    <div className = "col letra text-left">
                        <br/>
                        <p>La asistencia remota es la conexión realizada
                            a distancia a tu computador, solamente necesitas
                            tener una conexión a internet.</p>

                        <p>Durante esta conexión podemos realizar las instalaciones
                            o configuraciones necesarias para dar solución a tus
                            inconvenientes. Simplemente tomando el control a distancia,
                            sin importar donde estés, podemos ayudarte.</p>

                        <p>Es totalmente segura la conexion que realizamos,
                            pudiendo desconectar la conexión en cualquier
                            momento o motivo.</p>
                    </div>
                </div>
                <div className="row align-items-center justify-content-around">
                    <div className = "col-md-6">
                        <h2 className = "col">¿Que podemos hacer con el soporte remoto?</h2>
                        <ul className = "letra text-left">
                            <li>Eliminación de virus y software malicioso.</li>
                            <li>Instalación y configuración de programas.</li>
                            <li>Problemas de equipos lentos o dificultad para abrir programas o sitios web.</li>
                            <li>Configuracion y capacitación de programas de Office, word, excel, correo electronico etc.</li>
                            <li>Tu equipo es nuevo, podemos dejar tu equipo listo para trabajar.</li>
                        </ul>
                    <h4 style = {{color: '#3987f7'}}>¡Facil, Rapido y sin moverte!</h4>
                    </div>
                    <div className = "col-md-6">
                        <h2 className = "col">¡Ventajas del Soporte Remoto!</h2>
                        <ul className = "letra text-left">
                            <li>Velocidad en la atencion, esta es la principal ventaja</li>
                            <li>Flexibilidad horaria en la solución del incidente</li>
                            <li>No tienes que desplazarte o esperar una visita </li>
                            <li>No esperes mas y contacta con nosotros para dar solución a tus incidentes</li>
                        </ul>
                        <h4 style = {{color: '#3987f7'}}>¡No esperes mas y contacta con nosotros para dar solución a tus incidentes!</h4>
                    </div>
                </div>
            </Fragment>
        );
    }
}