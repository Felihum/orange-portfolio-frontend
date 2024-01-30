import NavBar from "../../components/NavBar/NavBar";
import { TextField } from "@mui/material";
import "./Discover.css"
import ProjectDescobrir from "../../components/ProjectDescobrir/ProjectDescobrir";

function Discover() {
    return (
        <div>
            <div className="modal-section">
            
            </div>
            <NavBar />
            <div className="div-geral">
                <div className="paragraph-discover-section">
                    <div className="paragraph-div">
                        <h1>Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis</h1>
                    </div>
                </div>
                <div className="search-tag-section">
                    <TextField className="search-tag" label="Buscar tags" variant="outlined" />
                </div>
                <div className="project-section">
                    <ProjectDescobrir />
                </div>
            </div>
            
        </div>
    );
}

export default Discover;