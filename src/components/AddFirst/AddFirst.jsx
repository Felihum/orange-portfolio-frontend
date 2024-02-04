import CollectionIcon from "../CollectionIcon/CollectionIcon";
import "./AddFirst.css"

// eslint-disable-next-line react/prop-types
function AddFirst({ onClick }) {
    return (
        <div className="add-first-container" onClick={() => onClick(true)}>
            <CollectionIcon />
            <div className="text-container">
                <div>
                    <p className="text-adicione">Adicione seu primeiro projeto</p>
                </div>
                <div className="text-compartilhe-container">
                    <p className="text-compartilhe">Compartilhe seu talento com milhares de pessoas</p>
                </div>
            </div>
            
        </div>
    );
}

export default AddFirst;