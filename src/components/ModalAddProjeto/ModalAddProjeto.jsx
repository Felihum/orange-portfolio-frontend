import AddFirst from "../AddFirst/AddFirst";
import "./ModalAddProjeto.css"
import TextField from "@mui/material/TextField"

// eslint-disable-next-line react/prop-types
function ModalAddProjeto({ isOpen, setModalOpen }) {
    if(isOpen){
        return (
            <div className="bg-modal">
                <div className="modal-card">
                    <div className="text-cnt">
                        <h3>Adicionar projeto</h3>
                    </div>
                    <div className="input-form-container">
                        <div className="text-input">
                            <p>Selecione o conteúdo que você deseja fazer upload</p>
                            <AddFirst />
                        </div>
                        <div className="input-form">
                            <div className="input-default">
                                <TextField className="input-item" label="Título" variant="outlined" />
                            </div>
                            <div className="input-default">
                                <TextField className="input-item" label="Tags" variant="outlined" />
                            </div>
                            <div className="input-default">
                                <TextField className="input-item" label="Link" variant="outlined" />
                            </div>
                            <div className="input-descricao">
                                <TextField className="input-descricao-item" label="Descrição" variant="outlined" />
                            </div>
                        </div>
                    </div>
                    <div className="button-container">
                        <div className="div-visualizar">
                            <button>Visualizar publicação</button>
                        </div>
                        <div className="div-button">
                            <div className="btn-salvar">
                                <button>Salvar</button>
                            </div>
                            <div className="btn-cancelar">
                                <button onClick={setModalOpen}>Cancelar</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null
}

export default ModalAddProjeto;