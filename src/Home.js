import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import DishImages from './DishImages';
import biriyani from './Assets/biriyani.jpg';
import { useEffect } from 'react';
import axios from "axios";

export default function Home( ) {
  const [value, setValue] =  useState(0);
  const [indianFoodItems, setIndianFoodItems] = useState([])
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    if(newValue === 0)
      localStorage.setItem('cuisine', 'indian');
    else if(newValue === 1)
      localStorage.setItem('cuisine', 'chinese');
    else if(newValue === 2)
      localStorage.setItem('cuisine', 'mexican')

      console.log(localStorage.getItem('cuisine'))
  };
  useEffect(() => {
    const api = `http://localhost:8080/api/v1/indiancuisine/get`;
    const fetchIndianFoods = async () => {
      try{
          const response = await axios.get(api);
          const foods = response.data;
          //console.log(foods);
          setIndianFoodItems(foods);
      } catch(error)
      {
        console.error("Can't fetch indianfoods", error)
      }
    };

    fetchIndianFoods();
  },[])

  const mexicanFoodItems = [
    {
      foodId: 'm1',
      foodName: 'Tacos',
      foodImage: biriyani,
      foodStars: 4.2,
      ingredients: ['Tortillas', 'Beef', 'Cheese', 'Lettuce', 'Tomatoes'],
      nutrients: { protein: '15g', carbs: '30g', fat: '12g' },
    },
    {
      foodId: 'm2',
      foodName: 'Guacamole',
      foodImage: biriyani,
      foodStars: 4.7,
      ingredients: ['Avocado', 'Tomato', 'Onion', 'Lime', 'Cilantro'],
      nutrients: { protein: '2g', carbs: '10g', fat: '8g' },
    },
    {
      foodId: 'm3',
      foodName: 'Enchiladas',
      foodImage: biriyani,
      foodStars: 4.4,
      ingredients: ['Tortillas', 'Chicken', 'Sauce', 'Cheese', 'Black Beans'],
      nutrients: { protein: '18g', carbs: '25g', fat: '15g' },
    },
  ];
  
  const chineseFoodItems = [
    {
      foodId: 'c1',
      foodName: 'Sweet and Sour Chicken',
      foodImage: biriyani,
      foodStars: 4.5,
      ingredients: ['Chicken', 'Pineapple', 'Bell Peppers', 'Soy Sauce', 'Vinegar'],
      nutrients: { protein: '18g', carbs: '25g', fat: '10g' },
    },
    {
      foodId: 'c2',
      foodName: 'Dim Sum',
      foodImage: biriyani,
      foodStars: 4.6,
      ingredients: ['Dumplings', 'Soy Sauce', 'Ginger', 'Green Onions', 'Sesame Oil'],
      nutrients: { protein: '12g', carbs: '20g', fat: '8g' },
    },
    {
      foodId: 'c3',
      foodName: 'Kung Pao Shrimp',
      foodImage: biriyani,
      foodStars: 4.3,
      ingredients: ['Shrimp', 'Vegetables', 'Spices', 'Peanuts', 'Soy Sauce'],
      nutrients: { protein: '20g', carbs: '15g', fat: '12g' },
    },
  ];


  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered sx={{paddingTop:'10%' ,padding:'1%'}}>
        <Tab label="Indian" />
        <Tab label="Chinese" />
        <Tab label="Mexican" />
      </Tabs>
      {value === 0 && (
        <DishImages/>  
      )}
      {value === 1 && (
        <DishImages/>  

      )}
      {value === 2 && (
        <DishImages/>  
      )}
    </Box>
  );
}