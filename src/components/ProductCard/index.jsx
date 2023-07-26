import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';

const ProductCard = ({ product, removeProductLocal, removeProductApi, incrmntDcrmntQtyLocal, incrmntDcrmntQtyApi, moveProductLocal, moveProductApi, isWishList, handleShowPopUp }) => {
    const { user } = useContext(AuthContext);

    const handleChangeQty = async (product, changeType) => {
        if (!isWishList) {
            user.token ?
                await incrmntDcrmntQtyApi(product, changeType) : incrmntDcrmntQtyLocal(product, changeType)
            handleShowPopUp("Quantity Changed of the Product")
        }
    }

    const handleRemoveProduct = async (product) => {
        user.token ?
            removeProductApi(product) : removeProductLocal(product)
        handleShowPopUp(`Product Removed From The ${isWishList ? "Wishlist" : "Cart"}`)
    }

    const handleMoveProduct = async (product) => {
        user.token ?
            moveProductApi(product) : moveProductLocal(product)
        handleShowPopUp(`Product Moved To The ${isWishList ? "Cart" : "Wishlist"}`)
    }

    if (product) {
        const { id, title, image, productname, price, qty } = product
        return (
            <div key={id} className="cart-product-description">
                <img
                    className="cart-side-image"
                    src={image}
                    alt="product"
                />
                <div className='info-container'>
                    <h3>{title}</h3>
                    <h5>{productname}</h5>
                    <div className="cart-price-box">
                        <h3 className="cart-price">${price}</h3>
                        <h3 className="cart-price-lineThrough">${Math.round(price + Math.random() * 10)}</h3>
                    </div>
                    {!isWishList && <div className="cart-quantity-box">
                        <button onClick={() => handleChangeQty(product, "increment")}>+</button>
                        <p className="cart-quantity">{qty}</p>
                        <button onClick={() => handleChangeQty(product, "decrement")}>-</button>
                    </div>}
                </div>
                <div className="btn-box">
                    <button onClick={() => handleRemoveProduct(product)} className="cart-btn1"> Remove From {!isWishList ? 'Cart' : 'Wishlist'}</button>
                    <button className="cart-btn1" onClick={() => handleMoveProduct(product)}>Move To  {!isWishList ? 'Wishlist' : 'Cart'} </button>
                </div>

            </div>
        )
    }
    return <div>Sorry Product Can't be render</div>
}

export default ProductCard