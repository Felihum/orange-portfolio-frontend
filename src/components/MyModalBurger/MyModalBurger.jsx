import React from "react";
import burger from "../../images/MenuFilled.png";
import "./MyModalBurger.css";

export default function MyModalBurger({ isOpen, toggleModal }) {
  const handleBurgerClick = () => {
    toggleModal(); // função para abrir ou fechar o modal
  };

  return (
    <div className={`menuBurgerOptions ${isOpen ? "open" : ""}`}>
      <div className="burger-container">
        <button onClick={handleBurgerClick}>
          <img src={burger} alt="Burger Menu" />
        </button>
      </div>
      <div className="optionsBurger">
        <div className="optBurger">
          <a href="#">Meus Projetos</a>
        </div>
        <div className="optBurger">
          <a href="#">Descobrir</a>
        </div>
      </div>
    </div>
  );
}
