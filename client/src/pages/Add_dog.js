



import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function AddDog() {
  const [returnId, setReturnId] = useState(0);
  const [newDog, setNewDog] = useState({
    name: '',
    breed: '',
    date: '',
    image: ''
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
      image:''
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
        <input
          type="file"
          value={newDog.image}
          onChange={handleChange}
          name={'image'}
          placeholder={'image url'}
        />
        <select >
            <option > " what mountain?"</option>
            <option > " Gray's Peak"</option>
            <option > " what mountain?"</option>
            <option > " what mountain?"</option>
            <option > " what mountain?"</option>
            <option > " what mountain?"</option>
            <option > " what mountain?"</option>
            <option > " what mountain?"</option>
            <option > " what mountain?"</option>
            <option > " what mountain?"</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}




  
