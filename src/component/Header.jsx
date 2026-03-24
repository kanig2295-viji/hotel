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
             <li><Link to="service">EXPLORE</Link></li>
             <li> <Link to="rooms">ROOMS</Link></li>
            <li><Link to="contact">CONTACT US</Link></li>
            <li><Link to="favorite"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg></Link></li>
        </ul>
    </nav>
</header>

    </div>
  )
}

export default Header
