import React, { Component, Fragment } from 'react';
import remoto from '../../assets/remoto.jpg'

export default class SoporteNacional extends Component{
    render(){
        return (
            <Fragment>
                <div className = "row servicioCell align-items-start">
                    <div className = "col">
                        <h2>Soporte Nacional</h2>
                        <ul className = "letra text-left">
                            <li>Disponibilidad en gran parte del territorio nacional</li>
                            <li>Evita costos de viaticos o minimiza costos de desplazamientos</li>
                            <li>Controla tus operaciones desde un solo punto</li>
                            <li>Tiempos de respuesta mas cortos al tener personal en cada región</li>
                        </ul>
                    </div>
                </div>
                <div className="col align-items-center justify-content-around">
                    <div className = "col letra text-left">
                        <span className="mt-4 mb-4">
                            <img src={remoto} alt="Imagen ejemplo remoto" className = "rounded img-fluid"/>
                        </span>
                        <p>Contamos con aliados estrategicos logrando alcanzar 
                        todo el territorio nacional con personal de cada región</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}