import React from 'react'
import "./Contact.css"
import{ Nav, Footer} from "../../links"
import phone from "../../../assets/img/icon-phone1.png"
import email from "../../../assets/img/icon-email1.png"
import telacontatos from "../../../assets/img/tela-contatos.jpg"


export function Contacts() {
  return (
    <>
    <Nav></Nav>
    <div className='imgsolta'></div>
    <div className='imgsolta2'></div>
    <div className='container-contact-big'>
     <div className='container-contact'>

       <div className='container-form'>

        <h3>PREENCHA O FORMULÁRIO PARA FALAR CONOSCO </h3>
        <div className='inputs'>
          <input type="text" name="empresa" placeholder='Nome da Empresa'/>
          <input type="email" name="email" placeholder='E-mail'/>
        </div>
        <div className='inputs'>
           <input type="tel" name="telefone" placeholder='Telefone' />
           <select name="" id="">
              <option value="">Escolha um serviço</option>
              <option value="">Consultoria em TI </option>
              <option value="">Desenvolvimento de Software </option>
              <option value="">Integração de Sistemas </option>
              <option value="">Segurança Cibernética  </option>
              <option value="">Suporte Técnico </option>
           </select>
        </div>
        <textarea name=""  id="mensagem"cols="30" rows="10" placeholder='Mensagem'></textarea>
        <button type="submit" id='btn-submit'>Enviar</button>
     </div>
      <div className='container-img'>
         
            <h2>➤ OUTRAS FORMAS DE CONTATO</h2>
            <div className='phone'>
              <img src={phone}/>
              <div className='telefones'>
                <ul>
                  <li><span style={{"color":"blue","paddingRight":10}}> Rio de Janeiro</span>(21) 3320-9049</li>
                  <li><span style={{"color":"blue","paddingRight":39}}> São Paulo</span>(11) 3321-2333</li>
                  <li><span style={{"color":"blue","paddingRight":52}}>Curitiba</span>(41) 4002-4500</li>
                </ul>
              </div>
            </div>
            <div className='email'>
              <img src={email}/>
              <h1>contacts.techsolutions@gmail.com</h1>
            </div>
      </div>
    </div>
    </div>
    <div className='space'></div>
    <Footer></Footer>
    </>
  )
}
