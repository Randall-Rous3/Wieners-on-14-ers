import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MountainCard from '../components/MountainCard';







   



const Mountains = (props) => {
  let mountainsArray = [];
  const [mountains, setMountains] = useState(mountainsArray);
  const showMountains = (mountain) => {};


  const getMountains = async () => {
    const response = await axios.get('http://localhost:3001/api/mountains');
    setMountains(response.data.mountains);
  };

  useEffect(() => {
    getMountains();
  }, []);




  return (
    <div className="mountain-grid">
        {mountains.map((mountain) => (
        <MountainCard
        key={mountain.id}
        {...mountain}
        name = {mountain.name}
        image={mountain.image}
        id = {mountain._id}
        onClick= {()=>
            props.history.push(`/mountains/${mountain._id}`)
        }
        />
      ))} 
    </div>
  );
  
} 

export default Mountains