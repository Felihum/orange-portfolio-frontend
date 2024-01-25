import React, {useState} from "react";
import "./Login.css"
import GoogleBtn from "../../components/GogleButton/GogleBtn";
import Button from "../../components/ButtonOrange/Button";
import InputText from "../../components/inputText/InputText";
import InputPassword from "../../components/inputPassword/InputPass";

export default function Login(){
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState()
  const [error,setError] = useState("")
  const [entrarBtn,setEntrarBtn] = useState("Entrar")

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("ok")
  };
  
    return(
        <div className='login-form-wrap'>
          <p className="tit1Login">Entre no Orange Portifólio</p>
          <GoogleBtn></GoogleBtn>
          <form className='login-form'>
          <p className="tit2login">Faça login com email</p>
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
            <Button value="Entrar" classN="btnLaranja"></Button>
            <a href="#">Cadastre-se</a>
          </form>
        </div>
    )
}