import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import ProductCard from '../../components/ProductCard'

const Checkout = () => {
    const { user } = useContext(AuthContext)
    const addAddress = () => {
        const { id, firstname, lastname, address_line1, address_line2, city, state, postal_code, country, phone } = user.latestOrder.address
        return <div key={id}>
            Delivery Address
            <address>
                <p>
                    <strong>{`${firstname} ${lastname}`}</strong><br />
                    {address_line1}{address_line2 && `, ${address_line2}`}<br />
                    {`${city}, ${state}, ${postal_code}`}<br />
                    {country}
                    Mobile Number : {phone}
                </p>
            </address>

        </div>
    }
    return (
        <div>
            <h2>Congratualtions your order has been succesfully placed</h2>
            <p>Here are the details, kindly verify</p>
            <p>In case of any wrong info please contact our customer care number : 9999-999-999</p>
            {user.latestOrder.products.map((product) => {
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
                            </div>
                        </div>
                    </div>
                )
            })}
            {addAddress()}
        </div>
    )
}

export default Checkout