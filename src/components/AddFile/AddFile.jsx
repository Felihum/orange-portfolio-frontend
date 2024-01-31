import CollectionIcon from "../CollectionIcon/CollectionIcon";
import "./AddFile.css"

// eslint-disable-next-line react/prop-types
function AddFile() {
    return (
        <div className="add-file-container">
            <CollectionIcon />
            <div className="text-container">
                <div className="text-compartilhe-container">
                    <p className="text-compartilhe">Compartilhe seu talento com milhares de pessoas</p>
                </div>
            </div>
        </div>
    );
}

export default AddFile;