import React, { Component } from 'react';
import '../style/navegacion-style.css'
import {Link } from 'react-router-dom'
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
                className ="p-3 navbar navbar-expand-lg navbar-dark"
                style={{backgroundColor: '#572364'}}
                >
                    <h1 className = "display-4 text-white">Easystem</h1>
                    <button className = "navbar-toggler" 
                    type = "button" 
                    data-toggle="collapse" 
                    aria-label = "Toogle navigation"
                    data-target="#navbarToggler" 
                    aria-controls="navbarToggler" 
                    aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className = "ml-4 pl-4 collapse navbar-collapse" id = "navbarToggler">
                        <ul className = "navbar-nav mr-auto mt-2 mt-lg-0">
                            <Link to="/hola" className = "nav-item nav-link opciones active">Inicio</Link>
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