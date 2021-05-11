import React, {Component} from 'react'
import FirstInfo from '../components/info/firstInfo'
import SecondInfo from '../components/info/secondInfo'
import Clientes from '../components/clientes'
import logo from '../assets/logo.jpg'
import '../style/secondInfo.css'

class Principal extends Component{
    render(){
        return(
            <div className='mt-2 mb-2'>
                <FirstInfo/>
                <div className ="row col align-items-center secondCell">
                    <div className = "col">    
                        <SecondInfo/>
                    </div>
                    <div className = "col">
                        <Clientes/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Principal