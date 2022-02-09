import React from "react";
import "./index.css"



function Header(){
    return(
        <header>
            <div className="logo-header">
                <p>Ivan Matheus</p>
            </div>
            <nav>
                    <a href="#main-content">Inicio</a>
                    <a href="#wrapper-quemsou">Quem sou?</a>
                    <a href="#section-habilidades">Habilidades</a>
                    <a href="#content-projetos">Projetos</a>
                <button > <a href="#content-contato">Contato</a></button>
            </nav>

   
            <input type="checkbox" id="checkbox-menu" />
           <label for="checkbox-menu">
                <span></span>
                <span></span>
                <span></span>
           </label>
        </header>
    )
}


export default Header;