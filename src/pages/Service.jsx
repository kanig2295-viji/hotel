import React from 'react'
import './Service.css'
import { hall } from '../constant/Data'
import { room } from '../constant/Data'
import img5 from '../image/img9.jpg'
import { addToFav } from '../redux/favSlice';
import { useSelector,useDispatch } from 'react-redux'

const Service = () => {
   const count=useSelector((state)=>state.favorite.value)
  const dispatch = useDispatch();
   const addFav = (item) => {
    dispatch(addToFav(item));
    alert("Added to Favorites!");
  };

  return (
    <div class="container-fluid">
        <div class="row1">
            <h1>Explore{count}</h1>
            <img src={img5} alt="rooms"/>
             </div>         
        <div className='row2'>  
            { 
            hall.map((item)=>
             <div className="col1" id={item.id}>
                <img src={item.img} alt="hall"/>
                <h5>{item.title}</h5>
                <button onClick={() => addFav(item)}>❤️</button>
           </div>
           )
        }
         </div>
          <div className='row2'>  
            { 
            room.map((item)=>
             <div className="col1" id={item.id}>
                <img src={item.img} alt="hall"/>
                <h5>{item.title}</h5>
            
            
    <button onClick={() => addFav(item)}>❤️</button>
           </div>
           )
        }   
            
    </div>

    </div>
 )
}

export default Service
