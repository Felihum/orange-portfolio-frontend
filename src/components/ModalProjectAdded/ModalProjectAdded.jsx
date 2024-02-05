import UserDetailsForTit from "../UserDetailsForTit/UserDetailsForTit"
import UserDetails from "../UserDetails/UserDetails"
import ImageMyPortFourth from "../../images/MyPortFourth/img_landingpage.png"
import { Link } from "react-router-dom";
import "./ModalProjectAdded.css"
import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line react/prop-types
export default function ModalProjectAdded({ isOpen, setModalOpen, description, link, title, tags }){
    if(isOpen){
        return(
            <div className="big-modal-added">
                <div className="modal-card-added">
                    <div className="icon-close-container">
                        <div className="icon-x-close" onClick={() => setModalOpen(false)}>
                            <IoMdClose />
                        </div>
                    </div>
                    
                    <div className="titProjectUser-added">
                        <p>{title}</p>
                    </div>

                    <UserDetailsForTit tags={tags}></UserDetailsForTit>

                    <div className="imgProjectUser-added">
                        <img id="imgProjectUserArchive" src=""></img>
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