import NavBar from "../../components/NavBar/NavBar";
import { TextField } from "@mui/material";
import "./Discover.css"
import { useState, useEffect } from "react";
import ModalAddProjeto from "../../components/ModalAddProjeto/ModalAddProjeto";
import ProjectDescobrir from "../../components/ProjectDescobrir/ProjectDescobrir"
import { getAllProjects } from "../../scripts/Api/projects";

function Discover() {

    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        getAllProjects().then((data) => {
            const projectsArray = Array.isArray(data) ? data : [];
            setProjetos(projectsArray);
            } 
        )
        
    }, [])


    //console.log(projetos)


    const [search, setSearch] = useState('');
    const lowerSearch = search.toLowerCase();

    //const projetosFiltrados = projetos.filter((projeto) => projeto.tags.toLowerCase().includes(lowerSearch));

    const[openModalVisual, setOpenModalVisual] = useState(false)

    return (
        <div>
            <div className="modal-section">
                <ModalAddProjeto isOpen={openModalVisual} />
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
                        projetos.map((projeto) => (
                            <ProjectDescobrir key={projeto.id} setOpenModalVisual={setOpenModalVisual} link={projeto.link} title={projeto.titleProject} tag={projeto.tags} description={projeto.description} />
                        ))
                    }
                    
                </div>
            </div>
            
        </div>
    );
}

export default Discover;