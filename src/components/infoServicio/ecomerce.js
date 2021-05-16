import React, { Component, Fragment } from 'react';
import remoto from '../../assets/ecommerce.jpg'

export default class Ecomerce extends Component{
    render(){
        return (
            <Fragment>
                <div className = "col servicioCell align-items-center">
                    <h1 className = "row mt-2" >eCommerce</h1>
                    <div className = "row letra text-left mt-2">
                        <p>eCommerce es una tienda virtual, si tienes productos
                            o servicios es la mejor manera de llegar a tus clientes,
                            pueden comprar las 24 horas del día los 365 dias del año</p>
                    </div>
                    <div className = "row mt-2 mb-2">
                        <span>
                            <img src={remoto} alt="Imagen ejemplo remoto" className = "rounded img-fluid"/>
                        </span>
                    </div>
                </div>
                <div className="col align-items-center justify-content-around">
                    <div className = "col">
                        <h2 className = "col">¿Que podemos hacer con un eCommerce?</h2>
                        <ul className = "letra text-left">
                            <li>Una pagina web donde puedes vender tus productos o servicios</li>
                            <li>Pasarela de pagos online</li>
                            <li>Botón WhatsApp para comunicación directa</li>
                            <li>Configuración e instalación </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}