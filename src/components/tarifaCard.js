import React, {Component} from 'react'
import '../style/tarifaCard.css'
export default class TarifaCard extends Component{
    render(){
        return(
            <div className='tarifa-card card-animation' onClick={() => this.props.handler(this.props.index)}>
                <h3>{this.props.nombre}</h3>
                <h2>${this.props.precio}</h2>
            </div>
        );
    }
}