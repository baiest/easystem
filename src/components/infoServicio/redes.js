import React, { Component, Fragment } from 'react';
import remoto from '../../assets/redes.jpg'

export default class Redes extends Component{
    render(){
        return (
            <Fragment>
                <div className = "row col-md-5 align-items-center text-left">
                    <h2>Redes</h2>
                    <p>Auditorias a tus redes, instalación y configuración a tu medida</p>
                    <span>
                        <img src={remoto} alt="Imagen ejemplo remoto" className = "rounded img-fluid"/>
                    </span>
                </div>
                <div className="row col-md-5 align-items-center justify-content-around">
                    <h2 className = "col mt-4">¿Que podemos ofrecerte?</h2>
                    <ul className = "letra text-left">
                        <li>Redes inalambricas</li>
                        <li>Redes cableadas</li>
                        <li>Centros de cableado</li>
                        <li>Adecuación de recursos compartidos</li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}