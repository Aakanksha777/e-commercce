import React from 'react'

const ProductCard = ({ productData }) => {
    if (productData) {
        const { id, image, productname, price, discount, quantity } = productData
        return (
            <div key={id} className="cart-product-description">
                <img
                    className="cart-side-image"
                    src={image}
                    alt="product"
                />
                <h5>{productname}</h5>
                <div className="cart-price-box">
                    <h3 className="cart-price">{price}</h3>
                    <h3 className="cart-price-lineThrough">INR 1000</h3>
                </div>
                <div className="cart-quantity-box">
                    <button>+</button>
                    <p className="cart-quantity">{quantity}</p>
                    <button>-</button>
                </div>

                <p className="cart-saving-text">{discount}</p>

                <div className="btn-box">
                    <button onClick={() => { }} className="cart-btn1"> Remove From Cart</button>
                    <button className="cart-btn1">Move To Wishlist </button>
                </div>
            </div>
        )
    }
    return <div>Sorry Product Can't be render</div>
}

export default ProductCard