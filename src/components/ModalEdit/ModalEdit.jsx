import "./ModalEdit.css"
import AddFile from "../AddFile/AddFile";
import ModalSuccess from "../ModalSuccess/ModalSuccess";
import TextField from "@mui/material/TextField"

// eslint-disable-next-line react/prop-types
function ModalEdit({ isOpen, setModalEditOpen }) {
    if(isOpen){
        return (
            <form>
                <div className="bg-modal">
                    <div className="modal-success-card">
                        <ModalSuccess />
                    </div>
                    <div className="modal-card">
                        <div className="text-cnt">
                            <h3>Editar projeto</h3>
                        </div>
                        <div className="conteudo-form-section">
                            <div className="input-form-container">
                                <div className="text-input">
                                    <p>Selecione o conteúdo que você deseja fazer upload</p>
                                    <AddFile />
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
                                    <button type="button">Visualizar publicação</button>
                                </div>
                                <div className="div-button">
                                    <div className="btn-salvar">
                                        <button>Salvar</button>
                                    </div>
                                    <div className="btn-cancelar">
                                        <button onClick={setModalEditOpen}>Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }

    return null
}

export default ModalEdit;