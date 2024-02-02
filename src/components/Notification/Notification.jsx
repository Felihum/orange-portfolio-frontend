import { IoMdClose } from "react-icons/io";
import "./Notification.css"
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Notification() {

    const [closeNotification, setCloseNotification] = useState(false);

    if(!closeNotification){
        return (
            <div className="notification-container">
                <div className="header-notification-container">
                    <h3>Notification Title</h3>
                    <div className="close-notification-icon" onClick={() =>setCloseNotification(true)}>
                        <IoMdClose />
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed et neque voluptatibus, repellendus vero laborum, consequuntur architecto rem voluptate earum, beatae fugiat deleniti nihil! Ratione, officia corporis. Officiis, quaerat?</p>
            </div>
            
        );
    }

    return null;
    
}

export default Notification;