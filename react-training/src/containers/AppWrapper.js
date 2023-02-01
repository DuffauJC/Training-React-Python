import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { caddyState } from '../store/atoms'
import { useRecoilValue } from "recoil"

export default function AppWrapper() {

    //    let customer = { "unknown", "", "", "", "", "", "" }
    // let name = "User"
    // let role = ""
    // let display = false
    // let loggin = true
    // let logout = false
    // let admin = false

    let input
    const cart = useRecoilValue(caddyState);
    let caddySize = cart.length

    useEffect(() => {
        let link = document.querySelectorAll('li')
        link.forEach(l => l.addEventListener('click', () =>
            input = document.getElementById('menu-toggle').checked = false
        ))
    }, [input])


    // au démarrage du service, je récupère le contenu du local storage : command en cours


    return (
        <div>
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
            <Outlet />
        </div>
    )
}
