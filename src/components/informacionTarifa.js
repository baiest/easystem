import React, { Component } from 'react'

export default class InformacionTarifa extends Component{
    render(){
        return(
            <div className="text-left">
                <div id="precio" className="d-flex flex-wrap flex-row justify-content-around align-items-center mt-5">  
                    <h3 className="d-flex flex-md-wrap ">{this.props.nombre}</h3>
                    <h2 className="d-flex display-3">${this.props.precio}</h2>
                </div>
                <div className="d-flex flex-wrap justify-content-around">
                    {this.props.atributos.map((atributo, key) =>{
                        return <section key={key} className="card mb-4">
                                <h5 className="card-title mt-4 ml-4">{atributo.nombre}</h5>
                                <p className="card-body">{atributo.descripcion}</p>
                               </section>
                    })}                    
                </div>
            </div>
        );
    }
}