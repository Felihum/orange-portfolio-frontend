import "./UserInfo.css"
import AvatarIcon from "../AvatarIcon/AvatarIcon";
import { TbPointFilled } from "react-icons/tb";

function UserInfo() {
    return (
        <div className="user-infos">
            <AvatarIcon />
            <div className="div-text-info">
                <p className="name-paragraph">Camila Soares</p>
                <p className="point-icon"><TbPointFilled /></p>
                <p>12/23</p>
            </div>
        </div>
    );
}

export default UserInfo;