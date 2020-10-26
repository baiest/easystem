import React, { Component } from 'react';
import '../style/navegacion-style.css'
class Navegacion extends Component{
    constructor(){
        super();
        this.state = {
            nombre: 'Easystem'
        }
    }
    render(){
        return(
            <div>
                <nav
                className ="navbar navbar-expand-lg navbar-dark"
                style={{backgroundColor: '#548'}}
                >
                    <a href="#" className = "navbar-brand">Easystem</a>
                    <button className = "navbar-toggler" 
                    type = "button" 
                    data-toggle="collapse" 
                    aria-label = "Toogle navigation"
                    data-target="#navbarToggler" 
                    aria-controls="navbarToggler" 
                    aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className = "collapse navbar-collapse" id = "navbarToggler">
                        <ul className = "navbar-nav mr-auto mt-2 mt-lg-0">
                            <a href="#" className = "nav-item nav-link opciones active">Inicio</a>
                            <a href="#" className = "nav-item nav-link opciones active">Servicios</a>
                            <a href="#" className = "nav-item nav-link opciones active">Nosotros</a>
                            <a href="#" className = "nav-item nav-link opciones active">Contacto</a>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navegacion