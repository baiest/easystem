import React, {Component} from 'react'

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
            <div className = "card bg-primary text-white m-3">
                <form className = "card-body" onSubmit = {this.enviar}>
                    <div className = "form-row text-left">
                        <div className = "form-grup col-md-6">
                            <label htmlFor="name" className = "form-control-lg">Nombre completo:</label>
                            <input type="text" name='nombre' onChange = {this.escribir} className="form-control" id= "name" placeholder = "Pepito Andres Perez Muñoz"/>
                        </div>
                        <div className = "form-group col-md-6">
                            <label htmlFor="email" className = "form-control-lg">Correo:</label>
                            <input type="email" name='correo' onChange = {this.escribir} className="form-control" id= "email" placeholder = "example@gmail.com"/>
                        </div>
                        <div className = "form-group col">
                            <label htmlFor="msj" className = "form-control-lg">Comentario o mensaje:</label>
                            <textarea className = "form-control" name='mensaje' type="text" onChange = {this.escribir} className="form-control" id= "msj" placeholder = "Hola!!"/>
                        </div>
                    </div>
                    <button type="submit" name="save" className="btn btn-success" value="Save">Enviar</button>
                </form>
            </div>
        );
    }
}

export default Formulario