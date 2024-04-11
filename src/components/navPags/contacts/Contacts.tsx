import React from 'react'
import "./Contact.css"
import{ Nav} from "../../links"

export function Contacts() {
  return (
    <>
    <Nav></Nav>
    <div className='container-contact'>

      <div className='container-form'>

        <h3>Preencha o formulário para falar conosco </h3>
        <div className='inputs'>
          <input type="text" name="empresa" placeholder='Nome da Empresa'/>
          <input type="email" name="email" placeholder='E-mail'/>
        </div>
        <div className='inputs'>
           <input type="tel" name="telefone" placeholder='Telefone' />
           <select name="" id="">
            <option value=""> --Escolha um serviço</option>
            <option value="">  Consultoria em TI </option>
            <option value="">  Desenvolvimento de Software </option>
            <option value="">  Integração de Sistemas </option>
            <option value="">  Segurança Cibernética  </option>
            <option value="">  Suporte Técnico </option>
           </select>
        </div>
        <textarea name=""  id="mensagem"cols="30" rows="10" placeholder='Mensagem'></textarea>
        <button type="submit" id='btn-submit'>Enviar</button>
     </div>
      <div>

      </div>
    </div>
    </>
  )
}
