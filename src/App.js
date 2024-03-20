import React from 'react';
import biriyani from './Assets/biriyani.jpg';
import {Routes,Route} from 'react-router-dom';
import RecipeVideo from './Components/RecipeVideo';
import Home from './Components/Home';
import Landing from './Components/Landing';
import Dish from './Components/Dish';
import Dummy from './Components/Dummy';
export default function App() {
  return (
    <div className="App" style={{backgroundColor:'#100F0F'}}>
    <Routes>
    <Route path="/dummy" element={<Dummy />} />
    <Route path="/" element={<Landing />} />
    <Route path="/recipes" element={<Home />} />
    <Route path="/dish/:id" element={<Dish />} />
    <Route path="/cooking/:id" element={<RecipeVideo />} />
    </Routes>
    </div>

  );
}