import { useState } from "react";
import editIcon from "../../images/mode.png"
import EditMenu from "../EditMenu/EditMenu";
import "./EditIcon.css"

// eslint-disable-next-line react/prop-types
function EditIcon({ setOpenModalEdit, setOpenModalDelete }) {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="edit-icon-div">
            <div className="div-inside">
                <button onClick={() => setOpenMenu(!openMenu)}><img src={editIcon}/></button>
            </div>
            <div className="div-modal">
                <EditMenu setOpenModalEdit={setOpenModalEdit} setOpenModalDelete={setOpenModalDelete} isOpen={openMenu}/>
            </div>
        </div>
    );
}

export default EditIcon;