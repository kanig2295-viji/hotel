import React from 'react'
import './Rooms.css'
import room1 from '../image/room1.jpg'
import room2 from '../image/super.jpg'
import room3 from '../image/queen.jpg'
import room4 from '../image/king.jpg'
import room5 from '../image/top.jpg'
import room6 from '../image/lake.jpg'
import room7 from '../image/img11.jpg'
import room8 from '../image/room2.jpg'

const Rooms = () => {
  return (
    <div className='room'>
        <div className='rows1'>
            <h5>Rooms</h5>
            <h1>Get a Comfortable Room Feel The Comfort</h1>
        </div>
        <div className='row2'>
          <div className='rooms'>
          <img src={room1} alt='room'></img>
          </div>
        <div className='details'>
        <h5>Super Deluxe</h5>
        <p>⭐⭐⭐⭐⭐</p>
       
    <div className="features-container">
      <div className="feature-item">
        <span className="icon">🛏️</span>
        <span className="text">King Bed</span>
      </div>
      
      <div className="feature-divider"></div>

      <div className="feature-item">
        <span className="icon">🚿</span>
        <span className="text">1 Bathroom</span>
      </div>

      <div className="feature-divider"></div>

      <div className="feature-item">
        <span className="icon">📏</span>
        <span className="text">700 Sq.ft</span>
      </div>
      <div className='price'>
        <p>₹2000/Night</p>
        <button>Book Now</button>
         </div>
      </div>
    </div>
   </div>
      <div className='row2'>
        <div className='rooms'>
          <img src={room2} alt='room'></img>
          </div>
        <div className='details'>
        <h5>Premium Deluxe</h5>
        <p>⭐⭐⭐⭐⭐</p>
    <div className="features-container">
      <div className="feature-item">
        <span className="icon">🛏️</span>
        <span className="text">King Bed</span>
      </div>
      
      <div className="feature-divider"></div>

      <div className="feature-item">
        <span className="icon">🚿</span>
        <span className="text">1 Bathroom</span>
      </div>

      <div className="feature-divider"></div>

      <div className="feature-item">
        <span className="icon">📏</span>
        <span className="text">700 Sq.ft</span>
      </div>
      <div className='price'>
        <p>₹2000/Night</p>
        <button>Book Now</button>
      </div>
    </div>
        </div>
  
      
      </div>
      <div className='row2'>
        <div className='rooms'>
          <img src={room3} alt='room'></img>
          </div>
        <div className='details'>
        <h5>King sized deluxe</h5>
        <p>⭐⭐⭐⭐⭐</p>
    <div className="features-container">
      <div className="feature-item">
        <span className="icon">🛏️</span>
        <span className="text">King Bed</span>
      </div>
      
      <div className="feature-divider"></div>

      <div className="feature-item">
        <span className="icon">🚿</span>
        <span className="text">1 Bathroom</span>
      </div>

      <div className="feature-divider"></div>

      <div className="feature-item">
        <span className="icon">📏</span>
        <span className="text">700 Sq.ft</span>
      </div>
      <div className='price'>
        <p>₹2000/Night</p>
        <button>Book Now</button>
      </div>
    </div>
        </div>
  
      
      </div>
      <div className='row2'>
        <div className='rooms'>
          <img src={room4} alt='room'></img>
          </div>
        <div className='details'>
        <h5>Delux Queen Luxury Room</h5>
        <p>⭐⭐⭐⭐⭐</p>
    <div className="features-container">
      <div className="feature-item">
        <span className="icon">🛏️</span>
        <span className="text">King Bed</span>
      </div>
      
      <div className="feature-divider"></div>

      <div className="feature-item">
        <span className="icon">🚿</span>
        <span className="text">1 Bathroom</span>
      </div>

      <div className="feature-divider"></div>

      <div className="feature-item">
        <span className="icon">📏</span>
        <span className="text">700 Sq.ft</span>
      </div>
      <div className='price'>
        <p>₹2000/Night</p>
        <button>Book Now</button>
      </div>
    </div>
        </div>
      </div>
      <div className='contact'>
      <div className='ima'> <img src={room5}></img></div> 
        <div className='descripe'>
           <h5>We Have 25+ Experiences & We Have Great Memories</h5>
            <p>With over 25+ years of excellence in hospitality, we have been creating unforgettable memories for our guests through premium service. Our journey is built on trust and a deep commitment to providing a luxury stay that feels just like home.
               We ensure every moment you spend with us becomes a cherished memory for a lifetime.</p>
           <button>CONTACT US</button>
          </div>
      </div>
  <div className='memory'>
  <div className='mem'>
    <p>Discount Packages</p>
    <h5>We Provide Top Class Facility Especially For You</h5>
  </div>
  <div className='discount-container'> 
    
    <div className='discount-card'> 
      <img src={room6} alt="room" />
      <p>⭐⭐⭐⭐⭐</p>
      <h5>Premium (20% Off)</h5>
      <div className='night'>
        <p>₹1500/Night</p>
        <button>Book Now</button>
      </div>
    </div>

    <div className='discount-card'> 
      <img src={room7} alt="room" />
      <p>⭐⭐⭐⭐⭐</p>
      <h5>Deluxe Suite (25% Off)​</h5>
      <div className='night'>
        <p>₹1500/Night</p>
        <button>Book Now</button>
      </div>
    </div>

    <div className='discount-card'> 
      <img src={room8} alt="room" />
      <p>⭐⭐⭐⭐⭐</p>
      <h5>Queens Room (10% Off)</h5>
      <div className='night'>
        <p>₹1800/Night</p>
        <button>Book Now</button>
      </div>
    </div>

  </div>
</div>

      </div>
  
  )
}

export default Rooms
