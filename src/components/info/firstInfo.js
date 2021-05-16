import React, {Component} from 'react'
import '../../style/firstInfo.css'
import Contactar from './contactar'
import imagen from '../../assets/hero-principal.jpg'
class FirstInfo extends Component{
    render(){
        return(   
        <div className = "p-4 row justify-content-center align-items-center cell">
            <section className = "row col sobrepuesto justify-content-center">
                <h4>¿Tienes problemas con tus computadores?</h4>
                <h2>¡Nosotros podemos ayudarte!</h2>
                <p>Soporte técnico a equipos de escritorio, portatiles, impresoras, servidores</p>
                <div className = "p-4">
                    <Contactar/>
                </div>
            </section>
            <div className = "col imagen-principal">
                <img src={imagen} alt="imagen principal hero"/>
            </div>
        </div>
        );
    }
}

export default FirstInfo