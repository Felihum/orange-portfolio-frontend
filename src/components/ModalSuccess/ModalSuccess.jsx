import "./ModalSuccess.css"
import confirmIcon from "../../images/TextInput.png"
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

// eslint-disable-next-line react/prop-types
function ModalSuccess() {

    const {
        openModalSuccess,
        setOpenModalSuccess
    } = useContext(ModalContext)

    if(openModalSuccess){
        return (
            <div className="bg-modal-success">
                <div className="modal-success-container">
                    <div className="conteudo-frame">
                        <div className="paragraph-section">
                            <h3>Projeto adicionado com sucesso!</h3>
                        </div>
                        <div className="img-section">
                            <div className="img-success-container">
                                <img src={confirmIcon} />
                            </div>
                        </div>
                        <div className="button-section">
                            <button className="btn-voltar" onClick={() => setOpenModalSuccess(false)}>Voltar para Projetos</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
    
}

export default ModalSuccess;