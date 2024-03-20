import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import biriyani from '../Assets/biriyani.jpg';

export default function DishImages({ searchQuery }) {
  const [itemData, setItemData] = useState([]);
  const cuisine = localStorage.getItem('cuisine');

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/${cuisine}cuisine/get`);
        const foods = await response.data;
        setItemData(foods);
      } catch (error) {
        console.error(`Cannot fetch ${cuisine} foods`, error);
      }
    };

    fetchFoods();
  }, [cuisine]);

  let displayedItems = itemData;
  
  if(searchQuery && searchQuery.length > 0)
  {
    console.log(searchQuery)
    displayedItems = itemData.filter(item => 
      searchQuery.every(term => 
        Object.values(item).some(value => 
          typeof value === 'string' && value.toLowerCase().includes(term.toLowerCase())
          )
        )
      );
  }

  return (
    <div style={{ overflow: 'visible', marginTop: '1%', marginLeft: '20%' }}>
      <ImageList sx={{ overflow: 'visible' }} cols={3}>
        {displayedItems.map((item) => (
          <ImageListItem key={item.foodId} style={{ marginBottom: '20px', width: '60%', height: 'auto' }}  >
            <Link to={`/dish/${item.foodId}`}>
              <img
                src={biriyani}
                alt={item.foodName}
                loading="lazy"
              />
              <p className='font-sans text-xl font-semibold text-slate-400 hover:text-sky-400 '>{item.foodName}</p>
              <h4 className='text-base'>Stars: {item.foodStars} </h4>
            </Link>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
