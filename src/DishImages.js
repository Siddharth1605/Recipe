import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import biriyani from './Assets/biriyani.jpg'
import './Styles/DishImage.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DishImages() {
  //console.log(itemData)

  const [itemData, setItemData] = useState([])

  useEffect(() => {
    const cuisine = localStorage.getItem('cuisine')
    console.log(cuisine)
    const api = `http://localhost:8080/api/v1/${cuisine}cuisine/get`
    const fetchFoods = async () => {
      try{
        const response  = await axios.get(api);
        const foods = response.data;
        setItemData(foods);
      }
      catch(error)
      {
        console.error(`Cannot fetch ${cuisine} foods`, error)
      }
    }

    fetchFoods();
  }, [])

  return (
    <div style={{ overflow: 'visible', marginTop: '1%', marginLeft: '20%'}}>
    <ImageList sx={{  overflow: 'visible' }} cols={3} >
    {itemData.map((item) => (
        <ImageListItem key={item.foodId} style={{ marginBottom: '20px' , width: '60%', height: 'auto' }} key={item.foodId}>
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

