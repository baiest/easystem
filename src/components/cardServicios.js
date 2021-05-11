import React, {Component} from 'react';
import '../style/cardServicio.css';

export default class CardServicio extends Component{
    
    render(){
        return(
            <div className='card p-4 align-items-center card-animation'>
                <img className='card-img-top w-25' src={this.props.imagen} alt={this.props.alt}/>
                <h5 className='card-title'>{this.props.titulo}</h5>
                <p className='card-text' >{this.props.descripcion}</p>
            </div>
        );
    }
}