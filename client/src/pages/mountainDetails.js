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
<div >
    <h1> {mountainDetails.name} </h1>
    <div className= "details">
        <h3> Range: {mountainDetails.range} <br/> Elevation: {mountainDetails.elevation}<br/> {mountainDetails.coordinates}<br/> {mountainDetails.description}</h3>
    <   img className = "mountPic" src = {mountainDetails.image}/>
    </div>
  
       
</div>
)
}

export default MountainDetails