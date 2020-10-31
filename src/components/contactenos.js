import React, { Component } from 'react'
import Formulario from './info/formulario'

class Contactenos extends Component {
    render(){
        return(
            <div className= "container">
                <h1 className = "col align-items-center">Contactenos</h1>
                <div className = "row">
                    <div className = "col">
                        <Formulario className = "col"/>
                    </div>
                </div>
                <div className = "jumbotron">
                    <p>También puedes contactarnos de manera inmediata 
                        vía WhatsApp o a los
                        numero 3163681714 – 3164553845</p>
                </div>
            </div>
        );
    }
}

export default Contactenos