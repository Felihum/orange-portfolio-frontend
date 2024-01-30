import AddFirst from "../../components/AddFirst/AddFirst";
import AvatarIcon from "../../components/AvatarIcon/AvatarIcon";
//import ButtonAdd from "../components/ButtonAdd/ButtonAdd"
import NavBar from "../../components/NavBar/NavBar"
import SearchBar from "../../components/SearchBar/SearchBar";
import "./MyPortfolio.css"
import { useState } from "react";
import ModalAddProjeto from "../../components/ModalAddProjeto/ModalAddProjeto";
import ModalDelete from "../../components/ModalDelete/ModalDelete";
import Project from "../../components/Project/Project";
import ModalEdit from "../../components/ModalEdit/ModalEdit";

function MyPortfolio() {

    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <div className="modal-section">
                <ModalAddProjeto isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
                <ModalDelete isOpen={openModalDelete} setOpenModalDelete={setOpenModalDelete} />
                <ModalEdit isOpen={openModalEdit} setModalEditOpen={setOpenModalEdit} />
            </div>
            <div className="desktop-version">
                <NavBar />
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
                    <SearchBar />
                </div>
                <div className="project-section">
                    <AddFirst label="Adicione seu primeiro projeto" onClick={setOpenModal} />
                    <Project setOpenModalEdit={setOpenModalEdit} setOpenModalDelete={setOpenModalDelete} />
                </div>
            </div>
        </div>
    );
}

export default MyPortfolio;