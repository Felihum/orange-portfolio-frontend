import { useState } from "react";
import CollectionIcon from "../CollectionIcon/CollectionIcon";
import "./AddFile.css";
import { useDropzone } from "react-dropzone";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function AddFile({setFileData}) {
  const [file, setFile] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: async (acceptedFiles) => {
      const selectedFile = acceptedFiles[0];
      const base64 = await readFileAsBase64(selectedFile);
      setFile({
        ...selectedFile,
        preview: URL.createObjectURL(selectedFile),
        base64,
      });
      setFileData(base64)
    },
  });

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    return () => {
      if (file) {
        URL.revokeObjectURL(file.preview);
      }
    };
  }, [file]);

  return (
    <section>
      <div {...getRootProps({ className: "add-file-container" })}>
        <input {...getInputProps()} />
        {file ? (
          <div className="thumb">
            <div className="thumbInner">
              <img
                src={file.preview}
                className="img-thumb"
                // Revoke data uri after image is loaded
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
              />
            </div>
          </div>
        ) : (
          <>
            <CollectionIcon />
            <div className="text-container">
              <div className="text-compartilhe-container">
                <p className="text-compartilhe">
                  Compartilhe sua imagem com outras pessoas
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default AddFile;
