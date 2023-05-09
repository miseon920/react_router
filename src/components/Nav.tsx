import React from 'react'
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to={'/'} className={({ isActive }) => (isActive ? "on" : "")}>Home</NavLink></li>
            <li><NavLink to={'/sub/about'} className={({ isActive }) => (isActive ? "on" : "")}>About</NavLink></li>
            <li><NavLink to={'/member'}className={({ isActive }) => (isActive ? "on" : "")}>Member</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav