import AddFirst from "../../components/AddFirst/AddFirst";
import AvatarIcon from "../../components/AvatarIcon/AvatarIcon";
//import ButtonAdd from "../components/ButtonAdd/ButtonAdd"
import NavBar from "../../components/NavBar/NavBar"
import SearchBar from "../../components/SearchBar/SearchBar";
import "./MyPortfolio.css"
import { useContext, useState } from "react";
import ModalAddProjeto from "../../components/ModalAddProjeto/ModalAddProjeto";
import ModalDelete from "../../components/ModalDelete/ModalDelete";
import ModalEdit from "../../components/ModalEdit/ModalEdit";
import ModalNotification from "../../components/ModalNotification/ModalNotification";
import Project from "../../components/Project/Project"
import { useEffect } from "react";
import ModalBurger from "../../components/ModalBurger/ModalBurger";
import { getUserById } from "../../scripts/Api/user";
//import ModalProjectAdded from "../../components/ModalProjectAdded/ModalProjectAdded";
import { ModalContext } from "../../context/ModalContext";
import ModalProjectAdded from "../../components/ModalProjectAdded/ModalProjectAdded";

function MyPortfolio() {

    const { 
        setOpenModalAdd, 
    } = useContext(ModalContext)

    const[title, setTitle] = useState("")
    const[tags, setTags] = useState([])
    const[link, setLink] = useState("")
    const[description, setDescription] = useState("")
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        const userId = localStorage.getItem("userId")
        getUserById(userId).then((data) => {
            const previewProjects = data.projects
            return previewProjects
        }).then((previewProjects) => {
            setProjects(previewProjects)
        })
        
    }, [])

    const [search, setSearch] = useState('');
    const lowerSearch = search.toLowerCase();

    //const projetosFiltrados = projetos.filter((projeto) => projeto.tags.toLowerCase().includes(lowerSearch));

   /*  const [openModalEdit, setOpenModalEdit] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openModalNotification, setOpenModalNotification] = useState(false); */

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //console.log(projects)
    return (
        <div>
            <div className="modal-section">
                <ModalAddProjeto />
                <ModalProjectAdded />
                <ModalDelete />
                <ModalNotification />
                <ModalBurger show={show} handleClose={handleClose} />
            </div>
            <div className="desktop-version">
                <NavBar handleShow={handleShow} />
                <div className="card-section">
                    <div className="container-card">
                        <div className="avatar-image-card">
                            <AvatarIcon />
                        </div>
                        <div className="text-input-container">
                            <div className="text-input">
                                <h2>Camila Soares</h2>
                                <p>Brasil</p>
                            </div>
                            <div className="container-btn-adicionar">
                                <button onClick={() => setOpenModalAdd(true)}>Adicionar Projeto</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-section">
                    <SearchBar setSearch={setSearch} />
                </div>
                <div className="project-section">
                    {
                        projects.length > 0 ?
                            projects.map((project) => (
                                
                                <Project key={project.id} data={project} setDescription={setDescription} setTitle={setTitle} setTags={setTags} setLink={setLink} />
                            ))
                            :
                                <AddFirst label="Adicione seu primeiro projeto" onClick={setOpenModalAdd} />
                    }
                    
                    {/*<Project setOpenModalEdit={setOpenModalEdit} setOpenModalDelete={setOpenModalDelete} />*/}
                    
                </div>
            </div>
        </div>
    );
}

export default MyPortfolio;
