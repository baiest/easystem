import React, {Component} from 'react'
import FirstInfo from './info/firstInfo'
import SecondInfo from './info/secondInfo'
import Formulario from './info/formulario'

import '../style/secondInfo.css'

class Principal extends Component{
    render(){
        return(
            <div>
                <FirstInfo/>
                <div className ="row align-items-center secondCell">
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