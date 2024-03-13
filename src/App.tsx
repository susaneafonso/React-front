// // import { Brand , Nav , Services , Techs } from "./components/links"
// import { Nav } from "./components/nav/Nav"
// import {Brand} from "./components/brand/Brand"
// import {Services} from "./components/service/Service"
// import {Techs} from "./components/techs/Techs"
// import Footer from "./components/footer/Footer"

import { Brand, Depo, Footer, Nav, Service, Techs } from "./components/links"

// import {Depo} from "../src/components/depo/Depo"
export {Brand,Nav,Techs,Service,Footer,Depo} from "./components/links"



export function App() {
  

  return (
    <>
    <Nav></Nav>
    <Brand></Brand>
    <Service></Service>
    <Techs></Techs>
    <Depo></Depo>
    <Footer></Footer>
    </>
  )
}


