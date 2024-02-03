import AddFirst from "../../components/AddFirst/AddFirst";
import AvatarIcon from "../../components/AvatarIcon/AvatarIcon";
//import ButtonAdd from "../components/ButtonAdd/ButtonAdd"
import NavBar from "../../components/NavBar/NavBar"
import SearchBar from "../../components/SearchBar/SearchBar";
import "./MyPortfolio.css"
import { useState } from "react";
import ModalAddProjeto from "../../components/ModalAddProjeto/ModalAddProjeto";
import ModalDelete from "../../components/ModalDelete/ModalDelete";
import ModalEdit from "../../components/ModalEdit/ModalEdit";
import ModalNotification from "../../components/ModalNotification/ModalNotification";
import ProjectList from "../../components/ProjectList/ProjectList";
import imgProjeto from "../../images/img_projeto.png"
import ModalBurger from "../../components/ModalBurger/ModalBurger";

function MyPortfolio() {

    const projetos = [
        {
            image: imgProjeto, 
            title: "Projeto Teste", 
            tags: "WEB", link: "#", 
            description: "Descrição do projeto de teste"
        }, 
        {
            image: imgProjeto, 
            title: "Projeto Teste", 
            tags: "UX", link: "#", 
            description: "Descrição do projeto de teste"
        }
    ];

    const [search, setSearch] = useState('');
    const lowerSearch = search.toLowerCase();

    const projetosFiltrados = projetos.filter((projeto) => projeto.tags.toLowerCase().includes(lowerSearch));

    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openModalNotification, setOpenModalNotification] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="modal-section">
                <ModalAddProjeto isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
                <ModalDelete isOpen={openModalDelete} setOpenModalDelete={setOpenModalDelete} />
                <ModalEdit isOpen={openModalEdit} setModalEditOpen={setOpenModalEdit} />
                <ModalNotification isOpen={openModalNotification} setOpenModalNotification={setOpenModalNotification} />
                <ModalBurger show={show} handleClose={handleClose} />
            </div>
            <div className="desktop-version">
                <NavBar handleShow={handleShow} openModalNotification={openModalNotification} setOpenModalNotification={setOpenModalNotification} />
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
                                <button onClick={() => setOpenModal(true)}>Adicionar Projeto</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-section">
                    <SearchBar setSearch={setSearch} />
                </div>
                <div className="project-section">
                    {
                        projetos.length != 0 ?
                            projetosFiltrados.length != 0?
                                <ProjectList setOpenModalEdit={setOpenModalEdit} setOpenModalDelete={setOpenModalDelete} projetos={projetosFiltrados} />
                            :
                                <p>Nao existe</p>
                        :
                            <AddFirst label="Adicione seu primeiro projeto" onClick={setOpenModal} />
                    }
                    
                    {/*<Project setOpenModalEdit={setOpenModalEdit} setOpenModalDelete={setOpenModalDelete} />*/}
                    
                </div>
            </div>
        </div>
    );
}

export default MyPortfolio;
