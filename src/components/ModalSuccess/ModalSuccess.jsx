import "./ModalSuccess.css"
import confirmIcon from "../../images/TextInput.png"

// eslint-disable-next-line react/prop-types
function ModalSuccess({ isOpenSuccess, setModalSuccessOpen }) {
    if(isOpenSuccess){
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
                            <button className="btn-voltar" onClick={setModalSuccessOpen}>Voltar para Projetos</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
    
}

export default ModalSuccess;