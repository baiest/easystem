// eslint-disabl-next-line
import React, { Component } from 'react'
import logo from '../assets/logo.jpg'
import Contactar from '../components/info/contactar'
import '../style/nosotros.css'
import misionVision from '../assets/mision-vision.jpg'
import {empleado} from '../components/empleado.json';

//Importar fotos en orden del JSON
var empleado1
var foto = []
try{
    empleado1 = require('../assets/personal/andrea.png')
    foto.push(empleado1)
}catch(e){
    console.log('Alguna foto no encontrada')
}


class Nosotros extends Component {

    render(){
        const listaEmpleado = empleado
        var count = -1
        return(
            <div className = "container">
                <div className = "row align-items-center">
                    <div className = "col mt-4 text-left letra">
                        <p> Somos una empresa, con personal calificado y experimentado
                            en la prestación de servicios de Outsourcing en Tecnología
                            de la Información (TI).</p>
                    </div>
                    <div className = "col">
                        <span>
                            <img src={logo} alt="" className = "rounded img-fluid"/>
                        </span>
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
                    {listaEmpleado.map((emp) => {
                            count+=1
                            return(
                            <div key = {count} className ="col-md-4 mt-5 text-center">
                                <div className = "card text-white bg-dark m-3">
                                    <img className = "card-img-top align-items-center img-fluid" alt="" src={foto[count] || logo}/>
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
                <div className = "row nosotrosCell p-3 align-items-center">
                    <div className = "col mb-4">
                        <span>
                            <img src={misionVision} alt="" className = "rounded img-fluid"/>
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
            </div>
        );
    }
}

export default Nosotros