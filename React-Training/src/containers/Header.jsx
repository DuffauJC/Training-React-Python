import React from 'react'
import { Link } from 'react-router-dom';


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
        <div className="navbar navbar-expand-sm navbar-light" id="header">
            
            <h1>SHOPPING SHOPPANG</h1>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="navbar-nav menu">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/trainings">Trainings</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
                <li>
                    <Link to="/admin" id="linkAdmin" >ADMIN</Link>
                </li>
            </ul>
            <div className="Caddy">
                <Link to="/caddy">
                    <img src="/img/cart.png" className="img_cart" alt="Panier" />
                </Link>
                <h3 id="qty-cart">{caddySize}</h3>
                <img src="/img/avatar.png" className='img_avatar' />
            </div>
        </div>
    )
}
