import {BrowserRouter, Routes , Route} from "react-router-dom"
import {About, Services, Contacts, App} from "./components/navPags/routerLinks"

import React from 'react'

export function Routess() {
  return (
    <>
    <BrowserRouter>
        <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/Contacts" element={<Contacts/>}/>
              <Route path="/Services" element={<Services/>}/>
              <Route path="/About" element={<About/>}/>          
        </Routes>
    </BrowserRouter>
      
    </>
  )
}

