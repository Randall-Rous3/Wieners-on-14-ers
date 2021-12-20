import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MountainCard from '../components/MountainCard';







   



const MountainDetails = (props) => {
  let mountainsArray = [];
  const [mountainDetails, setMountainDetails] = useState(mountainsArray);


  const getMountains = async () => {
    const response = await axios.get(`http://localhost:3001/api/mountains/`);
    setMountainDetails(response.data.mountains);
  };

  useEffect(() => {
    getMountains();
  }, []);


return (
<div>
    <h1>{mountainDetails.name}</h1>
</div>
)
}

export default MountainDetails