import React, { Component } from 'react';


class Bienvenida extends Component{
    constructor(){
        super();
        this.state = {
            nombre: 'Easystem'
        }
    }
    render(){
        return(
            <div>
                <a href='#' className= "btn btn-primary">HOLA {this.state.nombre}</a>{' '}
            </div>
        );
    }
}

export default Bienvenida