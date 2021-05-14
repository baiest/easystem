import React, { Component } from 'react'
import Contactar from '../components/info/contactar'
import '../style/nosotros.css'
import misionVision from '../assets/mision-vision.jpg'
import {empleado} from '../data/empleado.json';

export default class Nosotros extends Component {

    render(){
        return(
            <div className = "container">
                <div className = "row align-items-center">
                    <div className = "col mt-4 text-left letra">
                        <p> Somos una empresa, con personal calificado y experimentado
                            en la prestación de servicios de Outsourcing en Tecnología
                            de la Información (TI).</p>
                    </div>
                    <div className = "col">
                            <img src="https://pbs.twimg.com/profile_images/1385255943601016833/lICPgxAO_400x400.png" alt="logo easystem" className='redondo'/>
                    </div>
                </div>
                <hr className = "row"/>
                <div className = "row">
                    <div className = "col nosotrosCell">
                        <div className = "col">
                            <h1 >Estrategia</h1>
                            <div className = "letra">
                                <p>Se han desarrollado estrategias de actualización
                                    de conocimiento a fin de mantener el personal competente
                                    que pueda responder en forma adecuada y oportuna los requerimientos
                                    que imponen los avances tecnológicos en Hardware y Software.</p>
                                
                                <p>Hoy por hoy todo nuestro compromiso, efectividad, rapidez, calidad,
                                    atención personalizada y un precio adecuado están orientados a 
                                    satisfacer las necesidades de nuestros clientes.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className = "row"/>
                <div className = "row align-items-center justify-content-center">
                    <h1 className = "display-4 col-md-12">EASYSTEM SOLUCIONES</h1>
                    <h1 className = "display-6 col-md-12">Contacta ahora</h1>
                    <Contactar className = "col-md-12"/>
                </div>
                
                <div className ="row empleado justify-content-center">
                    {empleado.map((emp, key) => {
                            return(
                            <div key = {key} className ="col-md-4 mt-5 text-center h-100">
                                <div className = "card text-white bg-dark m-3">
                                    <img className = "card-img-top align-items-center img-fluid" alt={`empleado ${key}`} src={emp.imagen || "https://www.easystem.co/wp-content/uploads/2021/04/cropped-Nuevo-proyecto-10-70x62.png"}/>
                                    <div className="card-body bg-dark" alt ="">
                                        <h3 className="card-text">{emp.nombre}</h3>
                                        <p className ="card-text text-left letra">{emp.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                            );
                        })}
                </div>
                <hr className = "row"/>
                <div className = "row nosotrosCell p-3 justify-content-center align-items-center">
                    <div className = "col mb-4">
                        <span>
                            <img src={misionVision} alt="imagen empresarial dibujo" className = "rounded img-fluid"/>
                        </span>
                    </div>
                    <div className = "col">
                        <h1 >Misión</h1>
                        <div className = "letra">
                            <p>Prestar el mejor servicio en las áreas de Outsoursing,
                                servicedesk, cableado estructurado, mantenimiento preventivo
                                y correctivo, manteniendo el nivel de calidad y compromiso para
                                satisfacer las necesidades y expectativas de nuestros clientes.</p>
                        </div>
                    </div>
                    <div className = "col">
                        <h1 >Visión</h1>
                        <div className = "letra">
                            <p>Prestar el mejor servicio en las áreas de Outsoursing,
                                servicedesk, cableado estructurado, mantenimiento preventivo
                                y correctivo, manteniendo el nivel de calidad y compromiso para
                                satisfacer las necesidades y expectativas de nuestros clientes.</p>
                        </div>
                    </div>
                </div>
                <hr className = "row"/>
                <h2>¿Por qué elegirnos?</h2>
                <ul className = "row nosotrosCell p-3 justify-content-center">
                    <ul className="col-md-4">
                        <h4>La Mejor Calidad</h4>
                        <p>Nuestros servicios finalizan con tu satisfacción, sin importar el tiempo requerido</p>
                    </ul>
                    <ul className="col-md-4">
                        <h4>Asistencia Inmediata</h4>
                        <p>Contamos con la primera mesa de ayuda para pequeñas empresas o usuarios domesticos y asi brindar soporte tecnico de manera inmediata</p>
                    </ul>
                    <ul className="col-md-4">
                        <h4>Soporte Técnico</h4>
                        <p>En caso de ser necesario, contamos con aliados a nivel nacional para brindar soporte presencial</p>
                    </ul>
                    <ul className="col-md-4">
                        <h4>Personal Capacitado</h4>
                        <p>Contamos con personal en constante capacitación para ofrecerte la mejor experiencia de servicio</p>
                    </ul>
                </ul>
            </div>
        );
    }
}