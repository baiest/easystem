import React, {Component} from 'react';
import '../style/clientes.css';
export default class Clientes extends Component{
    constructor(props){
        super(props);
        this.clientes = [
            'https://www.easystem.co/wp-content/uploads/2020/12/LexmarkLogo_CMYK_1375-1.png',
            'https://www.easystem.co/wp-content/uploads/2021/01/CSJLogo.png',
            'https://www.easystem.co/wp-content/uploads/2020/12/logo-neurofic-1.png',
            'https://www.easystem.co/wp-content/uploads/2021/01/decameron-logo.png'
        ]
    }

    render() {
        return(
            <div className = "container">
                <h2>Algunos de nuestros clientes</h2>
                <div className='row align-items-center justify-content-center'>
                    {this.clientes.map((c, key) => {
                        return <img src={c} key={`cliente ${key}`} alt={`cliente ${key}`} className='row m-3 imagen-cell'/>
                    })}
                </div>
            </div>
        );
    }
}