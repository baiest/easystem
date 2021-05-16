import React, {Component} from 'react'
import Contactar from '../components/info/contactar'
import '../style/servicios.css'
import Servicio from '../components/cardServicios'
import { servicio } from '../data/servicio.json'

import ServicioRemoto from '../components/infoServicio/servicio-remoto'
import SoporteTecnico from '../components/infoServicio/soporte-tecnico'
import Marketing from '../components/infoServicio/marketing'
import Ecomerce from '../components/infoServicio/ecomerce'
import Redes from '../components/infoServicio/redes'
import SoporteNacional from '../components/infoServicio/soporte-nacional'

class Servicios extends Component{
    constructor(props){
        super(props);
        this.state = {
            informacionIndex: 0,
            informacionCard: [
                <ServicioRemoto/>,
                <SoporteTecnico/>,
                <Marketing/>,
                <Ecomerce/>,
                <Redes/>,
                <SoporteNacional/>,
            ]
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(key){
        this.setState({
            informacionIndex: key
        })
    }
    render(){
        return(
            <div className = "container">
                <h2>Nuestros Servicios</h2>
                <div className = "grupo-servicios mt-5 mb-5">
                    {servicio.map((s, key) => {
                        return (
                            <a key={key} href="#informacionCard" onClick={() => this.handleClick(key)}>
                                <Servicio
                                imagen={s.imagen}
                                titulo={s.titulo}
                                descripcion={s.descripcion}
                                />
                            </a>);
                    })}                    
                </div>
                
                <div>{this.state.nombreCard}</div>
                <section className = "row p-4 justify-content-center" id="informacionCard">
                    {this.state.informacionCard[this.state.informacionIndex] || <p>No se encontró la informacion</p>}
                </section>
                <Contactar className = "col"/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Servicios