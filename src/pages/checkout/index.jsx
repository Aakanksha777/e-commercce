import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Checkout = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2>Congratualtions your order has been succesfully placed</h2>
            <p>Here are the details, kindly verify</p>
            <p>In case of any wrong info please contact our customer care number : 9999-999-999</p>
        </div>
    )
}

export default Checkout