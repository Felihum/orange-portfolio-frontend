import React, {useContext, useEffect, useState} from "react";
import InputAdornments from "../../components/inputPassword/InputPass";
import SelectNacionality from "../../components/SelectNacionality/SelectNacionality";
import InputName from "../../components/inputName/inputName"
import './CadTeste.css'
import InputText from "../../components/inputText/InputText";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";



export default function CadTeste(){
    const navigate = useNavigate()

    const {register} = useContext(AuthContext)

    const[name, setName] = useState("")
    const[surname, setSurname] = useState("")
    const[email, setEmail] = useState("")
    const[nationality, setNationality] = useState("")
    const[password, setPassword] = useState("")

    async function callResgister(){
        try {
            const result = await register(name, surname, nationality, email, password)
            console.log(result)
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

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
                            <InputName
                            type="text"
                            name="nome"
                            required
                            label="Nome"
                            onChange={setName}
                            variant="outlined"></InputName>
                            <InputName
                            type="text"
                            name="Snome"
                            required
                            label="Sobrenome"
                            onChange={setSurname}
                            variant="outlined"></InputName>
                        </div>
                        <SelectNacionality nationality={nationality} setNationality={setNationality}></SelectNacionality>
                        <InputText
                        className="textFieldLoginFinal"
                        type="email"
                        name="email"
                        required
                        label="Endereço de email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                        ></InputText>
                        <InputAdornments setPassword={setPassword}></InputAdornments>
                        <button className="btnLaranjaFinal" onClick={() => callResgister()}>CADASTRAR</button>
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