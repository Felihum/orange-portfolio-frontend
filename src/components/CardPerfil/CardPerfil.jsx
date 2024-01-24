import "./CardPerfil.css"
import AvatarIcon from "../AvatarIcon/AvatarIcon"
import ButtonAdd from "../ButtonAdd/ButtonAdd";

function CardPerfil() {
    return (
        <div className="container-card">
            <div className="avatar-image-card">
                <AvatarIcon />
            </div>
            <div className="text-input-container">
                <div className="text-input">
                    <h2>Camila Soares</h2>
                    <p>Brasil</p>
                </div>
                <div className="container-btn-adicionar">
                    <ButtonAdd onClick={} />
                </div>
            </div>
        </div>
    );
}

export default CardPerfil;