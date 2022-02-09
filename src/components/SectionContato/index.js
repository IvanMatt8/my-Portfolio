import React from "react";
import "./index.css"
import git from "../assets/git.png"
import linkedin from "../assets/linkedin.png"
import gmail from "../assets/gmail.png"
import instagram from "../assets/insta.png"

function SectionContato(){
    return(
        <div id="content-contato">
             <h1>Entre em Contato</h1>
             <p>Redes sociais e formas de contato:</p>
             <div className="wrapper-card">
                <div className="column-one">
                    <div className="item-1"> <img src={git} alt="imagem do git"/> <a href="https://github.com/IvanMatt8">ivanmatt8</a></div>
                    <div className="item-2"><img src={linkedin} alt="imagem do linkedin"/> <a href="https://www.linkedin.com/in/ivan-matheus-56530422b/">Ivan Matheus</a></div>
                </div>
                <div className="column-two">
                    <div className="item-3"><img src={gmail} alt="imagem do gmail"/> <a href="ivanmatt1995@gmail.com">ivanmatt1995@gmail.com</a></div>
                    <div className="item-4"><img src={instagram} alt="imagem do instagram"/> <a href="https://www.instagram.com/ivanmatt8/">@ivanmatt8</a></div>
                    </div>
             </div>
        </div>
    )
}



export default SectionContato;