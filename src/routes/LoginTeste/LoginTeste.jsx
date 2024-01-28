import React from "react";
import GoogleBtn from "../../components/GoogleButton/GogleBtn";
import { TextField } from "@mui/material";
import InputPassword from "../../components/inputPassword/InputPass";
import ButtonOrange from "../../components/ButtonOrange/ButtonOrange"
import InputText from "../../components/inputText/InputText";
import "./LoginTeste.css"



export default function LoginTeste(){
    return(
        <div className="containerLoginTag">


            <div className="loginCard">
                <div className="tit1Login">
                    <p>Entre no Orange Portifólio</p>
                </div>
                <GoogleBtn></GoogleBtn>
                <div className="containerFormLogin">
                    <div className="tit2Login">
                        <p>Faça seu login com email</p>
                    </div>
                    {/* Elemento */}
                    <InputText
                    className="textFieldLogin"
                    type="email"
                    name="email"
                    required
                    label="Endereço de email"
                    variant="outlined"
                    ></InputText>
                    {/* elemento */}
                    <InputPassword></InputPassword>
                    <button className="btnLaranja">ENTRAR</button>
                    {/* <ButtonOrange
                     value="Entrar"
                     classN="btnLaranja"
                     ></ButtonOrange> */}
                </div>
            </div>

            
            <div className="linksLogin">
                <a href="#">Cadastre-se</a>
                {/* <a href="#">Esqueci minha senha</a> */}
            </div>


        </div>
    )
}