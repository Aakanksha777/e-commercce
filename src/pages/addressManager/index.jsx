import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import AddressForm from '../../components/addressForm'
import "./addressManager.css"

const AddressManager = () => {
    const { user } = useContext(AuthContext)
    const [showAddressForm, setAddressForm] = useState(false)
    const handleCloseForm = () => {
        setAddressForm(false)
    }
    return (
        <div className='address-manager'>
            <h2>Saved Address</h2>
            <div className='saved-address'>
                {user.addresses.map((address) => {
                    const { firstname, lastname, address_line1, address_line2, city, state, postal_code, country, phone } = address
                    return <div>
                        <address>
                            <p>
                                <strong>{`${firstname} ${lastname}`}</strong><br />
                                {address_line1}{address_line2 && `, ${address_line2}`}<br />
                                {`${city}, ${state}, ${postal_code}`}<br />
                                {country}
                                Mobile Number : {phone}
                            </p>
                        </address>
                        <button>Choose this Address</button>
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
        </div>

    )
}

export default AddressManager