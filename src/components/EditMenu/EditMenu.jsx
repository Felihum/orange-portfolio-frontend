import "./EditMenu.css"
import arrow from "../../images/Arrow 1.png"

// eslint-disable-next-line react/prop-types
function EditMenu({ setOpenModalEdit, isOpen, setOpenModalDelete, setOpenMenu }) {
    if(isOpen){
        return (
            <div className="menu-edit-div" onMouseLeave={() => setOpenMenu(false)} onMouseEnter={() => setOpenMenu(true)}>
                <div className="arrow-div">
                    <img className="arrow" src={arrow} />
                </div>
                <div className="btn-editar">
                    <button onClick={() => setOpenModalEdit(true)}>Editar</button>
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