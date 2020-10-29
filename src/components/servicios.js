import React, {Component} from 'react'
import remoto from '../assets/remoto.jpg'
import Contactar from './info/contactar'
import '../style/servicios.css'

class Servicios extends Component{
    render(){
        return(
            <div className = "container">
                <div className = "row p-4">
                    <h1 className = "col" >Servicio de asistencia tecnica remota</h1>
                    <div className = "row servicioCell align-items-center">
                        <div className = "col">
                            <span>
                                <img src={remoto} className = "rounded img-fluid"/>
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
                    <div className="row align-items-center">
                        <div className = "col">
                            <h1 className = "row col">¿Que podemos hacer con el soporte remoto?</h1>
                            <ul className = "letra text-left">
                                <li>Eliminación de virus y software malicioso.</li>
                                <li>Instalación y configuración de programas.</li>
                                <li>Problemas de equipos lentos o dificultad para abrir programas o sitios web.</li>
                                <li>Configuracion y capacitación de programas de Office, word, excel, correo electronico etc.</li>
                                <li>Tu equipo es nuevo, podemos dejar tu equipo listo para trabajar.</li>
                            </ul>
                        <h4 style = {{color: '#548'}}>¡Facil, Rapido y sin moverte!</h4>
                        </div>
                        <div className = "col">
                            <h1 className = "row col">¡Ventajas del Soporte Remoto!</h1>
                            <ul className = "letra text-left">
                                <li>Velocidad en la atencion, esta es la principal ventaja</li>
                                <li>Flexibilidad horaria en la solución del incidente</li>
                                <li>No tienes que desplazarte o esperar una visita </li>
                                <li>No esperes mas y contacta con nosotros para dar solución a tus incidentes</li>
                            </ul>
                            <h4 style = {{color: '#548'}}>¡No esperes mas y contacta con nosotros para dar solución a tus incidentes!</h4>
                        </div>
                    </div>
                </div>
                <Contactar className = "col"/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Servicios