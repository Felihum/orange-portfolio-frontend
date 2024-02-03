import React from "react";
import GoogleBtn from "../../components/GoogleButton/GoogleBtn";
import { TextField } from "@mui/material";
import InputPassword from "../../components/inputPassword/InputPass";
import ButtonOrange from "../../components/ButtonOrange/ButtonOrange";
import InputText from "../../components/inputText/InputText";
import "./LoginTeste.css";
import imageLogin from "../../images/Login_Cad/img_login-0.png";

export default function LoginTeste() {
  return (
    <div className="containerLoginTag">
      <div className="imgLogin">
        <img src={imageLogin}></img>
      </div>

      <div className="loginCard">
        <div className="tit1Login">
          <p>Entre no Orange Portifólio</p>
        </div>

        <GoogleBtn></GoogleBtn>
        <div className="containerFormLogin">
          <div className="tit2Login">
            <p>Faça seu login com email</p>
          </div>

          <div className="inputsLogin">
            <InputText
              className="textFieldLogin"
              type="email"
              name="email"
              required
              label="Endereço de email"
              variant="outlined"
            ></InputText>
            <InputPassword></InputPassword>
            <button className="btnLaranja">ENTRAR</button>
          </div>

          <div className="linksLogin">
            <a href="#">Cadastre-se</a>
            <a href="#">Esqueci minha senha</a>
          </div>
        </div>
      </div>
    </div>
  );
}
