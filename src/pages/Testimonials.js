import React, { useState, useEffect} from 'react';
import RecipeInfo from './RecipeInfo';
import axios from 'axios'
import '../App.css'


const Testimonials = () => {
  const [foodsURL, setFoodsURL] = useState('')
  const [recipeData, setRecipeData] = useState([])
  const [baseUrl, setBaseUrl] = useState('https://api.edamam.com/')
  const [api, setApi] = useState('api/recipes/v2?type=public&q=')
  const [app_id, setApp_id] = useState('&app_id=695c6d0d')
  const [app_ket, setApp_key] = useState('&app_key=e2ff1ff754b66b08aea4cbc4366d8f3d')
  const [searchUrl, setSearchUrl] = useState('')

  async function fetchData () {
    axios.get(baseUrl+api+searchUrl+app_id+app_ket)
      //.then(response=>setFoodsURL(response.data.hits[1].recipe.image))
      .then(response=>setRecipeData(response.data.hits))
      //.then(response=>console.log(response.data.hits))
      .catch(error => console.log(error))
      
  }

  useEffect(()=> {
   fetchData()   
  // get url using axios
  //axios.get('https://api.edamam.com/api/recipes/v2?type=public&q=tofu&app_id=695c6d0d&app_key=e2ff1ff754b66b08aea4cbc4366d8f3d')
  //axios.get(baseUrl+api+searchUrl+app_id+app_ket)
  //.then(response=>setFoodsURL(response.data.hits[1].recipe.image))
  //.then(response=>console.log(response.data.hits))
  //.then(console.log(setFoodsURL))
  //.catch(error => console.log(error))

}, [])

    const handleChange = (e) => {
    setSearchUrl(e.target.value)
    //console.log(foodsURL)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        fetchData()
        //console.log("you just submit search")
        setSearchUrl('')
    }

    return (
        <div>
            
        <h1 id="header" >Hungy for more!!</h1>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" id="label">Search for more healthy foods:</label>
          <input type="text" id="title" value={searchUrl} onChange={handleChange}/>
          <button type="submit">Submit</button>
        </form>
        <RecipeInfo recipe= {recipeData} />
      
        </div>
    );
};

export default Testimonials;