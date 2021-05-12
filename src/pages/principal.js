import React, {Component} from 'react'
import FirstInfo from '../components/info/firstInfo'
import SecondInfo from '../components/info/secondInfo'
import Clientes from '../components/clientes'
import '../style/secondInfo.css'
import Formulario from '../components/info/formulario'

class Principal extends Component{
    render(){
        return(
            <div className='mt-2 mb-2'>
                <FirstInfo/>
                <div className ="row col secondCell">
                    <div className = "col mt-4 mb-4">    
                        <SecondInfo/>
                    </div>
                    <div className = "col mt-4 mb-4">
                        <Clientes/>
                    </div>
                 </div>
                 <div className='row align-items-center'>
                    <div className='col mt-4 mb-4 justify-content-center d-flex'>
                        <Formulario/>
                    </div>
                    <iframe 
                    className='col mt-4 mb-4 justify-content-center d-flex'
                    scrolling="no"
                    src='https://maps.google.com/maps?q=easystem&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near'
                    title="easystem" 
                    aria-label="easystem"
                    height="400"
                    width="400"
                    style={{border: '0'}}></iframe>             
                 </div>
            </div>
        );
    }
}

export default Principal