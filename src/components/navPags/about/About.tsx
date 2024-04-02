import React from 'react'
import"./About.css"
import{ Nav} from "../../links"
import meeting from "../../../assets/img/meeting.png"
import coding from "../../../assets/img/coding.jpg"
import code from "../../../assets/img/code.jpg"

export function About() {
  return (
    <>
      <Nav></Nav>
      <div className="container-about">

             <div className="img-about">
             <img src={meeting} alt="meeting" id='meet-img' />
             <img src={code} alt="conding" id='code-img' />
             <img src={coding} alt="code" id='coding-img' />
             <img src={meeting} alt="meeting" id='meet-img-subst' />
             </div>
            <div className='container-about-txt'>
                  <h1>
                       Sobre a TechSolutions
                  </h1>
                  <p>
                  Na TechSolutions, estamos comprometidos em fornecer soluções de tecnologia inovadoras e sob medida para impulsionar o sucesso de nossos clientes. Fundada em 2014, nossa empresa nasceu da paixão por tecnologia e da visão de criar um ambiente onde a excelência e a inovação se fundem para enfrentar os desafios mais complexos do mundo digital.

Desde o início, buscamos estabelecer uma cultura empresarial centrada no cliente, na integridade e na excelência técnica. Acreditamos que o verdadeiro valor de uma empresa de tecnologia reside em sua capacidade de entender as necessidades únicas de cada cliente e fornecer soluções que superem suas expectativas.

Nosso compromisso com a excelência técnica nos levou a construir uma equipe de profissionais altamente qualificados e apaixonados pelo que fazem. Com uma combinação única de experiência, habilidades e criatividade, nossa equipe está sempre pronta para enfrentar os desafios mais exigentes e transformar ideias inovadoras em realidade.

Valorizamos a transparência, a ética e a responsabilidade em tudo o que fazemos. Nosso objetivo é estabelecer parcerias de longo prazo com nossos clientes, baseadas na confiança mútua e no compromisso com o sucesso mútuo. Somos movidos pela busca incessante da excelência e pelo desejo de criar um impacto positivo em nossas comunidades e no mundo ao nosso redor.

Além disso, estamos empenhados em manter-nos atualizados com as últimas tendências e avanços tecnológicos, garantindo que possamos oferecer as soluções mais inovadoras e eficazes para os desafios de hoje e de amanhã.

Não apenas fornecemos soluções de tecnologia - construímos parcerias duradouras, impulsionadas pela inovação e pelo compromisso com a excelência. Junte-se a nós enquanto continuamos a moldar o futuro da tecnologia e a capacitar empresas de todos os tamanhos a alcançar seu pleno potencial no mundo digital.

                  </p>



            </div>




      </div>
    </>
  )
}
