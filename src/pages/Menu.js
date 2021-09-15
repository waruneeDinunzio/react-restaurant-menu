import React from 'react';
import { useState } from 'react';
import foods from '../data';
import Categories from './Categories';
const allCategories = ['all', ...new Set(foods.map((food)=> food.category))]

const Menu = ({foods},{setMenuItems}) => {
  const [categories, setCategories] = useState([allCategories]);
  
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(foods);
      return;
    }
    const newFoods = foods.filter((food) => food.category === category);
    setMenuItems(newFoods);
  };
    console.log({foods})

    // const [menuItem, setMenuItems] = useState(foods);
    // const [categories, setCategories] = useState([]);
    // console.log()
//     const filterFoods = (category) => {
//         if (category === 'all') {
//          return setMenuItems(foods)
//         }
    
//     const newFoods = foods.filter((food)=> food.category === category)
//     setMenuItems(newFoods)
// console.log(menuItem.menu.id)

    return (
        <div>
        <h2>OUR MENU</h2>
        <Categories categories={categories} filterItems={filterItems} />
        {foods.map((menuItem) => {
        //const { id, title, img, desc, price } = menuItem;
        const id= menuItem.id
        const title = menuItem.title
        const {img} = menuItem
        const {desc} = menuItem
        const {price} = menuItem
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