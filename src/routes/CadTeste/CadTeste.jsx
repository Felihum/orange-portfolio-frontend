import React, {useState} from "react";
import InputPassword from "../../components/inputPassword/InputPass";
import SelectNacionality from "../../components/SelectNacionality/SelectNacionality";
import InputName from "../../components/inputName/inputName"
import './CadTeste.css'
import InputText from "../../components/inputText/InputText";



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
                        <InputText
                        className="textFieldLoginFinal"
                        type="email"
                        name="email"
                        required
                        label="Endereço de email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                        ></InputText>
                        <InputPassword></InputPassword>
                        <button className="btnLaranjaFinal">CADASTRAR</button>
                    </div>

                                 
                <div className="linksLogin-final">
                    <a href="/login">Logar</a>
                    {/* <a href="#">Esqueci minha senha</a> */}
                </div>
                </div>
            </div>
        </div>
    )
}