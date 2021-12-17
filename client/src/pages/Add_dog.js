



import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function AddDog() {
  const [returnId, setReturnId] = useState(0);
  const [newDog, setNewDog] = useState({
    name: '',
    breed: '',
    date: ''
  });
  const createDog = (e) =>{
    e.preventDefault();
    const createdDog = {
      ...newDog
    };
    console.log(createdDog);
    axios
      .post('http://localhost:3001/api/addDog', createdDog)
      .then((response) => setReturnId(response.data));
    setNewDog({
      name: '',
      breed: '',
      date: '',
    });
}
  const handleChange = (e) => {
    setNewDog({ ...newDog, [e.target.name]: e.target.value });
   
  };
  const handleSubmit = (e) => {
    createDog(e);
  };

  return (
    <div>
      <h1>Add Your Pup!</h1>
      <img className = 'img'
            style={{ display: 'block', minWidth: '90%' }}
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2F6f5f6247b6fc95afdfa7f2cd2aea9d51%2Ftumblr_pawiiuyiZ41rq1ow1o1_500.jpg&f=1&nofb=1'
            alt="logo"
          />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newDog.name}
          onChange={handleChange}
          name={'name'}
          placeholder={'name of your pup'}
        />
        <input
          type="text"
          value={newDog.breed}
          onChange={handleChange}
          name={'breed'}
          placeholder={'breed'}
        />
        <input
          type="text"
          value={newDog.date}
          onChange={handleChange}
          name={'date'}
          placeholder={'date of photo'}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}




  
