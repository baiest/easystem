import React, { Component } from 'react'
import TarifaCard from '../components/tarifaCard';
import InformacionTarifa from '../components/informacionTarifa';
import '../style/tarifa.css'
export default class Tarifas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informacionIndex: 0,
            informacionCard: [{
                nombre: "Mantenimiento Preventivo Presencial",
                precio: "19.000",
                atributos: [{
                        nombre: "Preventivo",
                        descripcion: "Limpieza interna y externa de los dispositivos, evita daños por sobrecalentamiento"
                    },
                    {
                        nombre: "Inventario",
                        descripcion: "Inventario en físico o digital de cada dispositivo"
                    },
                    {
                        nombre: "Mantenimiento lógico",
                        descripcion: "Inventario en físico o digital de cada dispositivo"
                    },
                    {
                        nombre: "Limpieza de temporales y optimización del sistema",
                        descripcion: "Limpieza de temporales y optimización del sistema"
                    },
                    {
                        nombre: "Cobertura Nacional",
                        descripcion: "Contamos con aliados a nivel nacional*"
                    },


                ]
            }]
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(key) {
        this.setState({
            informacionIndex: key
        })
    }

    render() {
        return ( 
        <div className = "container-tarifa mt-4 mb-4" >
            <TarifaCard props={...this.state.informacionCard[0]}/>
            <TarifaCard/>
            <TarifaCard/>
            <InformacionTarifa/>
        </div>
        );
    }
}