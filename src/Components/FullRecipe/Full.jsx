import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';


const Full = ({handleCook}) => {
    const [recipe,setRecipe]=useState([])
    useEffect(()=>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setRecipe(data.recipes))
    },[])
    return (
        <div className=''>
            <h1>Recipe : {recipe.length}</h1>
          {
            recipe.map(recipe => <Recipe recipe={recipe} handleCook={handleCook}></Recipe>)
          }
        </div>
    );
};

export default Full;