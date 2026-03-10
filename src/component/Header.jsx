import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
<header class="main-header">
    <div class="logo-container">
    <div class="brand-top">
        <span class="logo-icon">✦</span> 
        <span class="brand-text">PREMIUM SELECTION</span>
    </div>
    <h1 class="hotel-name">ROYAL PALACE</h1>
    <p class="hotel-tagline">Luxury Stays & Resorts</p>
</div>

    
    <nav class="nav-menu">
        <ul>
            <li><a href>HOME</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">CONTACT US</a></li>
        </ul>
    </nav>
</header>

    </div>
  )
}

export default Header
