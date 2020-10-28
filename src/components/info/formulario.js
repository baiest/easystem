import React, {Component} from 'react'

class Formulario extends Component{
    render(){
        return(
            <div className = "card bg-primary text-white m-3">
                <form className = "card-body">
                    <div className = "form-row text-left">
                        <div className = "form-grup col-md-6">
                            <label htmlFor="name" className = "form-control-lg">Nombre completo:</label>
                            <input type="text" className="form-control" id= "name" placeholder = "Pepito Andres Perez Muñoz"/>
                        </div>
                        <div className = "form-group col-md-6">
                            <label htmlFor="email" className = "form-control-lg">Correo:</label>
                            <input type="text" className="form-control" id= "email" placeholder = "example@gmail.com"/>
                        </div>
                        <div className = "form-group col">
                            <label htmlFor="msj" className = "form-control-lg">Comentario o mensaje:</label>
                            <textarea className = "form-control" type="text" className="form-control" id= "msj" placeholder = "Hola!!"/>
                        </div>
                    </div>
                    <button className = "btn btn-success">Enviar</button>
                </form>
            </div>
        );
    }
}

export default Formulario