import NavBar from "../../components/NavBar/NavBar";
import { TextField } from "@mui/material";
import "./Discover.css"
import { useState } from "react";
import ModalAddProjeto from "../../components/ModalAddProjeto/ModalAddProjeto";
import imgProjeto from "../../images/img_projeto.png"
import ProjectDescobrirList from "../../components/ProjectDescobrirList/ProjectDescobrirList";

function Discover() {

    const projetos = [
        {
            image: imgProjeto, 
            title: "Projeto Teste", 
            tags: "Web", link: "#", 
            description: "Descrição do projeto de teste"
        }, 
        {
            image: imgProjeto, 
            title: "Projeto Teste", 
            tags: "UX", link: "#", 
            description: "Descrição do projeto de teste"
        },
        {
            image: imgProjeto, 
            title: "Projeto Teste", 
            tags: "Python", link: "#", 
            description: "Descrição do projeto de teste"
        },
        {
            image: imgProjeto, 
            title: "Projeto Teste", 
            tags: "Java", link: "#", 
            description: "Descrição do projeto de teste"
        }
    ];

    const [search, setSearch] = useState('');
    const lowerSearch = search.toLowerCase();

    const projetosFiltrados = projetos.filter((projeto) => projeto.tags.toLowerCase().includes(lowerSearch));

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
                        projetosFiltrados.length != 0 ?
                            <ProjectDescobrirList setOpenModalVisual={setOpenModalVisual} projetos={projetosFiltrados} />
                        :
                            <p>Não existe projetos com essa tag.</p>
                    }
                    
                </div>
            </div>
            
        </div>
    );
}

export default Discover;