import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { deleteItem, updateItemQuantity } from '../../utlis/apiFunc';
import { CartAndWishlistContext } from '../../context/CartAndWishlist';

const ProductCard = ({ productData }) => {
    const { user } = useContext(AuthContext);
    const { cart, setCart } = useContext(CartAndWishlistContext);

    const handleChangeQty = async (product, changeType) => {
        if (user.token) {
            const response = await updateItemQuantity(product.id, changeType, user.token)
            setCart(response.cart)
        } else {
            let flag = false
            let qtyChangedProduct = cart.map((ele) => {
                if (ele.id === product.id) {
                    changeType === "increment" ? ele.qty += 1 : product.qty < 1 ? flag = true : ele.qty -= 1
                }
                return ele
            })
            flag && (qtyChangedProduct = cart.filter((ele) => ele.id !== product.id))
            setCart(qtyChangedProduct)
        }
    }
    const handleRemoveProduct = async (product) => {
        if (user.token) {
            const response = await deleteItem(product.id, user.token)
            setCart(response.cart)
        } else {
            const qtyChangedProduct = cart.filter((ele) => ele.id !== product.id)
            setCart(qtyChangedProduct)
        }
    }

    if (productData) {
        const { id, image, productname, price, discount, qty } = productData
        return (
            <div key={id} className="cart-product-description">
                <img
                    className="cart-side-image"
                    src={image}
                    alt="product"
                />
                <h5>{productname}</h5>
                <div className="cart-price-box">
                    <h3 className="cart-price">${price}</h3>
                    <h3 className="cart-price-lineThrough">${price + Math.floor(Math.random() * 10)}</h3>
                </div>
                <div className="cart-quantity-box">
                    <button onClick={() => handleChangeQty(productData, "increment")}>+</button>
                    <p className="cart-quantity">{qty}</p>
                    <button onClick={() => handleChangeQty(productData, "decrement")}>-</button>
                </div>

                <p className="cart-saving-text">{discount}</p>

                <div className="btn-box">
                    <button onClick={() => handleRemoveProduct(productData)} className="cart-btn1"> Remove From Cart</button>
                    <button className="cart-btn1">Move To Wishlist </button>
                </div>
            </div>
        )
    }
    return <div>Sorry Product Can't be render</div>
}

export default ProductCard