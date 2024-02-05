import "./ModalEdit.css"
import AddFile from "../AddFile/AddFile";
import ModalSuccess from "../ModalSuccess/ModalSuccess";
import TextField from "@mui/material/TextField"
import { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { ProjectContext } from "../../context/ProjectContext";
import { updateProject } from "../../scripts/Api/projects";

// eslint-disable-next-line react/prop-types
function ModalEdit({projectId}) {

    console.log(projectId)

    const [image, setImage] = useState("")
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState([]);
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");

    async function editProject(){
        try {
            await updateProject(id, image, title, tags, link, description)

            console.log("Editou")
        } catch (error) {
            window.alert(error)
        }
    }

    const {
        openModalEdit,
        setOpenModalEdit
    } = useContext(ModalContext)

    if(openModalEdit){
        return (
            <form>
                <div className="bg-modal">
                    <div className="modal-success-card">
                        <ModalSuccess />
                    </div>
                    <div className="modal-card">
                        <div className="text-cnt">
                            <h3>{projectId}</h3>
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
                                        <TextField className="input-descricao-item" multiline rows={4} label="Descrição" variant="outlined" />
                                    </div>
                                </div>
                            </div>
                            <div className="button-container">
                                <div className="div-visualizar">
                                    <button type="button">Visualizar publicação</button>
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
            </form>
        );
    }

    return null
}

export default ModalEdit;