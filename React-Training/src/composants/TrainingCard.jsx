import React,{useEffect} from 'react'

export default function TrainingCard(props) {
   
let item=props.item

    
    useEffect(() => {

    }, [])

    const onAddToCart = (item) => {
        // cartService.addTraining(item)
    }

    const cartClick = (e) => {
        const button=e.currentTarget
        button.classList.add('clicked')

        setTimeout(() => {
            button.classList.remove('clicked')
        }, 3000);
    }

    return (
        <div className="product-content product-wrap">
            <div className="row">
                <div className="col-md-5 col-sm-12 col-xs-12">
                    <div className="product-image">
                        <img src={`${/img/}${item.imgurl}`} alt="194x228" className="img-responsive" />
                    </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12">
                    <div className="product-deatil">
                        <p className="price-container">
                            <span>{item.price} €</span>
                        </p>
                    </div>
                    <div className="description">
                        <h6>{item.description}</h6>
                    </div>
                    <div className="product-info smart-form">
                        <div className="row">
                            <div className="sold_stars ml-auto"> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i
                                className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i>
                            </div>
                            <button className="cart-button" onClick={(e) => {
                                cartClick(e)
                                e.preventDefault()
                                onAddToCart(item)
                            }} > <span className="add-to-cart">Add to
                                cart</span>
                                <span className="added">Item
                                    added</span> <i className="fa fa-plus"></i> <i className="fa fa-circle-thin"></i> <i
                                        className="fa fa-check"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
