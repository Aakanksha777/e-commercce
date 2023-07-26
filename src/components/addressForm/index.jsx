import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import "./addressForm.css"
const AddressForm = ({ handleCloseForm }) => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address_line1: '',
        address_line2: '',
        city: '',
        state: '',
        postal_code: '',
        country: '',
    });
    const { user, setUser } = useContext(AuthContext)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        handleCloseForm()
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ ...user, addresses: [user.addresses, formData] })
        console.log(formData);
    };

    return (
        <div className='address-form-modal'>
            <form className='address-form-container' onSubmit={handleSubmit}>
                <h2>Address Form</h2>
                <div className='form-divider'>
                    <div className='section-1'>
                        <div className='address-form'>
                            <label htmlFor="firstname">First Name:</label>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='address-form'>
                            <label htmlFor="lastname">Last Name:</label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                required
                            /></div>
                        <div className='address-form'>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            /></div>
                        <div className='address-form'>
                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            /></div>
                        <div className='address-form'>
                            <label htmlFor="address_line1">Address Line 1:</label>
                            <input
                                type="text"
                                id="address_line1"
                                name="address_line1"
                                value={formData.address_line1}
                                onChange={handleChange}
                                required
                            /></div>
                    </div>
                    <div className='section-2'>
                        <div className='address-form'>
                            <label htmlFor="address_line2">Address Line 2:</label>
                            <input
                                type="text"
                                id="address_line2"
                                name="address_line2"
                                value={formData.address_line2}
                                onChange={handleChange}
                            /></div>
                        <div className='address-form'>
                            <label htmlFor="city">City:</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            /></div>
                        <div className='address-form'>
                            <label htmlFor="state">State:</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='address-form'>
                            <label htmlFor="postal_code">Postal Code:</label>
                            <input
                                type="text"
                                id="postal_code"
                                name="postal_code"
                                value={formData.postal_code}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='address-form'>
                            <label htmlFor="country">Country:</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    );
};

export default AddressForm;