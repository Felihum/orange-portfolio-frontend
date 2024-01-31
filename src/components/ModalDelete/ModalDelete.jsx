import "./ModalDelete.css"

// eslint-disable-next-line react/prop-types
function ModalDelete({ isOpen, setOpenModalDelete }) {
    if(isOpen){
        return (
            <div className="delete-modal-bg">
                <div className="delete-modal-div">
                    <div className="content-section">
                        <div className="title-div">
                            <h1>Deseja Excluir?</h1>
                        </div>
                        <div className="paragraph-delete-div">
                            <p>Se você prosseguir irá excluir o projeto do seu portfólio</p>
                        </div>
                        <div className="button-div">
                            <div className="btn-confirm-excluir">
                                <button>Excluir</button>
                            </div>
                            <div className="btn-cancelar-excluir">
                                <button onClick={() => setOpenModalDelete(false)}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default ModalDelete;