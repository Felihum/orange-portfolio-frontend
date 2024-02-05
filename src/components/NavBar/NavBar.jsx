import logo from "../../images/Logo orange.png"
import burger from "../../images/MenuFilled.png"
import AvatarIcon from "../AvatarIcon/AvatarIcon";
import { Link } from "react-router-dom";
import "./NavBar.css"
import NotificationIcon from "../NotificationIcon/NotificationIcon";

// eslint-disable-next-line react/prop-types
function NavBar({ handleShow, openModalNotification, setOpenModalNotification }) {
    return (
        <div>
            <div className='menu'>
                <div className="rading-container">
                    <div className="header">
                        <div className="burger-container">
                            <button onClick={() => handleShow(true)}><img src={burger} /></button>
                        </div>
                        <div className='container-logo'>
                            <img src={logo} className="image-logo" />
                        </div>
                        <div className="paragraph-container">
                            <div className="btn-meus-projetos">
                                <Link to="/meus-projetos" className="paragraph">Meus Projetos</Link>
                            </div>
                            <div className="btn-descobrir">
                                <Link to="/descobrir" className="paragraph">Descobrir</Link>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div>
                            <AvatarIcon />
                        </div>
                        <div>
                            <NotificationIcon openModalNotification={openModalNotification} setOpenModalNotification={setOpenModalNotification} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;