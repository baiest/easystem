import React, { Component }from 'react'
import foto from '../../assets/marketing.jpg' 

export default class Marketing extends Component{
    render(){
        return(
            <div className="row">
                <div className="col">
                    <h2>¿Qué podemos hacer con Marketing Digital?</h2>
                    <ul className = "letra text-left">
                        <li>Creación de paginas web</li>
                        <li>Creación de eCommerce (Tienda Online)</li>
                        <li>Campañas de publicidad online</li>
                        <li>Inbound  Marketing</li>
                    </ul>
                </div>
                <div className="col text-left">
                    <h2>Marketing Digital</h2>
                    <p>El marketing Digital esta orientado a hacer
                        presencia en internet, asi puedes tener presencia
                        en el mundo entero con tu propia pagina web</p>
                    <span>
                        <img src={foto} alt="Imagen ejemplo remoto" className = "rounded img-fluid"/>
                    </span>
                </div>
            </div>
        );
    }
} 