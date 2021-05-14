import React, { Component } from 'react'
import Formulario from './info/formulario'

class Contactenos extends Component {
    render(){
        return(
            <div className= "container">
                <h1 className = "col align-items-center">Contactenos</h1>
                <div className = "row">
                <div className='col mt-4 mb-4 justify-content-center d-flex'>
                        <Formulario/>
                    </div>
                    <iframe 
                    className='col mt-4 mb-4 justify-content-center d-flex'
                    scrolling="no"
                    src='https://maps.google.com/maps?q=easystem&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near'
                    title="easystem" 
                    aria-label="easystem"
                    height="400"
                    width="400"
                    style={{border: '0'}}></iframe> 
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