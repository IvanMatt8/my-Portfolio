import React from "react";
import Quemsou from "../assets/pana.png";
import "./index.css";


function SectionQuemSou(){
    return(
        <div id="wrapper-quemsou">
            <div className="text-quemsou"><h1>Quem Sou?</h1>
            <p>
              Óla atualmente estou cursando Ánalise e desenvolvimento de Sistema instituto (UNOPAR), conclui o curso de Desenvolvimento Web (PROGBR) e Curso Web Moderno na plataformar (Udemy).
              visando a parte Front-end, desenvolvi aplicações com as seguintes linguagens e frameworks  "Html, Css, JavaScript, ReactJs, Redux, NodeJs". Estou em busca de uma oportunidade no mercado de trabalho seja estágio ou junior, para me desenvolver e adquirir novas experiências na prática, para agregar na minha carreira como programador.
            </p>
            </div>
           <img className="image-quemsou" src={Quemsou} alt="imagem que sou" />
        </div>
    )
}


export default SectionQuemSou;