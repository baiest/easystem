import React, {Component} from 'react'
import FirstInfo from '../components/info/firstInfo'
import SecondInfo from '../components/info/secondInfo'
import Clientes from '../components/clientes'
import '../style/secondInfo.css'
import InformacionContacto from '../components/informacionContacto'

class Principal extends Component{
    render(){
        return(
            <div className='mt-2 mb-2'>
                <FirstInfo/>
                <div className ="row col align-items-center secondCell">
                    <div className = "col mt-4 mb-4">    
                        <SecondInfo/>
                    </div>
                    <div className = "col mt-4 mb-4">
                        <Clientes/>
                    </div>
                 </div>
                 <InformacionContacto/>
            </div>
        );
    }
}

export default Principal