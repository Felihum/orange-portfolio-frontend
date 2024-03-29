import React, {useContext, useState} from "react";
import GoogleBtn from "../../components/GoogleButton/GogleBtn";
import Button from "../../components/ButtonOrange/ButtonOrange";
import InputText from "../../components/inputText/InputText";
import InputPassword from "../../components/inputPassword/InputPass";
import AlertSucess from "../../components/alerts/AlertSucess";
import SelectNacionality from "../../components/SelectNacionality/SelectNacionality";
import imageLogin from "../../images/Login_Cad/img_login-0.png"
import InputName from "../../components/inputName/inputName"
import './Cad.css'
import { AuthContext } from "../../context/AuthContext";
import SelectNacionality from "../../components/SelectNacionality/SelectNacionality";

export default function Cad(){
  const { register } = useContext(AuthContext)

  const [email,setEmail] = useState("")
  const [nome,setNome] = useState("")
  const [sNome,setSNome] = useState("")
  const [password,setPassword] = useState()
  const [error,setError] = useState("")

  function callRegister(){
    register()
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("ok")
  };
  
    return(
        <div>
          <AlertSucess></AlertSucess>
          <div className='login-form-wrap'>
            <p className="tit1Login">Cadastre-se</p>
            <form className='login-form'>
              <InputText
                type="text"
                name="name"
                required={true}
                label="Nome"
                onChange={(e) => {setNome(e.target.value)}}
                value={nome}
                variant="outlined"
              ></InputText>
              <InputText
                type="text"
                name="sname"
                required={true}
                label="Sobrenome"
                onChange={(e) => {setSNome(e.target.value)}}
                value={sNome}
                variant="outlined"
              ></InputText>
              <SelectNacionality />
              <InputText
                type="email"
                name="email"
                required={true}
                label="Endereço de e-mail"
                onChange={(e) => {setEmail(e.target.value)}}
                value={email}
                variant="outlined"
              ></InputText>
              <InputPassword></InputPassword>
              <Button value="CADASTRAR" classN="btnLaranja" onClick={callRegister}></Button>
            </form>
          </div>
        </div>
    )
}