import React, {Component} from 'react'
import '../../style/formulario.css';
class Formulario extends Component{
    constructor(){
        super();
        this.state = {
            nombre: '',
            correo: '',
            mensaje: '',
        }
        this.escribir=this.escribir.bind(this);
        this.enviar=this.enviar.bind(this);
    }
    escribir(e){
        const {value, name}=e.target;
        this.setState({
          [name]:value
        }) 
    }
    
    enviar(e){
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div className = "text-white w-75">
                <form className = "card-body formulario" onSubmit = {this.enviar}>
                    <div className = "d-flex row justify-content-center">
                        <input 
                        type="text" 
                        className="w-100 m-3" 
                        name='nombre' 
                        onChange = {()=> this.escribir} 
                        id= "name" 
                        placeholder = "Pepito Andres Perez Muñoz"/>

                        <input 
                        type="email" 
                        className="w-100 m-3" 
                        name='correo' 
                        onChange = {() => this.escribir} 
                        id= "email" 
                        placeholder = "example@gmail.com"/>

                        <textarea 
                        name='mensaje' 
                        className="w-100 m-3" 
                        type="text"
                        onChange = {() => this.escribir} 
                        id= "mensaje" 
                        placeholder = "Hola!!"/>
                    </div>
                    <button type="submit" name="save" className="btn" value="Save">Enviar</button>
                </form>
            </div>
        );
    }
}

export default Formulario