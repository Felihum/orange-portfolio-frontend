import "./EditMenu.css"
import arrow from "../../images/Arrow 1.png"
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

// eslint-disable-next-line react/prop-types
function EditMenu({ isOpen, setOpenMenu, projectId, setProjectId }) {
    
    const {
        setOpenModalEdit,
        setOpenModalDelete
        
    } = useContext(ModalContext)
    
    if(isOpen){
        return (
            <div className="menu-edit-div" onMouseLeave={() => setOpenMenu(false)} onMouseEnter={() => setOpenMenu(true)}>
                <div className="arrow-div">
                    <img className="arrow" src={arrow} />
                </div>
                <div className="btn-editar">
                    <button onClick={() => {
                        setProjectId(projectId)
                        //console.log({projectId})
                        setOpenModalEdit(true)
                    }}>Editar</button>
                </div>
                <div className="btn-excluir">
                    <button onClick={() => setOpenModalDelete(true)}>Excluir</button>
                </div>
            </div>
        );
    }

    return null
    
}

export default EditMenu;