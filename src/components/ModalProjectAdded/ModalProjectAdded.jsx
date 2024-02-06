import UserDetailsForTit from "../UserDetailsForTit/UserDetailsForTit"
import { Link } from "react-router-dom";
import "./ModalProjectAdded.css"
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

// eslint-disable-next-line react/prop-types
export default function ModalProjectAdded({ image, description, link, title, tags }){
    const {
        openModalVisual,
        setOpenModalVisual
    } = useContext(ModalContext)
    
    if(openModalVisual){
        return(
            <div className="big-modal-added">
                <div className="modal-card-added">
                    <div className="icon-close-container">
                        <div className="icon-x-close" onClick={() => setOpenModalVisual(false)}>
                            <IoMdClose />
                        </div>
                    </div>
                    
                    <div className="titProjectUser-added">
                        <p>{title}</p>
                    </div>

                    <UserDetailsForTit tags={tags}></UserDetailsForTit>

                    <div className="imgProjectUser-added">
                        <img id="imgProjectUserArchive" width={840} src={`data:image/jpg;base64,${image}`}></img>
                    </div>

                    <div className="container_description_download_link-added">
                        <div className="descripitionUserProject-added">
                            <p>{description}</p>
                        </div>
                        <div className="userDownloadProject-added">
                            <p>Download</p>
                            <div className="userLinkProject-added">
                                <Link to={link} className="linkProjectTag-added">{link}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}