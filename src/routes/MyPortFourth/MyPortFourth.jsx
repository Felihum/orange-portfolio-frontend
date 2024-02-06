import * as React from "react";
import { Link } from "react-router-dom";
import AvatarIcon from "../../components/AvatarIcon/AvatarIcon";
import ImageMyPortFourth from "../../images/MyPortFourth/img_landingpage.png";
import UserDetails from "../../components/UserDetails/UserDetails";
import TitProjectMyFourth from "../../components/TitProjectMyForuth/TitProjectMyFourth";
import "./MyPortFourth.css";
import UserDetailsForTit from "../../components/UserDetailsForTit/UserDetailsForTit";

export default function MyPortFouth() {
  return (
    <div className="backGroundDiv">
      <div className="mainProjectContainer">
        <div className="titProjectUser">
          <p>Eccomerce One Page</p>
        </div>
        <UserDetailsForTit></UserDetailsForTit>

        <div className="imgProjectUser">
          <img id="imgProjectUserArchive" src={ImageMyPortFourth}></img>
        </div>

        <UserDetails></UserDetails>

        <div className="container_description_download_link">
          <div className="descripitionUserProject">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus culpa delectus aspernatur obcaecati suscipit pariatur?
              Nam molestias corrupti deserunt aliquam sunt, itaque quo tenetur
              rerum tempora facere cupiditate explicabo doloremque.
            </p>
          </div>
          <div className="userDownloadProject">
            <p>Download</p>
            <div className="userLinkProject">
              <Link to="#" className="linkProjectTag">
                https://www.w3schools.com/cssref/css3_pr_border-radius.phpb
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
