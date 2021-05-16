import React, { Component } from 'react'
import logo from '../assets/logo.jpg'
class Footer extends Component {
    actualYear(){
        var date = new Date();
        return date.getFullYear();
    }
    render(){
        return(
            <footer className = "p-4 row col m-auto page-footer text-white justify-content-center align-items-center"
                    style={{background: '#3987f7'}}>   
                    <div className = "col-md-4">
                        <span>
                            <img src={logo} alt='logo footer' style={{width: '100px'}} className = "rounded img-fluid"/>
                        </span>
                    </div>
                    <div className = "col-md-4 row justify-content-around align-items-center">
                        <p className="col">Soporte técnico online y presencial</p>
                        <a className="text-white m-2" href="https://www.google.com/maps/place/EASYSTEM/@3.446339,-76.49995,13z/data=!4m5!3m4!1s0x0:0x9df83eb31481b21b!8m2!3d3.4463386!4d-76.4999505?hl=es-CO">
                            <p className="d-flex justify-content-around w-100">
                                <span className="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt-fill md-2" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                </span>
                                Cra 12E # 51-05, cali (Colombia)
                            </p>
                        </a>
                        <a className="text-white m-2" href="mailto:servicios@easystem.co">
                            <p className="d-flex justify-content-around w-100">
                                <span className="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                </svg>
                                </span>
                                servicios@easystem.co
                            </p>
                        </a>
                        <a className="text-white m-2" href="https://wa.me/573163681714?text=Me%20interesa%20sus%20servicios%20web">
                            <p className="d-flex justify-content-around w-100">
                                <span className="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                </svg>
                                </span>
                                3163681714
                            </p>
                        </a>
                    </div>
                    <br/>
                    <div className = "col-md-4">
                        © {this.actualYear()} EASYSTEM hecho por Juan con ♥
                    </div>
            </footer>
        );
    }
}

export default Footer;