import React from 'react'
import { useRecoilState } from "recoil"
import { caddyState,saveCart } from '../store/atoms'

export default function TrainingCard(props) {

    let item = props.item
    let cartName = 'cart'
    const [cart,setCart] = useRecoilState(caddyState);

    //Initialisation du local storage (panier)
    let caddy = window.localStorage;
    let tab = JSON.parse(caddy.getItem(cartName));
    if (tab === null) {  // le panier existe déjà
        tab = []
    }
    // add item to locastorage
    const onAddToCart = (item) => {
        //vérification si l'id de l'argument panier est le même que produit
        let same = tab.findIndex((it) => it.id === item.id)
        //si il n'est pas le mm
        if (same === -1) {
            //ajout du produit à notre panier
            tab.push(item)
            setCart(tab)
            //sinon
        } else {
            //mise à jour de la quantité du produit concerné (panier)
            tab[same].quantity+=1
            setCart(tab)
        }
        saveCart(tab); //à chaque fois que j'ajoute un élément au panier, je met à jour le local storage
    }

    const cartClick = (e) => {
        const button = e.currentTarget
        button.classList.add('clicked')

        setTimeout(() => {
            button.classList.remove('clicked')
        }, 3000);
    }

    return (
        <div className="product-content product-wrap">
            <div className='row'>
                <div className="col-md-5 col-sm-12 col-xs-12">
                    <div className="product-image">
                        <img src={`${/img/}${item.imgurl}`} alt="194x228" className="img-responsive" />
                    </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12">
                    <div className="product-price">
                        <p>{item.price}€ </p>
                    </div>
                    <div className="description">
                        <p>{item.description}</p>
                    </div>

                </div>
            </div>
            <div className="product-info">
                <div className="sold_stars ml-auto"> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i
                    className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> (518)
                </div>
            </div>
            <button className="cart-button" onClick={(e) => {
                cartClick(e)
                e.preventDefault()
                onAddToCart(item)
            }} > <span className="add-to-cart">Add to
                cart</span>
                <span className="added">
                    Added</span> <i className="fa-light fa-plus"></i> <i className="fa-solid fa-cart-shopping"></i> <i className="fa-solid fa-check"></i>
            </button>
        </div>
    )
}
