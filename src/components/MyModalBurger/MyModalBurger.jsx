import "./MyModalBurger.css"
export default function MyModalBurger({isOpen}){
    if(isOpen){
        return(
            <div className="menuBurgerOptions">
                <div className="optionsBurger">
                    <div className="optBurger"><a href="#">Meus Projetos</a></div>
                    <div className="optBurger"><a href="#">Descobrir</a></div>
                </div>
            </div>
        )
    }else{
        return null
    }
}