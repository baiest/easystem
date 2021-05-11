import React, {Component} from 'react'
import compu from '../../assets/compu.jpg'
import '../../style/firstInfo.css'
import Contactar from './contactar'
class FirstInfo extends Component{
    render(){
        return(   
        <div className = "row p-4 justify-content-center align-items-center cell">
            <section className = "col sobrepuesto justify-content-center">
                <h4>¿Tienes problemas con tus computadores?</h4>
                <h2>¡Nosotros podemos ayudarte!</h2>
                <p>Soporte técnico a equipos de escritorio, portatiles, impresoras, servidores</p>
                <div className = "p-4">
                    <Contactar/>
                </div>
            </section>
            <div className = "col imagen-principal">
                <img src="https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626_960_720.jpg" className='' alt="imagen principal hero"/>
            </div>
        </div>
        );
    }
}

export default FirstInfo