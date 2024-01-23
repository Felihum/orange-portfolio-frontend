import "./SearchBar.css"
//import Input from "../Input/Input"
import { TextField } from "@mui/material";

function SearchBar() {
    return (
        <div className="container-search-bar">
            <h3>Meus projetos</h3>
            <TextField className="input" label="Buscar tags" variant="outlined" />
        </div>
    );
}

export default SearchBar;