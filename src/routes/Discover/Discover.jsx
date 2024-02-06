import NavBar from "../../components/NavBar/NavBar";
import { TextField } from "@mui/material";
import "./Discover.css"
import { useState, useEffect, useContext } from "react";
import ProjectDescobrir from "../../components/ProjectDescobrir/ProjectDescobrir"
import { getAllProjects, getProjectsByTag } from "../../scripts/Api/projects";
import ModalProjectAdded from "../../components/ModalProjectAdded/ModalProjectAdded";
import { ModalContext } from "../../context/ModalContext";

function Discover() {

    const {
        openModalVisual, setOpenModalVisual
    } = useContext(ModalContext)

    const [image, setImage] = useState([])
    const [projects, setProjects] = useState([])
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    const [tags, setTags] = useState([])
    const [link, setLink] = useState("")
    const [search, setSearch] = useState(null)


    useEffect(() => {
        getAllProjects().then((data) => {
            console.log(data)
            setProjects(data)
        })
        
    }, [])

    //const [search, setSearch] = useState('');
    //const lowerSearch = search.toLowerCase();
    //const [projetosFiltrados, setProjetosFiltrados] = useState([])

    //const projetosFiltrados = projetos.filter((projeto) => projeto.tags.name.toLowerCase().includes(lowerSearch));

    //console.log(projects)
    

    return (
        <div>
            <div className="modal-section">
                <ModalProjectAdded isOpen={openModalVisual} setModalOpen={setOpenModalVisual} image={image} description={description} title={title} link={link} tags={tags}/>
            </div>
            <NavBar />
            <div className="div-geral">
                <div className="paragraph-discover-section">
                    <div className="paragraph-div">
                        <h1>Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis</h1>
                    </div>
                </div>
                <div className="search-tag-section">
                    <TextField className="search-tag" onChange={(e) => setSearch(e.target.value)} label="Buscar tags" variant="outlined" />
                </div>
                <div className="project-section">
                    {
                        projects.map((project) => (
                            <ProjectDescobrir key={project.id} project={project} setImage={setImage} setDescription={setDescription} setTitle={setTitle} setTags={setTags} setLink={setLink} onClick={setOpenModalVisual}  />
                            
                        ))
                    }
                    
                </div>
            </div>
            
        </div>
    );
}

export default Discover;