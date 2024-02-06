import notification from "../../images/NotificationsFilled.svg"
import "./NotificationIcon.css"

// eslint-disable-next-line react/prop-types
function NotificationIcon({ openModalNotification, setOpenModalNotification }) {
    return (
        <div className="notification-button">
            <button onClick={() => setOpenModalNotification(!openModalNotification)}><img src={notification} /></button>
        </div>
    );
}

export default NotificationIcon;