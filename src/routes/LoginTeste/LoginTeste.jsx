import React from "react";
import GoogleBtn from "../../components/GoogleButton/GogleBtn";
import { TextField } from "@mui/material";
import InputPassword from "../../components/inputPassword/InputPass";
import ButtonOrange from "../../components/ButtonOrange/ButtonOrange"
import InputText from "../../components/inputText/InputText";
import imageLogin from "../../images/Login_Cad/img_login-0.png"
import ImgTest from "../../images/ImageFull.png"
import "./LoginTeste.css"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {useContext, useEffect, useState} from "react";

export default function LoginTeste(){

    const { login } = useContext(AuthContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function callLogin(){
      //const response = await login(email, password)

      try {
        await login(email, password)
        navigate("/meus-projetos")
      } catch (error) {
        console.log(error)
      }
      
     
    }

    return(
        <div className="containerLoginTagFinal">


            <div className="imgLoginFinal">
                
            </div>


            <div className="loginCardFinal">


                <div className="tit1LoginFinal">
                    <p>Entre no Orange Portifólio</p>
                </div>


                <GoogleBtn></GoogleBtn>
                <div className="containerFormLoginFinal">


                    <div className="tit2LoginFinal">
                        <p>Faça seu login com email</p>
                    </div>


                    <div className="inputsLoginFinal">
                        <InputText
                        className="textFieldLoginFinal"
                        type="email"
                        name="email"
                        required
                        label="Endereço de email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                        ></InputText>
                        <InputPassword setPassword={setPassword}></InputPassword>
                        <button className="btnLaranja" onClick={callLogin}>ENTRAR</button>
                    </div>

                                 
                <div className="linksLoginFinal">
                    <a href="/cadastro">Cadastre-se</a>
                    {/* <a href="#">Esqueci minha senha</a> */}
                </div>
                </div>
            </div>
        </div>
    )
}