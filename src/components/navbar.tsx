import React from "react";
import { Link } from 'gatsby'
import style from './navbar.module.css'


export default function Nav() {

  return <div className={style.navbar}>

    <Link to='/'>Home</Link>

    <Link to='/product'>Product</Link>

    <Link to='/contact'>Contact</Link>

    <Link to='/about'>About</Link>
  </div>
}
