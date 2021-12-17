import React, { useEffect, useState } from 'react';
import axios from 'axios';







   



const Mountains = (props) => {
  let mountainsArray = [];
  const [mountain, setMountains] = useState(mountainsArray);
  const showMountains = (mountain) => {};


  const getAllMountains = async () => {
    const response = await axios.get('http://localhost:3001/api/mountains');
    setMountains(response.data.rides);
  };

  useEffect(() => {
    getAllMountains();
  }, []);




  return (
    <div className="ride-grid">
      <h1>Show All Mountains</h1>
        {mountain.map((mountain) => (
        <div className="ride-card"> 
            <img style={{ display: 'block' }} src={mountain.image} />
            <h3>{mountain.name} <br/> </h3>

        </div>
      ))} 
    </div>
  );
  
} 

export default Mountains