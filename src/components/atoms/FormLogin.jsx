import Logo from "../../assets/img/logo1.svg"
import React, { useRef } from "react";
import '../../assets/Styles/FormLogin.css'
import { Link, useNavigate } from "react-router-dom";

const FormLogin = () => {
    const navigate = useNavigate()

    const Form = useRef()
    const endpoint = 'http://34.225.239.102/api/iniciar'

    const handlerClick = (e) => {
        e.preventDefault();
        const newForm = new FormData(Form.current);
        
        if(newForm.get("usuario") === "" || newForm.get("contrasenia") === ""){
          alert("Rellene los campos vacios");
       }else{
            const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
            usuario: newForm.get("usuario"),
            contrasenia: newForm.get("contrasenia"),
          }),
        
        };
    
        fetch(endpoint, options)
          .then((response) => response.json())
          .then((data) => {
            console.log(data.status);
            if(data.status === true){
                alert("Bienvenido");
                navigate("/alta");
            }else{
                alert("Datos incorrectos")
            }
          });
        };
    };
    
    return (
        <div className="container">
        
            <form ref={Form}>
                <div>
                    <img src={Logo} alt="" className="img" />
                    <div>
                        <label htmlFor="usuario" className="usuario">Usuario:</label>
                        <input type="text" className="input_text"name="usuario"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="password" className="contraseña">Contraseña:</label>
                    <input type="password" className="input_password" name="contrasenia"/>
                </div>
                <button type="button" className="btn" onClick={handlerClick}>Registrarse</button>
                <div className="registrarse">
                    <span>¿No tienes cuenta? <Link to="/register">Registrate</Link></span>
                </div>
            </form>

        </div>
    );
};

export default FormLogin;