import React, { Component } from 'react'
import logoSpotify from '../assets/social/logoSpotify.png'
//const API = require('../repository/api_spotify');
//const API = require('../repository/api_blog');

export default class Podcast extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataId: null
        }
    }

    async componentDidMount(){
       // this.setState({dataId: await API.getBlogs()});
        //console.log(this.state.dataId)
    }
    render(){
        return(
            <div className='d-flex flex-row mt-4 mb-4 text-left flex-wrap justify-content-around align-items-center'>
                <div className="col">
                <p style={{width: '500px'}}>
                    Un podcast de easystem donde te hablamos de Marketing digital y tencnologia en tu idioma, sin tecnisismo, ayudando a impulsar tu negocio
                </p>
                <a href="https://open.spotify.com/embed/show/2sK9Oft0JzL6gEyUb6RxJO" target='_blank' rel="noreferrer">
                <span><img src={logoSpotify} style={{width: '50px'}} alt="spotify logo" /></span>easypodcast</a>
                </div>
                <iframe title='easypodcast' src="https://open.spotify.com/embed/show/2sK9Oft0JzL6gEyUb6RxJO" width="600px" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
           </div>
        );
    }
}