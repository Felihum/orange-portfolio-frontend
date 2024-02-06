import { useContext, useState } from "react";
import AddFile from "../AddFile/AddFile";
import ModalSuccess from "../ModalSuccess/ModalSuccess";
import "./ModalAddProjeto.css"
import TextField from "@mui/material/TextField"
//import ModalProjectAdded from "../ModalProjectAdded/ModalProjectAdded";
import { createProject } from "../../scripts/Api/projects";
import { ModalContext } from "../../context/ModalContext";

// eslint-disable-next-line react/prop-types
function ModalAddProjeto() {

    const {
        openModalAdd,
        setOpenModalAdd,
        setOpenModalVisual,
        setOpenModalSuccess
    } = useContext(ModalContext)

    const [image, setImage] = useState([])
    const [title, setTitle] = useState("")
    const [tags, setTags] = useState("")
    const [link, setLink] = useState("")
    const [description, setDescription] = useState("")
    const [isModalSuccessOpen, setModalSuccessOpen] = useState(false);

    async function createProjectDef(){
        try {
            const response = await createProject(image, title, tags, link, description);
            if(response){
                setOpenModalSuccess(true)
                setOpenModalAdd(false)
            }
            else{
                console.log(response)
            }

        } catch (error) {
            console.log(error)
        }
        
    }

    if(openModalAdd){
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
                                    <TextField className="input-item" onChange={(e) => setTags(e.target.value)} label="Tags" variant="outlined" />
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
                                <button type="button" onClick={() => setOpenModalVisual(true)}>Visualizar publicação</button>
                            </div>
                            <div className="div-button">
                                <div className="btn-salvar">
                                    <button onClick={async () => { await createProjectDef()}}>Salvar</button>
                                </div>
                                <div className="btn-cancelar">
                                    <button onClick={() => setOpenModalAdd(false)}>Cancelar</button>
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