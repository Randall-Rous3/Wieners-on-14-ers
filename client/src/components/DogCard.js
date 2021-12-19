
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MountainDogs from '../pages/Mountain_Dogs';







const DogCard = (props) => {
  

  const deleteDog = (e) =>{
   
   
    console.log(props.id);
    axios
      .delete(`http://localhost:3001/api/dogs/${props.id}`, )
      .then (props.render)
      
    
}



    return (
        <div className='Dog-grid '>
            <h1>{props.name}</h1>
      <div className="Dog-card" onClick={props.onClick}>
          <div className='pic'> <img className='img' src= {props.image} alt="Dog"/> 
          <button className='delete' onClick={deleteDog}>delete </button> 
          </div>         
        <div className="info-wrapper flex-row space">
          <h3> breed: {props.breed} <br/> date: {props.date} <br/> Mountain: {props.location} </h3>
        </div>
      </div>
      </div>
    )
  }
  
  export default DogCard