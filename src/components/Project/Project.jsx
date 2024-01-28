import imgProjeto from "../../images/img_projeto.png";
import AvatarIcon from "../AvatarIcon/AvatarIcon";
import EditIcon from "../EditIcon/EditIcon";
import Tag from "../Tag/Tag";
import "./Project.css";

// eslint-disable-next-line react/prop-types
function Project({ setOpenModalEdit, setOpenModalDelete }) {
    return (
        <div className="project-container">
            <div className="edit-icon-container">
                <EditIcon setOpenModalEdit={setOpenModalEdit} setOpenModalDelete={setOpenModalDelete} />
            </div>
            <div className="project-image-div">
                
                <img src={imgProjeto} />
            </div>
            <div className="description-section">
                <div className="user-infos-container">
                    <div className="user-infos">
                        <AvatarIcon />
                        <div className="div-text-info">
                            <p>Camila Soares . 12/23</p>
                        </div>
                    </div>
                </div>
                <div className="tag-container">
                    <Tag label="UX" />
                    <Tag label="Web" />
                </div>
            </div>
        </div>
    );
}

export default Project;