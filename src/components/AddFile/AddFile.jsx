import { useState } from "react";
import CollectionIcon from "../CollectionIcon/CollectionIcon";
import "./AddFile.css"
import { useDropzone } from "react-dropzone";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function AddFile(props) {

    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps} = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div className="thumb" key={file.name}>
            <div className="thumbInner">
                <img
                src={file.preview}
                className="img-thumb"
                // Revoke data uri after image is loaded
                onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <section>
            <div {...getRootProps({className: "add-file-container"})}>
                <input {...getInputProps()} />
                <CollectionIcon />
                <div className="thumbsContainer">
                    {thumbs}
                </div>
                <div className="text-container">
                    <div className="text-compartilhe-container">
                        <p className="text-compartilhe">Compartilhe seu talento com milhares de pessoas</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddFile;