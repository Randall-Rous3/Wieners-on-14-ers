
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MountainDogs from './pages/Mountain_Dogs';






const DogCard = (props) => {
  


  const [returnId, setReturnId] = useState(0);

  const deleteDog = (e) =>{
    e.preventDefault();
    axios
      .delete('http://localhost:3001/api/deleteDog')
      .then((response) => setReturnId(response.data));

}

    return (
        <div className='Dog-grid '>
            <h1>{props.name}</h1>
      <div className="Dog-card" onClick={props.onClick}>
          <img className='img' src= {props.image} alt="Dog"/> 
          <button onClick={deleteDog()}>delete</button>
        <div className="info-wrapper flex-row space">
          <h3> breed: {props.breed} <br/> date: {props.date} <br/> Mountain: {props.location} </h3>
        </div>
      </div>
      </div>
    )
  }
  
  export default DogCard