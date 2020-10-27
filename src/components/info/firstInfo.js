import React, {Component} from 'react'
import compu from '../../assets/compu.jpg'
import '../../style/firstInfo.css'
class FirstInfo extends Component{
    render(){
        return(
            <div className = "p-4">
                <div className = "row justify-content-center align-items-center cell">
                    <div className = "col-xs-1 justify-content-center">
                        <h1>ASISTENCIA TECNICA REMOTA</h1>
                        <h4>Para Computadores</h4>
                        <h6>Servicio de asistencia tecnica remota para Computadores y portatiles</h6>
                        <div className = "p-4">
                            <a href="#" className = "btn btn-success">Contactanos</a>
                        </div>
                    </div>
                    <div className = "col ml-auto">
                        <span>
                            <img src={compu} className = "rounded img-fluid"/>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstInfo