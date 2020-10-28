import React, {Component} from 'react'
import remoto from '../../assets/remoto.jpg'

class FirstInfo extends Component{
    render(){
        return(
            <div className = "p-4">
                <h1>Servicio de asistencia tecnica remota</h1>
                <div className = "">
                    <span>
                        <img src={remoto} className = "rounded img-fluid"/>
                    </span>
                </div>
                <div className = "letra text-left">
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
        );
    }
}

export default FirstInfo