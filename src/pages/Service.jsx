import React from 'react'
import './Service.css'
import { hall } from '../constant/Data'
import { room } from '../constant/Data'
import img5 from '../image/img9.jpg'
const Service = () => {
  return (
    <div class="container-fluid">
        <div class="row1">
            <h1>ROOM GALLERY</h1>
            <img src={img5} alt="rooms"/>
             </div>         
        <div className='row2'>  
            { 
            hall.map((item)=>
             <div className="col1" id={item.id}>
                <img src={item.img} alt="hall"/>
           </div>
           )
        }
         </div>
          <div className='row2'>  
            { 
            room.map((item)=>
             <div className="col1" id={item.id}>
                <img src={item.img} alt="hall"/>
           </div>
           )
        }   
            
    </div>

    </div>
 )
}

export default Service
