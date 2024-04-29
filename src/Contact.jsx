import React, { useState } from 'react';

export default function Contact() {
   
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: ''
    });

    const valid_name = (value) => {
        if (!/^[a-zA-Z\s]*$/.test(value)) {
            return false; // Return false if the input does not match the validation criteria
        }
        return true; // Return true if the input is valid
    };
 
    const validContact = (value) => {
        // Regular expression for numeric input validation
        return /^[0-9]+$/.test(value);
    };
  
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'name') {
            if (!valid_name(value)) {
                alert('Please enter only letters and spaces for the name');
                return;
            }
        
        } else if (name === 'contact') {
            if (!validContact(value)) {
                alert('Please enter only numbers for the contact');
                return;
            }
        }

        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div>
            <h1 className='heading'>Welcome to Contact Page</h1>

            <div className='container'>
                <span className='name'>Enter Your Name</span>
                <br />
                <textarea name="name" cols="15" rows="1" value={formData.name} onChange={handleChange}></textarea>
            </div>

            <div className='container'>
                <span className='name'>Enter Your Mail id</span>
                <br />
                <textarea name="email" cols="15" rows="1" value={formData.email} onChange={handleChange}></textarea>
            </div>

            <div className='container'>
                <span className='name'>Enter Your Contact</span>
                <br />
                <textarea name="contact" cols="15" rows="1" value={formData.contact} onChange={handleChange}></textarea>
            </div>
        </div>
    );
}
