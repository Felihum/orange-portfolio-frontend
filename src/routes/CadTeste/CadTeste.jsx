import React, {useState} from "react";
import GoogleBtn from "../../components/GoogleButton/GoogleBtn";
import Button from "../../components/ButtonOrange/ButtonOrange";
import InputText from "../../components/inputText/InputText";
import InputPassword from "../../components/inputPassword/InputPass";
import AlertSucess from "../../components/alerts/AlertSucess";
import SelectNacionality from "../../components/SelectNacionality/SelectNacionality";
import './CadTeste.css'

// export default function CadTeste(){
//   const [email,setEmail] = useState("")
//   const [nome,setNome] = useState("")
//   const [sNome,setSNome] = useState("")
//   const [nac,setNac] = useState("")
//   const [password,setPassword] = useState()
//   const [error,setError] = useState("")

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log("ok")
//   };
  
//     return(
//         <div>
//           <AlertSucess></AlertSucess>
//           <div className='login-form-wrap'>
//             <p className="tit1Login">Cadastre-se</p>
//             <form className='login-form'>
//               <InputText
//                 type="text"
//                 name="name"
//                 required={true}
//                 label="Nome"
//                 onChange={(e) => {setNome(e.target.value)}}
//                 value={nome}
//                 variant="outlined"
//               ></InputText>
//               <InputText
//                 type="text"
//                 name="sname"
//                 required={true}
//                 label="Sobrenome"
//                 onChange={(e) => {setSNome(e.target.value)}}
//                 value={sNome}
//                 variant="outlined"
//               ></InputText>
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
//               {/* <SelectNacionality></SelectNacionality> */}
//               <Button value="CADASTRAR" classN="btnLaranja"></Button>
//             </form>
//           </div>
//         </div>
//     )
// }

export default function LoginTeste(){
  return(
      <div className="containerLoginTag">


          {/* <div className="imgLogin">
              <img src={imageLogin}></img>
          </div> */}


          <div className="loginCard">


              <div className="tit1Login">
                  <p>Cadastre-se</p>
              </div>


   
              <div className="containerFormLogin">


                  <div className="inputsLogin">
                      <div className="inputTextNameSurname">
                        <InputText
                        className="textFieldLogin"
                        type="text"
                        name="nome"
                        required
                        label="Nome"
                        variant="outlined"
                        ></InputText>
                        <InputText
                        className="textFieldLogin"
                        type="text"
                        name="Snome"
                        required
                        label="Sobrenome"
                        variant="outlined"
                        ></InputText>
                      </div>
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
  )
}