import React, {Component} from 'react';
import '../style/cardServicio.css';

export default class CardServicio extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            imagenWidth: props.imagenWidth? props.imagenWidth : '150px'
        }
    }

    render(){
        return(
            <div className='card p-4 align-items-center card-animation text-left' onClick={() => this.props.handler}>
                <img className='card-img-top' style={{width: `${this.state.imagenWidth}`}} src={this.props.imagen} alt={this.props.alt}/>
                <h5 className='card-title'>{this.props.titulo}</h5>
                <p className='card-text' >{this.props.descripcion}</p>
            </div>
        );
    }
}