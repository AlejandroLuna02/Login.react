import Logo from "../../assets/img/logo1.svg"
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/Styles/FormRegister.css';

const FormRegister = () => {
    const navigate = useNavigate()
    const name = useRef()
    const username = useRef()
    const password = useRef()

    const Form = useRef()
    const endpoint = 'http://34.225.239.102/api/registrar/usuario'

    const hadlerClick = (e) => {
        e.preventDefault();
        const newForm = new FormData(Form.current);
    
        if(newForm.get("nombre") === "" || newForm.get("usuario") === "" || newForm.get("correo") === "" || newForm.get("contrasenia") === ""){
            alert("Rellene los campos vacios");
         }else{
            
        const options = {
    
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            nombre: newForm.get("nombre"),
            usuario: newForm.get("usuario"),
            correo: newForm.get("correo"),
            contrasenia: newForm.get("contrasenia"),
          }),
        };
        fetch(endpoint, options)
          .then((response) => response.json())
          .then((data) => {
            alert(JSON.stringify(data));
            if(data.status === true){
                navigate("/");
              }else{
                alert("Error, intenta de nuevo")
              }
          });
        }
      };
    return (
        <div className="container2">
            <form ref={Form}>
                <img src={Logo} alt="" className="img" />
                    <div>
                        <label htmlFor="nombre" className="name">Nombre:</label>
                        <input type="text" id="name" className="input1" name="nombre"/>
                    </div>

                    <div>
                        <label htmlFor="usuario" className="user">Usuario:</label>
                        <input type="text" className="input2" name="usuario"/>
                    </div>

                    <div>
                        <label htmlFor="correo" className="e-mail">Correo:</label>
                        <input type="text" id="name" className="input3" name="correo" />
                    </div>

                    <div>
                        <label className="password">Contraseña:</label>
                        <input type="password" className="input4" name="contrasenia"/>
                    </div>
                <button type="button" className="btn2" onClick={hadlerClick}>Registrarse</button>
            </form>
        </div>
    );
};

export default FormRegister;
































// export const FormRegister = () => {
//     return (
//         <div className="container2">
//             <form id="form_register">
//                 <div>
//                 <img src={Logo} alt="" className="img" />
//                 <h4 className="name">Nombre:</h4>
//                 <input type="text" className="input1" />
//                 <h4 className="e-mail">E-mail:</h4>
//                 <input type="text" className="input2" />
//                 <h4 className="user">Usuario:</h4>
//                 <input type="text" className="input3" />
//                 <h4 className="password">Contraseña:</h4>
//                 <input type="password" className="input4" />
//                 </div><br />
//                 <input type="submit" className="btn2" value="Registro"/>
//             </form>

//         </div>
//     )
// }

/* <form id="form_register">
<div>
<img src={Logo} alt="" className="img" />
<h4 className="name">Nombre:</h4>
<input type="text" className="input1" />
<h4 className="e-mail">E-mail:</h4>
<input type="text" className="input2" />
<h4 className="user">Usuario:</h4>
<input type="text" className="input3" />
<h4 className="password">Contraseña:</h4>
<input type="password" className="input4" />
</div><br />
<input type="submit" className="btn2" value="Registro"/>
</form> */
