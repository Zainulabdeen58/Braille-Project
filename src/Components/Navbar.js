import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul className='flex justify-around list-none text-xl bg-primary text-secondary pb-7'>
        <li><NavLink className="nav-link" to="/about">About Us </NavLink></li>
        <li><NavLink className="nav-link" to="/exhibitions">Exhibitions </NavLink></li>
        <li><NavLink className="nav-link" to="/art-shop">Art Shop </NavLink></li>
        <li><NavLink className="nav-link" to="/3D-prints">3D Prints </NavLink></li>
        <li><NavLink className="nav-link" to="/contact">Contact Us </NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
