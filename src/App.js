import React from 'react';
import Home from './Home';
import biriyani from './Assets/biriyani.jpg';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dish from './Dish';
import Cooking from './Cooking';
import Landing from './Landing';
import Dummy from './Dummy';

export default function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/dummy" element={<Dummy />} />
    <Route path="/" element={<Landing />} />
    <Route path="/recipes" element={<Home />} />
    <Route path="/dish/:id" element={<Dish />} />
    <Route path="/cooking/:id" element={<Cooking />} />
    </Routes>
    </div>

  );
}