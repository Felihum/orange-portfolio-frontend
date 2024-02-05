import { createContext, useState } from "react";

const ProjectContext = createContext();

// eslint-disable-next-line react/prop-types
function ProjectProvider({ children }) {

    const [image, setImage] = useState("")
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState([]);
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");
    
    function setProjectData(image, title, tags, link, description){
        setImage(image)
        setTitle(title)
        setTags(tags)
        setLink(link)
        setDescription(description)
    }

    return (
        <ProjectContext.Provider value={{setProjectData, image, setImage, title, setTitle, tags, setTags, link, setLink, description, setDescription}}>
            {children}
        </ProjectContext.Provider>
    );
}

export { ProjectContext, ProjectProvider };