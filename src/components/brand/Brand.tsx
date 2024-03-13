import "./Brand.css"
import {useEffect, useState} from "react"
import React from "react"


export function Brand() {

const [intr, setintro]=useState("intr")

useEffect(()=>{
    setintro("intro")
 
    const time = setInterval(()=>{
         setintro((intr)=>{
         
         if(intr ==="intro"){
          return "intro-sec"
         }
         else{
          return "intro"
         }})
    },10000)
    return()=>{
       clearInterval(time)
    }
 },[])
  return (
    <>
      <div className="container-brand">
         
         <div className="brand">
            <div className="logo"> 
             <div id="logo-img"></div>
            </div>
           

            {intr === "intro" && (
            <div className="intro">
               <h3>Bem-vindo à <span id="brand-name">TechSolutions</span><br></br>Transformando Ideias em Tecnologia de Ponta</h3>
               <p id="small-text">"Soluções Tecnológicas Personalizadas para o Sucesso do seu Negócio"</p>
            </div>
             )} 
            {intr === "intro-sec" && (
            <div className="intro-sec">
               <h2> Por que escolher a <span id="brand-name">TechSolutions</span> ?</h2>
               <p id="small-text"> Escolha a TechSolutions para ter ao seu lado uma equipe dedicada e especializada, pronta para transformar desafios tecnológicos em soluções inovadoras e confiáveis. Com nosso compromisso com a excelência, expertise em TI e foco no sucesso do cliente, estamos preparados para impulsionar o crescimento e a eficiência de sua empresa, 
               oferecendo soluções personalizadas que superam suas expectativas.<span id="brand-more"> Saiba mais ▶</span></p>
            </div>
              )} 
 
         </div>

       </div>
    </>
  )
}

