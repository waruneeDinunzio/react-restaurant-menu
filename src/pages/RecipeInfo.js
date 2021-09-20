import React from 'react';

const RecipeInfo = ({recipes}) => {
    //console.log(recipe)
    return (
        <div>
          {recipes.map((recipe, index) => {
            
            return (
              <div>
                <h2>{recipe.recipe.label}</h2>
                <img src={recipe.recipe.image} alt= "picture"/>
              </div>
            );
          })}
        </div>
      );
};

export default RecipeInfo;