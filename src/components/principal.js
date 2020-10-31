import React, {Component} from 'react'
import FirstInfo from './info/firstInfo'
import SecondInfo from './info/secondInfo'
import Formulario from './info/formulario'
import logo from '../assets/logo.jpg'
import '../style/secondInfo.css'

class Principal extends Component{
    render(){
        return(
            <div>
                <FirstInfo/>
                <div className = "mt-4 mb-4">
                    <span>
                        <img src={logo} alt="" className = "rounded img-fluid"/>
                    </span>
                </div>
                <div className ="row col align-items-center secondCell">
                    <div className = "col">    
                        <SecondInfo/>
                    </div>
                    <div className = "col">
                        <Formulario/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Principal