import React, { Component } from 'react'
import InformacionContacto from './informacionContacto'
export default class Contactenos extends Component {
    render(){
        return(
            <div className= "container">
                <h2 className = "col align-items-center">Contáctenos</h2>
                <InformacionContacto/>
                <div className = "jumbotron mt-4">
                    <p>También puedes contactarnos de manera inmediata 
                        vía WhatsApp o a los
                        número 3163681714 – 3164553845</p>
                </div>
            </div>
        );
    }
}
