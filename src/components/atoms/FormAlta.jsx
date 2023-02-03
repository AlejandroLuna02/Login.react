import Logo from "../../assets/img/logo1.svg"
import React, { useRef } from "react";
import '../../assets/Styles/FormAlta.css';
import { useNavigate } from "react-router-dom";

const FormAlta = () => {
    const navigate = useNavigate()
    const Form = useRef()
    const endpoint = 'http://34.225.239.102/api/autobus/register'
    

    const hadlerClick = (e) => {
        e.preventDefault();
        const newForm = new FormData(Form.current);
        if(newForm.get("clave") === "" || newForm.get("placa") === "" || newForm.get("numasientos") === "" || newForm.get("fecha") === "" || newForm.get("tipo") === ""|| newForm.get("nombre") === ""){//el simbolo de pesos despues se nombra la variable
            alert("Rellene los campos vacios");
         }else{
        
            const options = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                clave: newForm.get("clave"),
                placa: newForm.get("placa"),
                numasientos: newForm.get("numasientos"),
                fecha: newForm.get("fecha"),
                tipo: newForm.get("tipo"),
                nombre: newForm.get("nombre"),
                licencia: parseInt(10000000000 + Math.random() * 90000),
              }),
            };
        
            fetch(endpoint, options)
              .then((response) => response.json())
              .then((data) => {
               
                if(data.status === true){
                    alert(JSON.stringify(data));
                }
            });
        }
    };

    return (
        <div className="container3">
            <form ref={Form}>
                <div>
                <img src={Logo} alt="" className="img" />
                    <div>
                        <label htmlFor="clave" className="h1">Clave autobus:</label>
                        <input type="text" className="text1" name="clave" />
                    </div>

                    <div>
                        <label htmlFor="placa" className="h2">Placas autobus:</label>
                        <input type="text" className="text2" name="placa" />
                    </div>

                    <div>
                        <label htmlFor="asientos" className="h3">Numero de asientos:</label>
                        <input type="number" className="text3" name="numasientos" />
                    </div>
                    
                    <div>
                        <label htmlFor="fecha" className="h4">Fecha de alta:</label>
                        <input type="date" className="text4" name="fecha" />
                    </div>

                    <div>
                        <label className="h5">Tipo:</label>
                            <select  className="text5" name="tipo">
                                <option>Turismo</option>
                                <option>Lujo</option>
                            </select>
                    </div>

                    <div>
                        <label htmlFor="nombre" className="h6">Nombre del chofer:</label>
                        <input type="text" className="text6" name="nombre" />
                    </div>
                    
                </div>
                <button type="button" className="btn3" onClick={hadlerClick}>Alta de autobus</button>
                <a href="/" id="salir">Salir</a>

            </form>

        </div>
    );
};

export default FormAlta;








































// export const FormAlta = () => {
//     return (
//         <div className="container3">
//             <form ref={form}>
//                 <div>
//                 <img src={Logo} alt="" className="img" />
//                     <div>
//                         <label htmlFor="clave" className="h1">Clave autobus:</label>
//                         <input type="text" className="text1" />
//                     </div>

//                     <div>
//                         <label htmlFor="placa" className="h2">Placas autobus:</label>
//                         <input type="text" className="text2" />
//                     </div>

//                     <div>
//                         <label htmlFor="numero" className="h3">Numero de asientos:</label>
//                         <input type="text" className="text3" />
//                     </div>
                    
//                     <div>
//                         <label htmlFor="fecha" className="h4">Fecha de alta:</label>
//                         <input type="text" className="text4" />
//                     </div>

//                     <div>
//                         <label htmlFor="tipo" className="h5">Tipo:</label>
//                         <input type="text" className="text5" />
//                     </div>

//                     <div>
//                         <label htmlFor="nombre" className="h6">Nombre del chofer:</label>
//                         <input type="text" className="text6" />
//                     </div>

//                     <div>
//                         <label htmlFor="licencia" className="h7">Numero de licencia:</label>
//                         <input type="text" className="text7" />
//                     </div>
//                 </div><br />
//                 <button type="button" className="btn3" onClick={''}>Alta de autobus</button>
//             </form>

//         </div>
//     )
// }