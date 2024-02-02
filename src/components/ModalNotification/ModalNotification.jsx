import Notification from "../Notification/Notification";
import "./ModalNotification.css"

// eslint-disable-next-line react/prop-types
function ModalNotification({ isOpen, setOpenModalNotification }) {

    if(isOpen){
        return (
            <div className="modal-notification-bg">
                <div className="div-clicar-fora" onClick={() => setOpenModalNotification(false)}>

                </div>
                <div className="modal-notification-container">
                    <div className="notification-container">
                        <Notification />   
                    </div>
                    <div className="notification-container">
                        <Notification />
                    </div>
                    <div className="notification-container">
                        <Notification />  
                    </div>
                </div>
            </div>
            
        );
    }
    
}

export default ModalNotification;