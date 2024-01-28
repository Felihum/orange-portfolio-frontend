import React, {useState} from "react";
import "./Login.css"
import GoogleBtn from "../../components/GoogleButton/GogleBtn";
import Button from "../../components/ButtonOrange/ButtonOrange";
import InputText from "../../components/inputText/InputText";
import InputPassword from "../../components/inputPassword/InputPass";
import ImageLogin from '../../images/Login_Cad/img_login-1.png'
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// export default function Login(){
//   const [email,setEmail] = useState("")
//   const [password,setPassword] = useState()
//   const [error,setError] = useState("")
//   const [entrarBtn,setEntrarBtn] = useState("Entrar")

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log("ok")
//   };
  
//     return(
//         <div>
//           {/* <img src={ImageLogin} /> */}
//           {/* {type, name, label, required, onChange, value,variant} */}
//           <div className='login-form-wrap'>
//             <p className="tit1Login">Entre no Orange Portifólio</p>
//             <GoogleBtn></GoogleBtn>
//             <form className='login-form'>
//             <p className="tit2login">Faça login com email</p>
//               <InputText
//                 type="email"
//                 name="email"
//                 required={true}
//                 label="Endereço de e-mail"
//                 onChange={(e) => {setEmail(e.target.value)}}
//                 value={email}
//                 variant="outlined"
//               ></InputText>
//               <InputPassword></InputPassword>
//               <Button value="Entrar" classN="btnLaranja"></Button>
//               <a href="#">Cadastre-se</a>
//             </form>
//           </div>
//         </div>
//     )
// }


export default function Login(){
    return(
        <div className="mainContainer">
          <div className="containerImgLogin">
            <img src={ImageLogin}  className="imgLogin" />
          </div>
          <div className="containerTit">
              <p className="tit1Login">Entre no Orange Portifólio</p>
            </div>
          <div className='login-form-wrap'>
            <GoogleBtn></GoogleBtn>
            <p className="tit2login">Faça login com email</p>
            <br></br>
            <TextField
              className="textFieldLogin"              
              type="email" 
              name="email" 
              required
              label="Endereço de email"
              variant="outlined"
            ></TextField>
            <form className='login-form'>
              <InputPassword></InputPassword>
              <Button value="Entrar" classN="btnLaranja"></Button>
              <br/>
              <a href="#">Cadastre-se</a>
            </form>
          </div>
        </div>
    )
}