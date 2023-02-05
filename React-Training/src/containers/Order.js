import React, { useEffect, useState } from 'react'
import { useRecoilState } from "recoil"
import { caddyState, getTotal, clear } from '../store/atoms'
import { useNavigate } from 'react-router-dom';

export default function Order() {

    let dateOrder = new Date();
    let Orders = 10203
    let rep
    let total = getTotal()

    const navigate = useNavigate();
    const [cart, setCart] = useRecoilState(caddyState);
    const [displayStyle, setDisplayStyle] = useState("none")
    const [displayConfirm, setDisplayConfirm] = useState("none")

    let user = {
        name: '',
        firstname: '',
        address: '',
        phoneNumber: '',
        email: ''
    }

    // je récupère le user
    const getuserrFromStorage = () => {
        rep = window.localStorage.getItem('user')
        if (rep) {
            return JSON.parse(rep)
        }
        return "unknown"
    }
    let cust = getuserrFromStorage()
    user.name = cust.name
    user.firstname = cust.firstname
    user.address = cust.address
    user.email = cust.email
    user.phoneNumber = cust.phoneNumber

    useEffect(() => {
    }, [])

    const onOrder = () => {
        setDisplayStyle("block")
    }
    const confirmOrder = () => {
        setDisplayStyle("none")
        clear()
        setCart([])
        getOrder()
    }
    const closePopup = () => {
        setDisplayStyle("none")

    }
    const closeOrder = () => {
        setDisplayConfirm('none')
        navigate("/"); 
    }

    const getOrder = () => {
        if (Orders > 0) {
            setDisplayConfirm("block")
        } else {
            setDisplayConfirm('none')
        }
    }

    return (
        <div className='wrapper'>
            {/* <!-- Title --> */}
            <div className="d-flex justify-content-between align-items-center py-3">
                <h2 className="h5 mb-0">Facturation</h2>
            </div>
            {/* <!-- Main content --> */}
            <div className="row">
                <div className="col-lg-8">
                    {/* <!-- Details --> */}
                    <div className="card mb-4 " id="orderCard">
                        <div className="card-body">
                            <div className="mb-3 d-flex justify-content-between">
                                <div>
                                    <span className="me-3">{dateOrder.toLocaleDateString()}</span>
                                    <span className="me-3">Visa -1234</span>
                                    <span className="badge rounded-pill bg-info">SHIPPING</span>
                                </div>
                            </div>
                            <table className="table table-borderless">
                                <tbody>
                                    {cart?.map((c) => {
                                        return (<tr key={c.id}>
                                            <td>
                                                <div className="d-flex mb-2">
                                                    <div className="flex-shrink-0">
                                                        <img className="caddy-thumb img-fluid" src={`${/img/}${c.imgurl}`} alt="Product" />
                                                    </div>
                                                    <div className="flex-lg-grow-1 ms-3">
                                                        <span className="small">{c.description}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{c.quantity}</td>
                                            <td className="text-end">{c.price} €</td>
                                        </tr>)
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="2">Shipping</td>
                                        <td className="text-end">$20.00</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">Discount (Code: NEWYEAR)</td>
                                        <td className="text-danger text-end">-$10.00</td>
                                    </tr>
                                    <tr className="fw-bold">
                                        <td colSpan="2">TOTAL</td>
                                        <td className="text-end">{total} €</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    {/* <!-- Payment --> */}
                    <div className="card mb-4" id="payInfo">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 payMethod">
                                    <h3 className="h6">Payment Method</h3>
                                    <p>Visa -1234 <br />
                                        Total: {total} € </p>
                                    <button className="btn btn-success" onClick={(e) => {
                                        onOrder()
                                    }} >Paid</button>
                                </div>
                                <div className="col-lg-6">
                                    <h3 className="h6">Billing address</h3>
                                    <address>
                                        <strong>{user.name}</strong><br />
                                        <strong>{user.firstname}</strong><br />
                                        {user.address}<br />
                                        San Francisco, CA 94103<br />
                                        <abbr title="Phone">P:</abbr> (123) {user.phoneNumber}<br />
                                        {user.email}<br />
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    {/* <!-- Customer Notes --> */}
                    <div className="card mb-4 " id="customerNotes">
                        <div className="card-body">
                            <h3 className="h6">Customer Notes</h3>
                            <p>En cas d'absence, livrez au relais colis le plus proche.</p>
                        </div>
                    </div>
                    <div className="card mb-4" id="shippingInfo">
                        {/* <!-- Shipping information --> */}
                        <div className="card-body">
                            <h3 className="h6">Shipping Information</h3>
                            <strong>FedEx</strong>
                            <span><a href='#' className="text-decoration-underline" target="_blank">FF1234567890</a> <i
                                className="bi bi-box-arrow-up-right"></i> </span>
                            <hr />
                            <h3 className="h6">Address</h3>
                            <address>
                                <strong>{user.name}</strong><br />
                                <strong>{user.firstname}</strong><br />
                                {user.address}<br />
                                San Francisco, CA 94103<br />
                                <abbr title="Phone">P:</abbr> (123) {user.phoneNumber}<br />
                                {user.email}<br />
                            </address>
                        </div>
                    </div>
                </div>
            </div>


            <div id="modal-confirm" style={{ display: displayStyle }}>
                <span className="close" title="Close Modal" onClick={(e) => {
                    closePopup()
                }} >&times;</span>
                <div className="modal-container" id="modal-confirm-container">
                    <h1>Comfirmation de commande</h1>
                    <div className="clearfix">
                        <button type="button" className="cancelbtn" onClick={(e) => {
                            closePopup()
                        }} >Annuler</button>
                        <button type="button" className="confirmbtn" onClick={(e) => {
                            confirmOrder()
                        }} >Confirmer</button>
                    </div>
                </div>
            </div>

            {/* <!-- Modal search--> */}
            <div className="modal" tabIndex="-1" role="dialog"
                style={{ display: displayConfirm }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content" id="modalSize">
                        <div className="modal-header">
                            <button type="button" data-dismiss="modal" aria-label="Close" onClick={(e) => {
                                closeOrder()
                            }} ><span
                                aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">Commande crée avec succés !! <br /> Numéro de commande : {Orders}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
