import React from 'react';
import foods from '../data';
import { useState } from 'react';
import Categories from './Categories';
const allCategories = ['all', ...new Set(foods.map((food)=> food.category))]

const Menu = () => {
    const [menuItem, setMenuItems] = useState(foods);
    const [categories, setCategories] = useState(allCategories);
const filterFoods = (category) => {
    if (category === 'all') {
        return setMenuItems(foods)
    }
}
    const newFoods = foods.filter((food)=> food.category === category)
    return setMenuItems(newFoods)

    return (
        <div>
           {foods.map((menuItem)=>{
               const {id, title, img, desc, price} = menuItem;
               return (
                   <div>
                       <h2>{title}</h2>
                   </div>
               )
           })} 
        </div>
    );
};

export default Menu;