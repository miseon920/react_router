import React from 'react'
import { Link } from "react-router-dom";
import { Nav } from './Nav';

const Header = () => {
  return (
    <>
        <header>
            <Link to={'/'}>logo</Link>
        </header>
        <Nav/>
    </>
  )
}

export default Header;