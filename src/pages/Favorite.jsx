import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFav } from '../redux/favSlice'; // Redux Action
import './Favorite.css';

const Favorite = () => {
  const favorites = useSelector((state) => state.favorite.favItems);
  const dispatch = useDispatch();
  const handleRemove = (id) => {              
    dispatch(removeFromFav(id)); 
  };

  return (
    <div className="container">
      <h2>My Favorites ❤️ ({favorites.length})</h2>
      {favorites.length === 0 ? (
        <p>No favorite items added yet!</p>
      ) : (
        <div className="row7">
          {favorites.map((item) => (
            <div className="col8" key={item.id}>
              <img src={item.img} alt={item.title} />
              <div className="but1">
              
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
