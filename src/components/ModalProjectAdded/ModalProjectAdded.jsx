import UserDetailsForTit from "../UserDetailsForTit/UserDetailsForTit"
import UserDetails from "../UserDetails/UserDetails"
import ImageMyPortFourth from "../../images/MyPortFourth/img_landingpage.png"
import { Link } from "react-router-dom";
import "./ModalProjectAdded.css"

export default function ModalProjectAdded({ isOpen, setModalOpen }){
    return(
        <div className="big-modal-added">
            <div className="modal-card-added">

                <div className="titProjectUser-added">
                    <p>Eccomerce One Page</p>
                </div>

                <UserDetailsForTit></UserDetailsForTit>

                <div className="imgProjectUser-added">
                    <img id="imgProjectUserArchive" src={ImageMyPortFourth}></img>
                </div>

                <UserDetails></UserDetails>

                <div className="container_description_download_link-added">
                    <div className="descripitionUserProject-added">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus culpa delectus aspernatur obcaecati suscipit pariatur? Nam molestias corrupti deserunt aliquam sunt, itaque quo tenetur rerum tempora facere cupiditate explicabo doloremque.</p>
                    </div>
                    <div className="userDownloadProject-added">
                        <p>Download</p>
                        <div className="userLinkProject-added">
                            <Link to="#" className="linkProjectTag-added">https://www.w3schools.com/cssref/css3_pr_border-radius.phpb</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}