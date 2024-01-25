import logo from "../../images/Logo orange.png"
import burger from "../../images/MenuFilled.png"
import AvatarIcon from "../AvatarIcon/AvatarIcon";
import { Link } from "react-router-dom";
import "./NavBar.css"
import NotificationIcon from "../NotificationIcon/NotificationIcon";

function NavBar() {
    return (
        <div className='menu'>
            <div className="rading-container">
                <div className="header">
                    <div className="burger-container">
                        <img src={burger} />
                    </div>
                    <div className='container-logo'>
                        <img src={logo} className="image-logo" />
                    </div>
                    <div className="paragraph-container">
                        <div className="btn-meus-projetos">
                            <Link to="#" className="paragraph">Meus Projetos</Link>
                        </div>
                        <div className="btn-descobrir">
                            <Link to="#" className="paragraph">Descobrir</Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <AvatarIcon />
                    </div>
                    <div>
                        <NotificationIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;