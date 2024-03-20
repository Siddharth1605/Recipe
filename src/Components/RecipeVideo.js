import React from 'react'
import '../Styles/DishImage.css'
import img1 from '../Assets/womanchef.jpg';
import GifPlayer from '../Assets/cookinggif.gif';
import YouTube from 'react-youtube';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


export default function RecipeVideo() {
    const [videoid, setVideoId] = useState()
    const [food, setFood] = useState([])

    const foodId = useParams();

    const key = 'sidd9ba726c93msh3fbddb534c61fefp1fd975jsn2d20f4acba7b'
    const [img, setImg] = useState()
    useEffect( () => {
        const fetchData = async () =>
        {
            const options = {
                method: 'GET',
                url: 'https://youtube38.p.rapidapi.com/search/',
                params: {
                    q: 'chicken biriyani tamil',
                    h1: 'en',
                    g1: 'US'
                },
                headers: {
                    'X-RapidAPI-Key': key,
                    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
                }
                }

            try{
                const response = await axios.request(options);
                console.log(response.data.contents[0].video.videoId)
                setImg(response.data.contents[0].video.thumbnails[1].url)
                setVideoId(response.data.contents[0].video.videoId)
            }

            catch(error)
            {
                console.log(error)
            }

        };

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
    fetchData();
    }, [])
    const opts = {
        
        playerVars: {
          autoplay: 1,
        },
      };
    
      const onReady = (event) => {
        event.target.pauseVideo();
      };

    console.log(`img = ${img}` )
  return (
    <div>
        <div class="md:container md:mx-auto " style={{marginTop:'5%', width: '1000px', height: '400px' }}>
            <YouTube  videoId={videoid} opts={opts} style={{marginLeft:'20%', borderRadius:'20%', width:'60%', height:'60%'}} onReady={onReady} />
        </div>

        <div className="border-t border-gray-300 my-10" style={{marginTop:'3%', marginLeft:'18%', width:'1000px'}}></div>
            <div className="md:container md:mx-auto" style={{ marginTop: '5%', width: '1000px', height: '500px', display: 'flex' }}>
            <img src={img1} style={{ height: '500px', width: '50%', paddingRight: '50px' }} className='float-left' />
            <h2 className='text-style' style={{marginLeft:'5%',paddingTop:'50px', paddingLeft:'20px'}}>Nutrients</h2>
            <ul style={{marginTop:'13%', marginLeft:'-47%',}}>
            <li className='ingredients-text ' style={{ paddingBottom:'10px', paddingTop:"10px"}}><FontAwesomeIcon icon={faCirclePlus} size="sm" /><span style={{paddingLeft:'5px'}}>{food.nutrient1}</span></li>
            <li className='ingredients-text ' style={{ paddingBottom:'10px', paddingTop:"10px"}}><FontAwesomeIcon icon={faCirclePlus} size="sm" /><span style={{paddingLeft:'5px'}}>{food.nutrient2}</span></li>
            <li className='ingredients-text ' style={{ paddingBottom:'10px', paddingTop:"10px"}}><FontAwesomeIcon icon={faCirclePlus} size="sm" /><span style={{paddingLeft:'5px'}}>{food.nutrient3}</span></li>
            <li className='ingredients-text ' style={{ paddingBottom:'10px', paddingTop:"10px"}}><FontAwesomeIcon icon={faCirclePlus} size="sm" /><span style={{paddingLeft:'5px'}}>{food.nutrient4}</span></li>
            <li className='ingredients-text ' style={{ paddingBottom:'10px', paddingTop:"10px"}}><FontAwesomeIcon icon={faCirclePlus} size="sm" /><span style={{paddingLeft:'5px'}}>{food.nutrient5}</span></li>
            <li className='ingredients-text ' style={{ paddingBottom:'10px', paddingTop:"10px"}}><FontAwesomeIcon icon={faCirclePlus} size="sm" /><span style={{paddingLeft:'5px'}}>{food.nutrient6}</span></li>
    </ul>
            </div>
    </div>  
  )
}
