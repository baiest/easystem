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
                    style={{backgroundColor: '#572364'}}>   
                     <div className = "col ml-auto">
                        <span>
                            <img src={logo} className = "rounded img-fluid"/>
                        </span>
                    </div>
                    <br/>
                    <div className = ""
                         style={{backgroundColor: '#548'}}>
                        © {this.actualYear()} EASYSTEM
                    </div>
            </footer>
        );
    }
}

export default Footer;