import React, {useState} from "react";
import GoogleBtn from "../../components/GoogleButton/GogleBtn";
import Button from "../../components/ButtonOrange/ButtonOrange";
import InputText from "../../components/inputText/InputText";
import InputPassword from "../../components/inputPassword/InputPass";
import AlertSucess from "../../components/alerts/AlertSucess";
import SelectNacionality from "../../components/SelectNacionality/SelectNacionality";
import imageLogin from "../../images/Login_Cad/img_login-0.png"
import InputName from "../../components/inputName/inputName"
import './CadTeste.css'



export default function CadTeste(){
    return(
        <div className="containerLoginTag-final">


            <div className="imgLogin-final">
                {/* <img src={imageLogin} id="imgLoginTagCad-final"></img> */}
            </div>


            <div className="loginCard-final">


                <div className="tit1Login-final">
                    <p>Entre no Orange Portifólio</p>
                </div>


                <div className="containerFormLogin-final">

                    <div className="inputsLogin-final">
                        <div className="textFieldName-final">
                            {/* <InputText
                            type="text"
                            name="nome"
                            required
                            label="Nome"
                            variant="outlined"
                            ></InputText>
                            <InputText
                            type="text"
                            name="Snome"
                            required
                            label="Sobrenome"
                            variant="outlined"
                            ></InputText> */}
                            <InputName
                            type="text"
                            name="nome"
                            required
                            label="Nome"
                            variant="outlined"></InputName>
                            <InputName
                            type="text"
                            name="Snome"
                            required
                            label="Sobrenome"
                            variant="outlined"></InputName>
                        </div>
                        <SelectNacionality></SelectNacionality>
                        <InputPassword></InputPassword>
                        <button className="btnLaranja">ENTRAR</button>
                    </div>

                                 
                <div className="linksLogin-final">
                    <a href="#">Cadastre-se</a>
                    {/* <a href="#">Esqueci minha senha</a> */}
                </div>
                </div>
            </div>
        </div>
    )
}