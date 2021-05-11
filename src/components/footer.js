import React, { Component } from 'react'
import logo from '../assets/logo.jpg'

class Footer extends Component {
    actualYear(){
        var date = new Date();
        return date.getFullYear();
    }
    render(){
        return(
            <footer className = "p-4 page-footer text-white align-items-center w-100"
                    style={{background: '#3987f7'}}>   
                     <div className = "col ml-auto">
                        <span>
                            <img src='https://www.easystem.co/wp-content/uploads/2021/04/cropped-Nuevo-proyecto-10-70x62.png' className = "rounded img-fluid"/>
                        </span>
                    </div>
                    <br/>
                    <div className = "">
                        © {this.actualYear()} EASYSTEM hecho por Juan con ♥
                    </div>
            </footer>
        );
    }
}

export default Footer;