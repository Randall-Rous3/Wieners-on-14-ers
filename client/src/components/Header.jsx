import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Header(props) {
  return (
    <header>
      <h1 id='name'> Wicked-Fun Park </h1>
      <nav >
        <NavLink className = 'nav' to="/">Home</NavLink>
        <NavLink className = 'nav' to="/addDog">Add Pup Pic</NavLink>
        <NavLink className = 'nav' to="/rides">Mountains</NavLink>

      </nav>
    </header>
  )
}