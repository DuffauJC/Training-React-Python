import React from 'react'
import { Link } from 'react-router-dom';
import logo from "/img/programming-code-signs.png"


export default function Header() {
    //    let customer = { "unknown", "", "", "", "", "", "" }
    let name = "User"
    // let role = ""
    // let display = false
    // let loggin = true
    // let logout = false
    let caddySize = 0
    // let admin = false

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light" id="header">
               
                  <Link to={`/home`} className="navbar-brand" > <img className="logo" src={logo}
                    alt="logo" /></Link>
                <h1>HOME TRAININGS</h1>
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <ul className="navbar-nav menu">
                    <li className="nav-item">
                        <Link to="/trainings" className="nav-link" >Trainings</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link" >Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link" >Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/logout" className="nav-link" >Logout</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin" className="nav-link" id="linkAdmin" >ADMIN</Link>
                    </li>
                </ul>  
            
                
                <div className="cart d-flex align-items-center" id="Caddy">
                    <Link to="/caddy">
                        <img src="/img/cart.png" className="img_cart" alt="Panier" />
                    </Link>
                    <h3 id="qty-cart">{caddySize}</h3>
                    <img src="/img/avatar.png" className='img_avatar' />
                </div>
             </nav>  
        </div>
    )
}
