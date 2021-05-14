import React, { Component } from 'react'
import Contactar from '../components/info/contactar'
export default class InformacionTarifa extends Component{
    render(){
        const api_wp = (mensaje) => `https://api.whatsapp.com/send?phone=573163681714&text=Hola, me encuentro interesado en un *${mensaje}*`
        return(
            <div id="informacion-tarifa" className="text-left">
                <div id="precio" className="d-flex flex-wrap flex-row justify-content-around align-items-center mt-5">  
                    <h3 className="d-flex flex-md-wrap ">{this.props.nombre}</h3>
                    <h2 className="d-flex display-4">${this.props.precio}</h2>
                    <Contactar nombre="Quiero este!" link={api_wp(this.props.nombre)}/>
                </div>
                <div className="d-flex flex-wrap justify-content-around">
                    {this.props.atributos.map((atributo, key) =>{
                        return <section key={key} className="card mb-4" style={{width: '250px'}}>
                                <h5 className="card-title mr-4 mt-4 ml-4 d-flex flex-row align-items-center">
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                </svg>
                                </span>{atributo.nombre}</h5>
                                <p className="card-body">{atributo.descripcion}</p>
                               </section>
                    })}                    
                </div>
                <p>*Las asistencias presenciales estan sujetas a cobertura y disponibilidad de los tecnicos</p>
            </div>
        );
    }
}