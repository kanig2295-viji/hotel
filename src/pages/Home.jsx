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
            <button className='but'>Booking Now</button><br/>
            <button class="nav-btn">←</button>
            <button class="nav-btn">→</button>
        </div>
    </div>
    <div class="hero-image-area">
        <div class="image-wrapper">
            <img src={img1} alt="Resort View"/>
            <div class="gold-border-shape">

            </div>
        </div>
    </div>
</section>
    <div className="hero-section">
      <div className="hero-text">
        <h1>Enjoy A Luxury <br/> Experience</h1>
        <p>
          Experience world-class hospitality at Royal Palace. 
          Our premium suites and exceptional service ensure a stay that is both regal and relaxing.
        </p>
        <div className="contact">
          <p>📞 +91 77086 22167</p>
          <span>For Information</span>
        </div>
      </div>
      <div className="booking-card">
        <h3>Rooms & Suites</h3>
        <h2>Hotel Booking Form</h2>
        
        <div className="input-group">
          <input type="text" placeholder="Check In" onFocus={(e) => (e.target.type = "date")} />
        </div>
        
        <div className="input-group">
          <input type="text" placeholder="Check Out" onFocus={(e) => (e.target.type = "date")} />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <div className="input-group" style={{ flex: 1 }}>
            <select>
              <option>Adults</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div className="input-group" style={{ flex: 1 }}>
            <select>
              <option>Children</option>
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </div>
        <button className="check-btn"> CHECK AVAILABILITY </button>
      </div>
      </div>
    <div className='mail'>
        <div className='heading'>
            <h2>Get Updates & Stay Connected Subscribe To Our Newsletter</h2>
        </div>
        <div className='inbox'>
         <input type='email' placeholder='Email'></input>
            <button>SUBSCRIBE</button>
        </div>
    </div> 
  </div>  
  
);
};

export default Home
