import { useState } from "react";
import AddFile from "../AddFile/AddFile";
import ModalSuccess from "../ModalSuccess/ModalSuccess";
import "./ModalAddProjeto.css"
import TextField from "@mui/material/TextField"
import { format } from 'date-fns';
//import ModalProjectAdded from "../ModalProjectAdded/ModalProjectAdded";
import { createProject } from "../../scripts/Api/projects";

// eslint-disable-next-line react/prop-types
function ModalAddProjeto({ isOpen, setModalVisualizarOpen, setModalOpen}) {

    const [image, setImage] = useState([])
    const [title, setTitle] = useState("")
    const [tagsTemp, setTagsTemp] = useState([])
    const [link, setLink] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState()
    const [isModalSuccessOpen, setModalSuccessOpen] = useState();

    async function defineDate(){
        await setDate(new Date())
    }

    async function createProjectDef(){
        try {
            await defineDate();
            const tags = [{"name": tagsTemp}];
            createProject(image, title, tags, link, description, date);
            setModalSuccessOpen(true)

        } catch (error) {
            console.log(error)
        }
        
    }

    if(isOpen){
        return (
            <div className="bg-modal">
                <div className="modal-success-card">
                    <ModalSuccess isOpenSuccess={isModalSuccessOpen} setModalSuccessOpen={setModalSuccessOpen}/>
                </div>
                <div className="modal-card">
                    <div className="text-cnt">
                        <h3>Adicionar projeto</h3>
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
                                    <TextField className="input-item" onChange={(e) => setTagsTemp(e.target.value)} label="Tags" variant="outlined" />
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
                                <button type="button" onClick={() => setModalVisualizarOpen(true)}>Visualizar publicação</button>
                            </div>
                            <div className="div-button">
                                <div className="btn-salvar">
                                    <button type="submit" onClick={() => {createProjectDef()}}>Salvar</button>
                                </div>
                                <div className="btn-cancelar">
                                    <button onClick={setModalOpen}>Cancelar</button>
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

export default ModalAddProjeto;