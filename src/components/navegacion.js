import React, { Component } from 'react';
import '../style/navegacion-style.css'
import {Link} from 'react-router-dom'
import facebook from '../assets/social/facebook.png'
import instagram from '../assets/social/instagram.png'
import twitter from '../assets/social/twitter.png'
import whatsapp from '../assets/social/whatsapp.png'

export default class Navegacion extends Component{
    
    render(){
        return( 
            <nav
            className ="navbar navbar-expand-lg d-flex justify-content-around align-items-center"
            >
                <Link to="/" className='d-flex align-items-center'>
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

                <div className='collapse navbar-collapse' id = "navbarToggler">
                    <ul className = "navbar-nav mr-auto mt-2 mt-lg-0">
                        <Link to="/" className = "nav-item nav-link opciones active">Inicio</Link>
                        <Link to="servicios" className = "nav-item nav-link opciones active">Servicios</Link>
                        <Link to="tarifas" className = "nav-item nav-link opciones active">Tarifas</Link>
                        <Link to="nosotros" className = "nav-item nav-link opciones active">Nosotros</Link>
                        <Link to="contactenos" className = "nav-item nav-link opciones active">Contacto</Link>
                        <Link to="podcast" className = "nav-item nav-link opciones active">Podcast</Link>
                        <a href="https://easystem.co/blog" target="_blank" rel="noreferrer" className = "nav-item nav-link opciones active">Blog</a>
                    </ul>
                </div>

                <div className="social">
                    <a href="https://www.facebook.com/easystem.co" className = "col"><img alt='icono facebook' src={facebook}/></a>
                    <a href="https://www.instagram.com/easystem.co" className = "col"><img alt='icono instagram' src={instagram} /></a>
                    <a href="https://twitter.com/easystemcol" className = "col"><img alt='icono twitter' src={twitter} /></a>
                    <a href="https://api.whatsapp.com/send?phone=+573163681714" className = "col"><img alt='icono whatsapp' src={whatsapp} /></a>
                </div>

            </nav>
        );
    }
}
