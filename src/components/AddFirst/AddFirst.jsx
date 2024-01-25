import CollectionIcon from "../CollectionIcon/CollectionIcon";
import "./AddFirst.css"

// eslint-disable-next-line react/prop-types
function AddFirst({ label }) {
    return (
        <div className="add-first-container">
            <CollectionIcon />
            <div className="text-container">
                <p className="text-adicione">{label}</p>
                <div className="text-compartilhe-container">
                    <p className="text-compartilhe">Compartilhe seu talento com milhares de pessoas</p>
                </div>
            </div>
            
        </div>
    );
}

export default AddFirst;