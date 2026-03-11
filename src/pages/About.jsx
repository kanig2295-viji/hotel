import React from 'react'
import './About.css'
import im1 from '../image/img1.jpg'
import im2 from '../image/img12.jpg'
import im3 from '../image/icon.png'

const About = () => {
  return (
    <div className='container-fluid'>
     <div class="row4">
                <h1>ABOUT ME</h1>
                <img src={im1} alt="rooms"/>
                 </div>         
          <section className="about-section">
        <div className="container">
          
            <h2 className="since-text">Since 2015 year</h2>
            
          
            <p className="description">
                Our journey began with a simple idea: to create meaningful experiences for our community. 
                Over the years, we have grown into a passionate team dedicated to excellence. 
                We believe in innovation, integrity, and building lasting relationships with everyone we serve. 
                Through every challenge and success, our commitment to quality remains unchanged as we look 
                forward to a bright and inspiring future together.
            </p>
        </div>
    </section>
    <div class="row4">
                <img src={im2} alt="rooms"/>
                 </div>
       <section class="features-section">
        <div class="feature-container">
            <div class="feature-item">
                 <img src={im3}  alt="icon"/>                <h3>Top Quality</h3>
                <p>We pride ourselves on delivering the highest standards of service and luxury to ensure your stay is truly unforgettable and comfortable.</p>
            </div>
            <div class="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#B8705C" class="bi bi-file-lock-fill" viewBox="0 0 16 16">
  <path d="M7 6a1 1 0 0 1 2 0v1H7zM6 8.3c0-.042.02-.107.105-.175A.64.64 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.64.64 0 0 1 9.5 11h-3a.64.64 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7z"/>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0"/>
</svg>
                <h3>Secure Stay</h3>
                <p>Your safety is our priority. With 24/7 security and advanced safety protocols, you can relax and enjoy your time without any worries.</p>
            </div>

            <div class="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#B8705C" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
                <h3>Prime Location</h3>
                <p>Nestled in the heart of the city, our location provides easy access to all major attractions, shopping centers, and local transit.</p>
            </div>

        </div>
    </section>

    <section class="info-section">
        <div class="info-container">
            
            <div class="info-box">
                <i class="bi bi-star-fill icon"></i>
                <h3>Premium Experience</h3>
                <p>We provide world-class amenities and personalized services to make your stay comfortable and memorable every time you visit us.</p>
            </div>
            <div class="info-box">
                <i class="bi bi-headset icon"></i>
                <h3>24/7 Support</h3>
                <p>Our dedicated team is always available to assist you with any queries or bookings, ensuring a smooth and hassle-free process.</p>
            </div>
            <div class="info-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#B8705C" class="bi bi-sign-turn-right" viewBox="0 0 16 16">
  <path d="M5 8.5A2.5 2.5 0 0 1 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658A.25.25 0 0 1 9 8.466V7H7.5A1.5 1.5 0 0 0 6 8.5V11H5z"/>
  <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134Z"/>
</svg>
                <h3>Smart Navigation</h3>
                <p>Located in the city center, we offer easy access to transportation and top tourist attractions, saving you time and effort.</p>
            </div>

        </div>
    </section>
         

    </div>
  )
}

export default About
