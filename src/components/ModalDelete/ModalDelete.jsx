import { useContext } from "react";
import "./ModalDelete.css"
import { ModalContext } from "../../context/ModalContext";
import { deleteProject } from "../../scripts/Api/projects";

// eslint-disable-next-line react/prop-types
function ModalDelete({projectId}) {

    

    const {
        openModalDelete,
        setOpenModalDelete
    } = useContext(ModalContext)
    
    function callDeleteProject(){
        try {
            deleteProject(projectId);

            setOpenModalDelete(false)
        } catch (error) {
            console.log(error)
        }
    }

    if(openModalDelete){
        return (
            <div className="delete-modal-bg">
                <div className="delete-modal-div">
                    <div className="content-section">
                        <div className="title-div">
                            <h1>Deseja Excluir?</h1>
                        </div>
                        <div className="paragraph-delete-div">
                            <p>Se você prosseguir irá excluir o projeto do seu portfólio</p>
                        </div>
                        <div className="button-div">
                            <div className="btn-confirm-excluir">
                                <button onClick={() => callDeleteProject()}>Excluir</button>
                            </div>
                            <div className="btn-cancelar-excluir">
                                <button onClick={() => setOpenModalDelete(false)}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default ModalDelete;