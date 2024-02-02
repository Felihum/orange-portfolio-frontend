import AvatarIcon from "../AvatarIcon/AvatarIcon";
import Tag from "../Tag/Tag";
import "../Project/Project.css"
import "./ProjectDescobrir.css"

// eslint-disable-next-line react/prop-types
function ProjectDescobrir({ image, title, tag, link, description, setOpenModalVisual }) {

    return (
        <div className="project-container" onClick={() => setOpenModalVisual(true)}>
            <div className="project-image-div">
                <img src={`${image}`} alt={title} />
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
                    <Tag label={tag} />
                </div>
            </div>
        </div>
    );
}

export default ProjectDescobrir;