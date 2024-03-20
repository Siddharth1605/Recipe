import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import DishImages from './DishImages';
import biriyani from '../Assets/biriyani.jpg';
import { useEffect } from 'react';
import axios from "axios";

export default function Home( ) {
  const [value, setValue] =  useState(0);
  const [searchQuery, setSearchQuery] = useState([]);

   
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
    localStorage.setItem('cuisine', 'indian');
  },[])

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
    <Tabs value={value} onChange={handleChange} centered sx={{ paddingTop: '10%', padding: '1%' }}>
      <Tab label="Indian" />
      <Tab label="Chinese" />
      <Tab label="Mexican" />
    </Tabs>
    <DishImages searchQuery={searchQuery} />
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value.split(','))}
      placeholder="Search..."
      style={{ marginTop: '10px', marginLeft: '20px' }}
    />
  </Box>

  );
}