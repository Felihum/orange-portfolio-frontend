import EditIcon from "../EditIcon/EditIcon";
import Tag from "../Tag/Tag";
import UserInfo from "../UserInfo/UserInfo";
import "./Project.css";

// eslint-disable-next-line react/prop-types
function Project({ image, title, tag, link, description, setOpenModalEdit, setOpenModalDelete }) {
    return (
        <div className="project-container" defaultValue={tag}>
            <div className="edit-icon-container">
                <EditIcon setOpenModalEdit={setOpenModalEdit} setOpenModalDelete={setOpenModalDelete} />
            </div>
            <div className="project-image-div">
                <img src={`${image}`} alt={title} />
            </div>
            <div className="description-section">
                <div className="user-infos-container">
                    <UserInfo />
                </div>
                <div className="tag-container">
                    <Tag label={tag} />
                </div>
            </div>
        </div>
    );
}

export default Project;