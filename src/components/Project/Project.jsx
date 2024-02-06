/* eslint-disable react/prop-types */
import EditIcon from "../EditIcon/EditIcon";
import Tag from "../Tag/Tag";
import "./Project.css";
import AvatarIcon from "../AvatarIcon/AvatarIcon";

// eslint-disable-next-line react/prop-types
function Project( {data, setProjectId} ) {

    //console.log(data.id)
    
    return (
        <div className="project-container">
            <div className="edit-icon-container">
                <EditIcon projectId={data.id} setProjectId={setProjectId} />
            </div>
            <div className="project-image-div">
                {
                    data.images.map((image) => <img key={image.id} width={389} height={258} src= {`data:image/jpg;base64,${image.image}`} alt={data.titleProject} />)
                }
                
            </div>
            <div className="description-section">
                <div className="user-infos-container">
                    <div className="user-infos">
                        <AvatarIcon />
                        <div className="div-text-info">
                            <p>{data.user.name}</p>
                        </div>
                    </div>
                </div>
                <div className="tag-container">
                    {data.tags.map((tag) => (<Tag key={tag.id} label={tag.name} />))}
                </div>
            </div>
        </div>
    );
}


export default Project;