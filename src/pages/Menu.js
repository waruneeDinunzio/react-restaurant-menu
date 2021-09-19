import React from 'react';
import { useState } from 'react';
import foodList from '../data';
import Categories from './Categories';
const allCategories = ['all', ...new Set(foodList.map((food)=> food.category))]

const Menu = ({foods,setMenuItems}) => {
  const [categories, setCategories] = useState([allCategories]);
  
  const filterItems = (category) => {
    
     if (category === 'all') {
      setMenuItems(foodList);
      return
     }
    
   const newFoods = foodList.filter((food) => food.category === category);
    setMenuItems(newFoods);
  };
   
    return (
        <div>
        <h2>OUR MENU</h2>
        <Categories categories={categories} filterFoods={filterItems} />
        {foods.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        {/* line 40 come from this:
        const id= menuItem.id
        const title = menuItem.title
        const {img} = menuItem
        const {desc} = menuItem
        const {price} = menuItem */}

        return (
            <div key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>

          </div>
        ) 
        }
        )}
        
        </div>
    );

}
        

export default Menu;