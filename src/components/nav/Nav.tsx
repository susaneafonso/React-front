import "./Nav.css"
import React from "react"
import{ Routess} from "../../routess"
import {Link} from "react-router-dom"

export function Nav() {
  return (
    <>
       <div className="container-nav">
      <ul id="lista">

        <li>
        <Link to="/"><p>Home</p> </Link> 
        </li>

        <li>
        <Link to="/Services"><p>Services</p></Link> 
        </li>

        <li>
        <Link to="/About"><p>About us</p></Link> 
        </li>

        <li>
        <Link to="/Contacts"><p>contact</p></Link> 
        </li>

       </ul> 
       </div>
    </>
  )
}

