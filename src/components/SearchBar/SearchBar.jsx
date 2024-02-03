import "./SearchBar.css"
//import Input from "../Input/Input"
import { TextField } from "@mui/material";

// eslint-disable-next-line react/prop-types
function SearchBar({ setSearch }) {
    return (
        <div className="container-search-bar">
            <h3>Meus projetos</h3>
            <TextField className="input" onChange={(e) => setSearch(e.target.value)} label="Buscar tags" variant="outlined" />
        </div>
    );
}

export default SearchBar;