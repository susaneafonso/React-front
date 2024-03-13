import React from 'react'
import "./Services.css"
import{ Nav} from "../../links"

export function Services() {
  return (
    <>
      <Nav></Nav>
      <div className="container-big">
           <div className="container-serv">
                 <div className='img'>imagem</div>
                 <div className="description">

                   
                     <ul>
                        <li>
                              beneficio1
                        </li>
                        <li>
                              beneficio2
                        </li>
                        <li>
                              benefcio3
                        </li>

                     </ul>
                     <ul>
                        <li>
                              beneficio1
                        </li>
                        <li>
                              beneficio2
                        </li>
                        <li>
                              benefcio3
                        </li>

                     </ul>

                     <ul>
                        <li>
                              beneficio1
                        </li>
                        <li>
                              beneficio2
                        </li>
                        <li>
                              benefcio3
                        </li>

                     </ul>

                 </div>
           </div>

           <div className="container-serv">
                 <div className="description"></div>
           </div>

           <div className="container-serv">
                 <div className="description"></div>
           </div>

           <div className="container-serv">
                 <div className="description"></div>
           </div>
     </div>
    </>
  )
}
