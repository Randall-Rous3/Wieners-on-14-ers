import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Header(props) {
  return (
    <header>
      <h1 id='name'> Wieners on 14ers </h1>
      <nav >
        <NavLink className = 'nav' to="/">Home</NavLink>
        <NavLink className = 'nav' to="/addDog">Add Pup Pic</NavLink>
        <NavLink className = 'nav' to="/mountains">Mountains</NavLink>

      </nav>
    </header>
  )
}