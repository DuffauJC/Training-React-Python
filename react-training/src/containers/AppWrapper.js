import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { caddyState } from '../store/atoms'
import { useRecoilValue } from "recoil"

export default function AppWrapper() {

    let user = null

    let input
    const cart = useRecoilValue(caddyState);
    let caddySize = cart.length

    useEffect(() => {
        let link = document.querySelectorAll('li')
        link.forEach(l => l.addEventListener('click', () =>
            input = document.getElementById('menu-toggle').checked = false
        ))

    }, [input])


    // je récupère le user
    const getuserrFromStorage = () => {
        user = window.localStorage.getItem('user')
        if (user) return JSON.parse(user);
        return "unknown"
    }

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
                </ul>
                <span className='welcome'> Bienvenue {getuserrFromStorage().name}</span>
                <div className="Caddy">
                    <Link to="/caddy">
                        <img src="/img/cart.png" className="img_cart" alt="Panier" />
                    </Link>
                    <h3 id="qty-cart">{caddySize}</h3>
                     <img className='img_avatar' src="/img/avatar.png" />
                </div>
            </div>
            <Outlet />
        </div>
    )
}
