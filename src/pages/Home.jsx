import React from 'react'
import './Home.css'
import img1 from '../image/img1.jpg'
const Home = () => {
  return (
    <div>
      <section class="hero-body">
    <div class="hero-content">
        <h3 class="gold-text">ULTIMATE COMFORT</h3>
        <p class="description">
            Experience the ultimate luxury in our boutique resorts. 
            Enjoy breathtaking views and world-class hospitality designed 
            just for your comfort and relaxation.
        </p>
        <div class="social-icons">
            <a href="#">f</a>
            <a href="#">𝕏</a>
            <a href="#">in</a>
            <a href="#">📸</a>
        </div>
        
        <div class="slider-nav">
            <button class="nav-btn">←</button>
            <button class="nav-btn">→</button>
        </div>
    </div>
    <div class="hero-image-area">
        <div class="image-wrapper">
            <img src={img1} alt="Resort View"/>
    
            
            <div class="gold-border-shape"></div>
        </div>
        
        <div class="dots-container">
            <span class="dot"></span>
            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
    </div>
</section>

    </div>
  )
}

export default Home
