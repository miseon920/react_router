import React from 'react'
import { NavLink, Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to='/' className={({ isActive }) => (isActive ? "on" : "")}>Home</NavLink></li>
            <li><NavLink to='/sub/about' className={({ isActive }) => (isActive ? "on" : "")}>About</NavLink></li>
            <li><NavLink to='/member' className={({ isActive }) => (isActive ? "on" : "")}>Member</NavLink></li>
        </ul>
    </nav>
  )
}

export const SubNav = () => {
    return(
        <ul>
            <li><Link to='/sub/about'>about</Link></li>
            <li><Link to='/sub/map'>map</Link></li>
        </ul>
    )
}