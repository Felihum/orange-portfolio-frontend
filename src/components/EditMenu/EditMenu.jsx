import "./EditMenu.css"
import arrow from "../../images/Arrow 1.png"

// eslint-disable-next-line react/prop-types
function EditMenu({ setOpenModal, isOpen }) {
    if(isOpen){
        return (
            <div className="menu-edit-div">
                <div className="arrow-div">
                    <img className="arrow" src={arrow} />
                </div>
                <div className="btn-editar">
                    <button onClick={() => setOpenModal(true)}>Editar</button>
                </div>
                <div className="btn-excluir">
                    <button>Excluir</button>
                </div>
            </div>
        );
    }

    return null
    
}

export default EditMenu;