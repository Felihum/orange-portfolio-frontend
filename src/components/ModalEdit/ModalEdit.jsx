import "./ModalEdit.css"
import AddFile from "../AddFile/AddFile";
import ModalSuccess from "../ModalSuccess/ModalSuccess";
import TextField from "@mui/material/TextField"
import { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { updateProject } from "../../scripts/Api/projects";

// eslint-disable-next-line react/prop-types
function ModalEdit({projectId}) {

    const [image, setImage] = useState("")
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");

    const {
        openModalEdit,
        setOpenModalEdit,
        setOpenModalVisual,
        setOpenModalSuccess
    } = useContext(ModalContext)

    async function editProject(){
        try {
            await updateProject(projectId, image, title, tags, link, description)

            setOpenModalEdit(false)
            setOpenModalSuccess(true)
        } catch (error) {
            window.alert(error)
        }
    }

    if(openModalEdit){
        return (
            <div className="bg-modal">
                <div className="modal-success-card">
                    <ModalSuccess />
                </div>
                <div className="modal-card">
                    <div className="text-cnt">
                        <h3>Editar Projeto</h3>
                    </div>
                    <div className="conteudo-form-section">
                        <div className="input-form-container">
                            <div className="text-input">
                                <p>Selecione o conteúdo que você deseja fazer upload</p>
                                <AddFile setFileData={setImage} />
                            </div>
                            <div className="input-form">
                                <div className="input-default">
                                    <TextField className="input-item" onChange={(e) => setTitle(e.target.value)} label="Título" variant="outlined" />
                                </div>
                                <div className="input-default">
                                    <TextField className="input-item" placeholder="Separe as tags por vírgula" onChange={(e) => setTags(e.target.value)} label="Tags" variant="outlined" />
                                </div>
                                <div className="input-default">
                                    <TextField className="input-item" onChange={(e) => setLink(e.target.value)} label="Link" variant="outlined" />
                                </div>
                                <div className="input-descricao">
                                    <TextField className="input-descricao-item" onChange={(e) => setDescription(e.target.value)} multiline rows={4} label="Descrição" variant="outlined" />
                                </div>
                            </div>
                        </div>
                        <div className="button-container">
                            <div className="div-visualizar">
                                <button type="button" onClick={() => {
                                    setOpenModalVisual(true)
                                }}>Visualizar publicação</button>
                            </div>
                            <div className="div-button">
                                <div className="btn-salvar">
                                    <button onClick={() => editProject()}>Salvar</button>
                                </div>
                                <div className="btn-cancelar">
                                    <button onClick={() => setOpenModalEdit(false)}>Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null
}

export default ModalEdit;