import React, {Component} from 'react'
import CardServicio from '../cardServicios'

class FirstInfo extends Component{
    render(){
        return(
            <div className = "container">
                <h2>Servicios a tu medida</h2>
                <p>No importa si tienes <b>equipos corporativos</b> o <b>equipos de hogar</b>, tenemos una solución a <b>tu medida</b></p>
                <CardServicio
                imagen='https://www.easystem.co/wp-content/uploads/2021/01/development-service-1-svg.png'
                titulo='Linea Corporativa'
                descripcion='Damos soporte a empresas, con mesa de ayuda, tecnicos en sitio o soporte por servicios adaptados a tu medida'
                />
                <CardServicio
                imagen='https://www.easystem.co/wp-content/uploads/2021/01/development-service-1-svg.png'
                titulo='Linea Corporativa'
                descripcion='Damos soporte a empresas, con mesa de ayuda, tecnicos en sitio o soporte por servicios adaptados a tu medida'
                />
            </div>
        );
    }
}

export default FirstInfo