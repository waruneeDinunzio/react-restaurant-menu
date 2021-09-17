import React, { useState, useEffect} from 'react';
import axios from 'axios'
import '../App.css'

const Testimonials = () => {
  const [foodsURL, setFoodsURL] = useState('')
  
  useEffect(()=> {
  // get url using axios
  axios.get('https://api.edamam.com/api/recipes/v2?type=public&q=tofu&app_id=695c6d0d&app_key=e2ff1ff754b66b08aea4cbc4366d8f3d')
  .then(response=>setFoodsURL(response.data.hits[1].recipe.image))
  .catch(error => console.log(error))
}, [])
   
    return (
        <div>
            THIS IS THE BEST!!
            <img src={foodsURL} alt= "picture"/> 
        </div>
    );
};

export default Testimonials;