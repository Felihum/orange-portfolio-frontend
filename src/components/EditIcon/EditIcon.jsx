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
                <button onClick={() => setOpenMenu(!openMenu)} onMouseOut={() => setOpenMenu(false)} onMouseOver={() => setOpenMenu(true)}><img src={editIcon}/></button>
            </div>
            <div className="div-modal">
                <EditMenu setOpenModalEdit={setOpenModalEdit} setOpenModalDelete={setOpenModalDelete} isOpen={openMenu} setOpenMenu={setOpenMenu}/>
            </div>
        </div>
    );
}

export default EditIcon;