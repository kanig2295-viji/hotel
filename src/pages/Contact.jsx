import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>

<div class="contact-container">
    <div class="contact-info">
        <div class="info-box">
            <i class="fas fa-map-marker-alt"></i>
            <div>
                <h3>Address</h3>
                <p>Royal Loyachary Hotel, Main Road, Coimbatore, TN.</p>
            </div>
        </div>
        <div class="info-box">
            <i class="fas fa-phone"></i>
            <div>
                <h3>Lets Talk</h3>
                <p>+91 77086 22167</p>
            </div>
        </div>
        <div class="info-box">
            <i class="fas fa-envelope"></i>
            <div>
                <h3>General Support</h3>
                <p>contact@royalloyachary.com</p>
            </div>
        </div>
    </div>
    <div class="contact-form">
        <h2>Send Us A Message</h2>
        <form>
            <div class="input-group">
                <label>TELL US YOUR NAME *</label>
                <div class="name-inputs">
                    <input type="text" placeholder="First name"/>
                    <input type="text" placeholder="Last name"/>
                </div>
            </div>
            <div class="input-group">
                <label>ENTER YOUR EMAIL *</label>
                <input type="email" placeholder="Eg. hello@example.com"/>
            </div>
            <div class="input-group">
                <label>ENTER PHONE NUMBER</label>
                <input type="text" placeholder="Eg. +91 0000000000"/>
            </div>
            <div class="input-group">
                <label>MESSAGE *</label>
                <textarea placeholder="Write us a message"></textarea>
            </div>
            <button type="submit" class="send-btn">SEND MESSAGE</button>
        </form>
    </div>
</div>

    </div>
  )
}

export default Contact

