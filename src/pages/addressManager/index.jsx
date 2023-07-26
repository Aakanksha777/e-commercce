import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import AddressForm from '../../components/addressForm'
import "./addressManager.css"
import { CartAndWishlistContext } from '../../context/CartAndWishlist'
import { Link } from 'react-router-dom'
import { Ajax } from '../../utlis/apiFunc'

const AddressManager = () => {
    const { user, setUser } = useContext(AuthContext)
    const { cart, setCart } = useContext(CartAndWishlistContext)
    const [showAddressForm, setAddressForm] = useState(false)
    const [confirmOrder, setConfirmOrder] = useState(false)
    const handleCloseForm = () => {
        setAddressForm(false)
    }
    useEffect(() => {
        console.log("inside address", user);
    }, [user])
    const handleAddressSelection = async (address) => {
        setUser({ ...user, latestOrder: { ...user.latestOrder, address: address } })
        const responseArr = cart.map(async (item) => {
            return await Ajax(`/api/user/cart/${item.id}`, user.token, null, "DELETE");
        })
        const response = await Promise.all(responseArr)
        setCart(response[0].cart)
        setConfirmOrder(true)
    }
    const handleConfirmOrder = (bool) => {
        setConfirmOrder(bool)
    }
    return (
        <div className='address-manager'>
            <h2>Saved Address</h2>
            <div className='saved-address'>
                {user.addresses.map((address) => {
                    const { id, firstname, lastname, address_line1, address_line2, city, state, postal_code, country, phone } = address
                    return <div key={id}>
                        <address>
                            <p>
                                <strong>{`${firstname} ${lastname}`}</strong><br />
                                {address_line1}{address_line2 && `, ${address_line2}`}<br />
                                {`${city}, ${state}, ${postal_code}`}<br />
                                {country}
                                Mobile Number : {phone}
                            </p>
                        </address>
                        <button onClick={() => handleAddressSelection(address)}>Choose this Address</button>
                    </div>
                })}
            </div>

            <button onClick={() => setAddressForm(true)}>Add New Address</button>
            {showAddressForm && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleCloseForm}>
                            &times;
                        </span>
                        <AddressForm handleCloseForm={handleCloseForm} />
                    </div>
                </div>
            )}
            {confirmOrder && <div className="modal-overlay">
                <div className="modal-content">
                    <span className="modal-close" onClick={() => handleConfirmOrder(true)}>
                        &times;
                    </span>
                    <div className='text-info'>
                        <div>Please click on Confirm button to place the Order. Your order will be delivered before 5 working days. Payment option is COD</div>
                        <Link to="../checkout" className='confirm-btn'>Confirm you Order</Link>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default AddressManager