import React from "react";
import "./index.css"
import Js from "../assets/logoJs.png" ;
import logoCss from "../assets/logoCss.png" ;
import logoHtml from "../assets/logoHtml.png" ;
import bootstrap from "../assets/bootStrap.png" ;
import jQuery from "../assets/jQuery.png" ;
import Redux from "../assets/redux.png" ;
import logoReact from "../assets/react.png" ;
import type from "../assets/type.png" ;
import node from "../assets/nodeJs.png";
import github from "../assets/git.png";
import nextJs from "../assets/nextJs.png";
import figma from "../assets/figma.png";


function SectionHabilidades(){
    return(
        <div id="section-habilidades">
           <h1>Habilidades</h1>
           <div className="card-habilidades">
             <div className="cards">
               <img className="logos" src={Js} alt="logo javaScript" width={100} height={100} />
               <img className="logos" src={logoCss} alt="logo Css" width={100} height={100} />
               <img className="logos" src={logoHtml} alt="logo Html" width={100} height={100}/>
               <img className="logos" src={bootstrap} alt="logo bootstrap" width={100} height={100} />
               <img className="logos" src={jQuery} alt="logo jquery" width={100} height={100} />
               <img className="logos" src={Redux} alt="logo redux" width={100} height={100} />
               <img className="logos" src={logoReact} alt="logo react" width={100} height={100} />
               <img className="logos" src={type} alt="logo type" width={100} height={100} />
               <img className="logos" src={github} alt="logo git" width={90} height={90} />
               <img className="logos" src={node} alt="logo node" width={100} height={100} />
               <img className="logos" src={nextJs} alt="logo nextJs" width={100} height={100} />
               <img className="logos" src={figma} alt="logo figma" width={100} height={100} />
            </div>
               
           </div>
        </div>
    )
}


export default SectionHabilidades;