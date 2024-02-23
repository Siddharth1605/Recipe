import React from 'react'
import img1 from './Assets/meals.jpg';
import Navbar from './Navbar';
import { Container, Box } from '@mui/material';
import { MdMenuBook } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import i1 from './Assets/mainfood1.jpg'
import col from './Assets/collagefoods.jpg'
import { FaPlay } from "react-icons/fa6";
import video from './Assets/cooking.mp4'
import { Link } from 'react-router-dom';
export default function Landing() {
  return (
    <>
    <Navbar />
    <Container style={{height:"450px"}}>
    
      <p className='text-5xl font-bold pt-10 pl-3' style={{display:'inline-bloack', width:'400px'}}>Find Your Best Cooking Recipes Here!</p>

      <Link to="/recipes">
      <p className='p-2' style={{border:'2px solid black', borderRadius:'30px', display:'inline-block', marginLeft:'15px', marginTop:'40px'}}>Learn More</p>
      </Link>
      <p className='p-2 flex' style={{border:'2px solid black', borderRadius:'30px', display:'inline-flex', alignItems: 'center', marginLeft:'15px', marginTop:'40px'}}> <FaPlay style={{marginRight: '5px'}} /> Watch Demo</p>

      <div>
        
        <p className='p-2 mt-10' style={{border:'2px solid black', borderRadius:'50px', display:'inline-block', marginLeft:'5%'}}>
          <MdMenuBook style={{fontSize:'50'}} />
        </p>
        <p className='p-2 mt-5' style={{border:'2px solid black', borderRadius:'50px', display:'inline-block', marginLeft:'10%'}}>
          <GiKnifeFork style={{fontSize:'50'}}/>
        </p>

      </div>
      

      <div className='mt-1'>
        <p className='text-lg font-medium' style={{marginLeft:'2%'}}> Over 100+ Recipes</p>
        <p className='text-lg font-medium' style={{marginTop:'-2.2%', marginLeft:'19%'}}>Cooking Tips</p>
      </div>
      <div className='mt-1'>
      <p className='text-xs' style={{marginLeft:'2%', display:'inline-block', width:'150px'}}>Recipes from all around the world</p>
      <p className='text-xs' style={{marginTop:'-2.2%', marginLeft:'4%',display:'inline-block', width:'120px'}}>To help you improve your cooking skills</p>
    </div>
      <img src={i1} style={{marginLeft:'40%', height:'300px', width:'300px', borderRadius:'50%', marginTop:'-28%' }}/>

    </Container>
    <div className="border-t border-gray-400 my-10" style={{marginTop:'5%',paddingBottom:'5%', marginLeft:'12%', width:'900px'}}></div>

    <Container style={{height:"450px", marginTop:'5%'}}>
    <p className='text-3xl font-bold' style={{display:'inline-bloack', width:'500px', paddingLeft:'12%'}}>Best Recipes <br></br> from around the world</p>
    <p className='text-xl' style={{display:'inline-block', width:'500px', paddingLeft:'12%', paddingTop:'1%'}}>The recipes are written from the place where it comes to maintain the authenticity of the food</p>

    <img src={col} style={{height:'400px', marginTop:'-20%', marginLeft:'50%', borderRadius:'10px'}}/>


    </Container>
    </>
  )
}
