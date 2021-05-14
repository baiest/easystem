import React, {Component} from 'react'
import '../style/tarifaCard.css'
export default class TarifaCard extends Component{
    render(){
        return(
            <a href="#informacion-tarifa" className='tarifa-card card-animation' style={{borderColor: this.props.color}} onClick={() => this.props.handler(this.props.index)}>
                <h3>{this.props.nombre}</h3>
                <h2>${this.props.precio}</h2>
            </a>
        );
    }
}