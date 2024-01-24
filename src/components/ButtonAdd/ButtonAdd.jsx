import "./ButtonAdd.css"

function ButtonAdd({ setOpenModal }) {
    return (
        <div className="container-btn-adicionar">
            <button onClick={() => setOpenModal(true)}>Adicionar Projeto</button>
        </div>
    );
}

export default ButtonAdd;