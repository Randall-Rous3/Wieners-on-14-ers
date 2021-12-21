import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MountainCard from '../components/MountainCard';







   



const MountainDetails = (props) => {
  let detailsArray = [];
  const [mountainDetails, setMountainDetails] = useState(detailsArray);

console.log(props)
  const getDetails = async (mountain) => {
      console.log(mountain)
    const response = await axios.get(`http://localhost:3001/api/mountains/${props.match.params.mountainId}`);
    console.log(response.data.mountain)
    setMountainDetails(response.data.mountain);
  };
  
console.log(mountainDetails.mountain)
  useEffect(() => {
    getDetails();
  }, []);


return (
<div className= "details">
    <h1> {mountainDetails.name} </h1>
    <h3> Location: {mountainDetails.location} <br/> Elevation: {mountainDetails.elevation}</h3>
    <img className = "img" src = {mountainDetails.image}/>

  
       
</div>
)
}

export default MountainDetails