import React, { Component , Fragment } from 'react';
import '../style/navegacion-style.css'
import {Link} from 'react-router-dom'
import facebook from '../assets/social/facebook.png'
import instagram from '../assets/social/instagram.png'
import twitter from '../assets/social/twitter.png'
import whatsapp from '../assets/social/whatsapp.png'

class Navegacion extends Component{
    
    render(){
        return(
            <Fragment>
                <nav
                className ="d-flex justify-content-between pt-2 pl-5 pr-5 navbar navbar-expand-lg"
                >
                    <Link to="/" className='w-25 d-flex align-items-center justify-content-between'>
                        <img className='navbar-toggle-icon mr-2' src="https://www.easystem.co/wp-content/uploads/2021/04/cropped-Nuevo-proyecto-10-70x62.png" alt="logo-empresa"/>
                        <h1>{this.props.nombre}</h1>
                    </Link>
                    
                    <button className = "navbar-toggler navbar-dark" 
                    type = "button" 
                    data-toggle="collapse" 
                    aria-label = "Toogle navigation"
                    data-target="#navbarToggler" 
                    aria-controls="navbarToggler" 
                    aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className='collapse navbar-collapse ' id = "navbarToggler">
                        <ul className = "navbar-nav mr-auto mt-2 mt-lg-0">
                            <Link to="/" className = "nav-item nav-link opciones active">Inicio</Link>
                            <Link to="servicios" className = "nav-item nav-link opciones active">Servicios</Link>
                            <Link to="tarifas" className = "nav-item nav-link opciones active">Tarifas</Link>
                            <Link to="nosotros" className = "nav-item nav-link opciones active">Nosotros</Link>
                            <Link to="contactenos" className = "nav-item nav-link opciones active">Contacto</Link>
                        </ul>
                    </div>

                    <div className="social">
                        <a href="https://www.facebook.com/easystem.co" className = "col"><img alt='icono facebook' src={facebook} className = "img-fluid"/></a>
                        <a href="https://www.instagram.com/easystemsoluciones/" className = "col"><img alt='icono instagram' src={instagram} className = "img-fluid"/></a>
                        <a href="https://twitter.com/TWEASYSTEM" className = "col"><img alt='icono twitter' src={twitter} className = "img-fluid"/></a>
                        <a href="https://api.whatsapp.com/send?phone=+573126846268" className = "col"><img alt='icono whatsapp' src={whatsapp} className = "img-fluid"/></a>
                    </div>

                </nav>
            </Fragment>
        );
    }
}

export default Navegacion