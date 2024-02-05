/* eslint-disable react/prop-types */
import AvatarIcon from "../AvatarIcon/AvatarIcon";
import Tag from "../Tag/Tag";
import "../Project/Project.css"
import "./ProjectDescobrir.css"
import { getUserById } from "../../scripts/Api/user";
import { useEffect, useState } from "react";
import imgProjeto from "../../images/img_projeto.png"

// eslint-disable-next-line react/prop-types
function ProjectDescobrir({ project, setDescription, setTitle, setTags, setLink, onClick }) {

    const [user, setUser] = useState("");
    const [tagsFiltradas, setTagsFiltradas] = useState([]);

    useEffect(() => {
        getUserById(project.user).then((data) => {
            if (data && data.name) {
                setUser(data.name);
            } else {
                setUser("Nome não disponível"); // Ou qualquer valor padrão desejado
            }
        })
    }, [])

    function setProjectInformation(){
        setDescription(project.description)
        setTitle(project.titleProject)
        setTags(project.tags)
        setLink(project.link)
    }

    return (
        <div key={project.id} className="project-container">
            <div className="project-image-div" onClick={() => {
                onClick(true)
                setProjectInformation()
            }}>
            {
                project.images.map((image) => <img key={image.id} width={389} height={258} src= {`data:image/jpg;base64,${image.image}`} alt={project.titleProject} />)
            }
            </div>
            <div className="description-section">
                <div className="user-infos-container">
                    <div className="user-infos">
                        <AvatarIcon />
                        <div className="div-text-info">
                            <p>{user}</p>
                        </div>
                    </div>
                </div>
                <div className="tag-container">
                    {
                        project.tags.map((tag) => (
                            <Tag key={tag.id} label={tag.name} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ProjectDescobrir;