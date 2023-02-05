import React from 'react'
import { useRecoilState } from "recoil"
import { caddyState, getTotal, saveCart, clear } from '../store/atoms'
import { Link } from 'react-router-dom';

export default function Caddy() {

    let total = 0
    //Initialisation du local storage (panier)
    let cartName = 'cart'
    let caddy = window.localStorage

    const [cart, setCart] = useRecoilState(caddyState);
    total = getTotal()


    // delete item from caddy
    const onDelToCart = (item) => {
        // si il reste un produit on vide le panier du localstorage
        if (cart.length === 1) {
            //on vide le token panier du localStorage
            caddy.removeItem(cartName)
            setCart([])
        }
        //vérification si l'id de l'argument panier est le même que produit
        let newCart = cart.filter((p) => p.id !== item.id);
        setCart(newCart)
        saveCart(newCart);

    }
    const clearCart = () => {
        clear()
        setCart([])
    }
 
    return (
        <div className="container padding-bottom-3x mb-1">
            <div className="table-responsive shopping-cart">
                {cart.length > 0 ?
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Products</th>
                                    <th className="text-center">Quantity</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center"><button className="btn btn-sm btn-outline-danger" onClick={(e) => {
                                        clearCart()
                                    }} >Clear
                                        Cart</button></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart?.map((c) => {
                                    return (
                                        <tr key={c.id}>
                                            <td>
                                                <div className="caddy-item">
                                                    <img className="caddy-thumb" src={`${/img/}${c.imgurl}`} alt="Product" />
                                                    <div className="caddy-info">
                                                        <h6 className="caddy-title">{c.description}</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center">{c.quantity} </td>
                                            <td className="text-center text-lg text-medium">{c.price} €</td>
                                            <td className="text-center"><a className="delete" data-original-title="Remove item" onClick={(e) => {
                                                onDelToCart(c)
                                            }} ><i
                                                className="fa-solid fa-trash-can"></i></a>
                                            </td>
                                        </tr>
                                    );
                                })}

                            </tbody>
                        </table>
                        <div className="shopping-cart-footer">
                            <span className="text-medium">Total: {total} €</span>
                        </div>
                        <div className="shopping-cart-footer">
                            <div className="caddy-links">
                                <Link to="/trainings" className="btn btn-outline-secondary">
                                    <i className="icon-arrow-left"></i>&nbsp;Back to
                                    Shopping
                                </Link>
                                <Link to="/order" className="btn btn-success">Checkout</Link>
                            </div>
                        </div>
                    </div> :
                    <div className="container-fluid  mt-100">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card" id="emptyCard">
                                    <div className="card-header">
                                        <h5>Cart</h5>
                                    </div>
                                    <div className="card-body cart">
                                        <div className="col-sm-12 empty-cart-cls text-center">
                                            <img src="/img/dCdflKN.png" width="130" height="130" className="img-fluid mb-4 mr-3" />
                                            <h3><strong>Votre panier est vide</strong></h3>
                                            <h4>Add something to make me happy</h4>
                                            <div className="column"><Link to="/trainings" className="btn btn-outline-secondary" ><i
                                                className="icon-arrow-left"></i>&nbsp;Back to
                                                Shopping</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}

            </div>
        </div>
    )
}
