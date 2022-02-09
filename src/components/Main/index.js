import React from "react";
import "./index.css"
import logoMain from "../assets/logoMain.jpeg"


function Main() {
    return(
        <div id="main-content">
           <div className="text-content">
            <h1>{'<Olá, me chamo'}</h1>
            <h1>{'Ivan Matheus />'}</h1>
            <span>UX/UI Design | Dev Full Stack | </span>
            <div className='button-main'>
                <button> <a href="#content-contato">Contato </a></button>
                <button> <a href="#content-projetos">Projetos</a></button>
            </div>
           </div>
           <div className='logo-main'>
              <img className="logo-perfil" src={logoMain} alt="capa"/>
           </div>
        </div>
    )
}


export default Main