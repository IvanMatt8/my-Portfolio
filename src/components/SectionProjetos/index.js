import React from "react";
import "./index.css";




function SectionProjetos(){
    return(
        <div id="content-projetos">
            <h1>Projetos</h1>

            <details className="item-details" open>
                <summary>
                    Mobile
                </summary>
            </details>
            <details className="item-details">
                <summary>
                    Web
                </summary>
            </details>
            <details className="item-details">
                <summary>
                    UX/UI
                </summary>
            </details>
        </div>
    )
}



export default SectionProjetos;



//display: flex;
//font-weight: bold;
//font-size: 40px;
//color: #00B2FF;