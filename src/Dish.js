import React from 'react'
import biriyani from './Assets/biriyani.jpg';
import './Styles/DishImage.css'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from './Assets/IndianChef1.jpg';
import img2 from './Assets/womanchef.jpg'
import img3 from './Assets/RecipeBook.jpg'
import Circlegrid from './Circlegrid';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


export default function Dish() {
    const foodId = useParams();
    const [food, setFood] = useState({})
    console.log(foodId)
    useEffect(() => {
        const cuisine = localStorage.getItem('cuisine')
        const foodApi = `http://localhost:8080/api/v1/${cuisine}cuisine/getFood/${foodId.id}`;
        console.log(foodId)
        const fetchFood = async () => 
        {
            try{
                const response = await axios.get(foodApi);
                const item = response.data;
                console.log(item);
                setFood(item);
            }
            catch(error)
            {
                console.error("Can't fetch food");
            }
        };

        fetchFood();
    },[])

  return (
    <div>

    <div class="md:container md:mx-auto " style={{marginTop:'5%', width: '1000px', height: '500px' }}>
    <img src={biriyani} style={{height:'100%', width:'50%', left:'-10%' }} className='float-right'/>
    <p className='text-style' style={{paddingLeft:'40px', paddingTop:'40px'}}>{food.foodName}</p>
    <p className='text-name' style={{paddingLeft:'40px', paddingTop:'-10px'}}>Ichurike</p>
    <p className='text-reviews' style={{paddingLeft:'40px', paddingTop:'20px'}}>{food.foodStars}</p>
    <div style={{paddingTop:"20px"}}>
    
    <span style={{ paddingLeft: '40px', fontSize: '15px',  }}>Ingredients</span>
    <span style={{ paddingLeft: '50px', fontSize: '15px',}}>Calories</span>
    <span style={{ paddingLeft: '70px', fontSize: '15px' }}>Duration</span>
    <br></br>

    <span className='food-content' style={{ paddingLeft: '57px',paddingRight:'55px' , borderRight: '1px solid #000' }}>5</span>
    <span className='food-content' style={{ paddingLeft: '38px',paddingRight:'35px', borderRight: '1px solid #000' }}>55</span>
    <span className='food-content' style={{ paddingLeft: '43px' }}>55</span>
    <br></br>
    <p className='text-reviews' style={{paddingLeft:'40px', paddingTop:'20px'}}>
        <Link to={`/cooking/${foodId.id}`}>Link To Extra Information</Link>
    </p>
</div>

</div>


    <div className="border-t border-gray-300 my-10" style={{marginTop:'3%', marginLeft:'18%', width:'1000px'}}></div>

    <div className="md:container md:mx-auto" style={{ marginTop: '5%', width: '1000px', height: '500px', display: 'flex' }}>
    <img src={img1} style={{ height: '500px', width: '50%', paddingRight: '50px' }} className='float-left' />
    <h2 className='text-style' style={{marginLeft:'5%',paddingTop:'50px', paddingLeft:'20px'}}>Ingredients</h2>
    
    <ul style={{marginTop:'13%', marginLeft:'-47%',}}>
         <li className='ingredients-text'>{food.ingredient1}</li>
         <li className='ingredients-text'>{food.ingredient2}</li>
         <li className='ingredients-text'>{food.ingredient3}</li>
         <li className='ingredients-text'>{food.ingredient4}</li>
         <li className='ingredients-text'>{food.ingredient5}</li>
         <li className='ingredients-text'>{food.ingredient6}</li>
    </ul>
</div>

<div className="border-t border-gray-300 my-10" style={{marginTop:'3%', marginLeft:'18%', width:'1000px'}}></div>

 

    </div>  
  )
}