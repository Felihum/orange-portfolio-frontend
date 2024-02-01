import * as React from "react";
import { Link } from "react-router-dom";
import AvatarIcon from "../../components/AvatarIcon/AvatarIcon"
import ImageMyPortFourth from "../../images/MyPortFourth/img_landingpage.png"
import UserDetails from "../../components/UserDetails/UserDetails";
import "./MyPortFourth.css"

export default function MyPortFouth(){
    return(

        <div className="backGroundDiv">

            <div className="mainProjectContainer">

                <div className="titProjectUser">
                    <p>Ecomerce One Page</p>
                </div>

                <div className="imgProjectUser">
                    <img src={ImageMyPortFourth}></img>
                </div>
                
                <div className="userDataProject">

                    <div className="userDataAvatarNameDate">
                        <div>
                            <AvatarIcon></AvatarIcon>
                        </div>
                        <div className="userDetailsProject">
                            <div className="userNameProject">
                                <p>Camila Soares</p>
                            </div>
                            <div className="dataDayUser">
                                <p>12/12</p>
                            </div>
                        </div>
                    </div>
                    <div className="userTagsProject">
                        <div>
                            UI
                        </div>
                        <div>
                            UX
                        </div>
                </div>
                </div>


                <div className="descripitionUserProject">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus culpa delectus aspernatur obcaecati suscipit pariatur? Nam molestias corrupti deserunt aliquam sunt, itaque quo tenetur rerum tempora facere cupiditate explicabo doloremque.</p>
                </div>
                <div className="userDownloadProject">
                    <p>Download</p>
                    <div className="userLinkProject">
                        <Link to="#" className="linkProjectTag">https://www.w3schools.com/cssref/css3_pr_border-radius.phpb</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}