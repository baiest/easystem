import React, { Component }from 'react'
import foto from '../../assets/soporte-tecnico.jpg'
export default class SoporteTecnico extends Component{
    render(){
        return(
            <div className="row">
                <div className="col text-left">
                    <h2>Soporte Tecnico</h2>
                    <p>Agotado el recurso Online, puedes programar la visita de un tecnico
                        que te dará solución a tu inconveniente de manera presencial, nunca
                        retirando tu equipo de su lugar. Asi puedes saber en todo momento que estamos realizando</p>
                    <span className="mt-4 mb-4">
                        <img src={foto} alt="Imagen ejemplo remoto" className = "rounded img-fluid"/>
                    </span>
                </div>
            <div className="col">
                <h2>¿Que podemos hacer con el soporte presencial?</h2>
                <ul className = "letra text-left">
                    <li>Instalación de impresoras o perifericos</li>
                    <li>Instalaciones de redes Wifi o cableadas</li>
                    <li>Reinstalación de tu sistema Operativo</li>
                    <li>Revisiones de equipos que no prenden o no</li>
                </ul>
            </div>
            </div>
        );
    }
} 