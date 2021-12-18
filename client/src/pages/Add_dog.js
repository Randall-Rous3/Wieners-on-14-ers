



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MountainDogs from './Mountain_Dogs';

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
      image:'',
      location: ''
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
      <form className='form' onSubmit={handleSubmit}>
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
          placeholder={'type of pupper'}
        />
        <input
          type="text"
          value={newDog.date}
          onChange={handleChange}
          name={'date'}
          placeholder={'date of photo'}
        />
        <input
          type="text"
          value={newDog.image}
          onChange={handleChange}
          name={'image'}
          placeholder={'image url'}
        />
        <select 
        value={newDog.location}
        onChange={handleChange}
        name={'location'}>
            <option > " what mountain?"</option>
            <option > Blanca Peak</option>
            <option > Capitol Peak</option>
            <option >  Castle Peak </option>
            <option > Challenger Point</option>
            <option > Conundrum Peak</option>
            <option > Crestone Needle</option>
            <option > Crestone Peak</option>
            <option > Culebra Peak</option>
            <option >El Diente Peak</option>
            <option > Ellingwood Point</option>
            <option >Grays Peak </option>
            <option >Handies Peak </option>
            <option > Humboldt Peak</option>
            <option > Huron Peak</option>
            <option > Kit Carson Peak</option>
            <option > La Plata Peak</option>
            <option > Little Bear Peak</option>
            <option > Longs Peak</option>
            <option > Maroon Peak</option>
            <option > Missouri Mountain</option>
            <option > Mt. Antero</option>
            <option > Mt. Belford</option>
            <option > Mt. Bierstadt</option>
            <option > Mt. Bross</option>
            <option > Mt. Cameron</option>
            <option > Mt. Columbia</option>
            <option > Mt. Democrat</option>
            <option > Mt.Elbert</option>
            <option > Mt. Eolus</option>
            <option > Mt. Evans</option>
            <option > Mt. Harvard</option>
            <option > Mt. Lincoln</option>
            <option > Mt. Lindsey</option>
            <option > Mt. Massive</option>
            <option > Mt. of the Holy Cross</option>
            <option > Mt. Oxford</option>
            <option > Mt. Princeton</option>
            <option > Mt. Shavano</option>
            <option > Mt. Sherman</option>
            <option > Mt. Sneffels</option>
            <option > Mt. Wilson</option>
            <option > Mt. Yale</option>
            <option > North Eolus</option>
            <option > Noth Maroon Peak</option>
            <option > Pikes Peak</option>
            <option > Pyramid Peak</option>
            <option > Quandry Peak</option>
            <option > Redcloud Peak</option>
            <option > San Luis Peak</option>
            <option > Snowmass Mountain</option>
            <option > Sunlight Peak</option>
            <option > Sunshine Peak</option>
            <option > Tabeguache Peak</option>
            <option > Torreys Peak</option>
            <option > Uncompahgre Peak</option>
            <option > Watterhorn Peak</option>
            <option > Wilson Peak</option>
            <option > Windom Peak</option>

        </select>
        <button type="submit">Submit</button>
      </form>
      <MountainDogs/>
    </div>
  );
}




  