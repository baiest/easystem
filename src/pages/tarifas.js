import React, { Component } from 'react'
import TarifaCard from '../components/tarifaCard';
import InformacionTarifa from '../components/informacionTarifa';
import '../style/tarifa.css'
import {informacionCard} from '../data/tarifa.json'
export default class Tarifas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informacionIndex: 1,
            informacionCard: informacionCard
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(key) {
        console.log(key)
        this.setState({
            informacionIndex: key
        })
    }

    render() {
        return ( 
        <div className = "container-tarifa mt-4 mb-4" >
            <TarifaCard {...this.state.informacionCard[0]} color="green" index={0} handler={this.handleClick}/>
            <TarifaCard {...this.state.informacionCard[1]} color="#f66c5d" index={1} handler={this.handleClick}/>
            <TarifaCard {...this.state.informacionCard[2]} color="#3987f7" index={2} handler={this.handleClick}/>
            <InformacionTarifa {...this.state.informacionCard[this.state.informacionIndex]}/>
        </div>
        );
    }
}