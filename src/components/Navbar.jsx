import React from 'react'
import logo from '../assets/icons_assets/Logo.svg'
import {Link} from 'react-router-dom'
import '../App.css'
export default function Navbar() {
  return (
    <>
     <nav>
        <img src={logo}/>
        <ul>
            <li><Link to='/' className='Link'>Home</Link></li>
            <li><Link to='/about' className='Link'>About</Link></li>
            <li><Link to='/menu' className='Link'>Menu</Link></li>
            <li><Link to='/reservation' className='Link'>Reservation</Link></li>
            <li><Link to='/order' className='Link'>Order online</Link></li>
        </ul>
        <Link to='login'><button>Log in</button></Link>
     </nav>
    </>
  )
}
