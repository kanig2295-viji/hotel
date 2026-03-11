import './Header.css'
import { Link } from 'react-router-dom';
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
            <li><Link to="/">HOME</Link></li>
            <li><Link to="about">ABOUT US</Link></li>
            <li><Link to="#">SERVICES</Link></li>
            <li><Link to="#">CONTACT US</Link></li>
        </ul>
    </nav>
</header>

    </div>
  )
}

export default Header
