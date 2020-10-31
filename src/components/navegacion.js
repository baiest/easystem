import React, { Component } from 'react';
import '../style/navegacion-style.css'
import {Link } from 'react-router-dom'
import facebook from '../assets/social/facebook.png'
import instagram from '../assets/social/instagram.png'
import twitter from '../assets/social/twitter.png'
import whatsapp from '../assets/social/whatsapp.png'
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
                    <h1 className = "mr-5 display-4 text-white">Easystem</h1>
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
                            <Link to="/" className = "nav-item nav-link opciones active">Inicio</Link>
                            <Link to="servicios" className = "nav-item nav-link opciones active">Servicios</Link>
                            <Link to="nosotros" className = "nav-item nav-link opciones active">Nosotros</Link>
                            <Link to="contactenos" className = "nav-item nav-link opciones active">Contacto</Link>
                        </ul>
                    </div>
                    <div className="social">
                        <a href="https://www.facebook.com/easystem.co" className = "col"><img src={facebook} className = "img-fluid"/></a>
                        <a href="https://www.instagram.com/easystemsoluciones/" className = "col"><img src={instagram} className = "img-fluid"/></a>
                        <a href="https://twitter.com/TWEASYSTEM" className = "col"><img src={twitter} className = "img-fluid"/></a>
                        <a href="https://api.whatsapp.com/send?phone=+573126846268" className = "col"><img src={whatsapp} className = "img-fluid"/></a>
                    </div>

                </nav>
            </div>
        );
    }
}

export default Navegacion