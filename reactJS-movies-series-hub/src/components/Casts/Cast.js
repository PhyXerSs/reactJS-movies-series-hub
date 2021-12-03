import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { CreditsData } from '../../config/api';
import { img_300, noPicture } from '../../config/config';
import './Cast.css'
function Cast({id,type}) {

    const [credits,setCredits] = useState([]);

    async function fetchCasts(){
        const {data} = await axios.get(CreditsData(type,id));
        setCredits(data.cast);
    }
    useEffect(()=>{
        fetchCasts();
    },[])

    const responsive = {
        0: {
          items: 2,
        },
        512: {
          items: 4,
        },
        1023: {
          items: 7,
        },
    };

    const items = credits.map((cast,key)=>(
        <div className="carouseItem">
            <img 
                key={key}
                src={cast.profile_path ? `${img_300}/${cast.profile_path}` : noPicture}
                alt={cast?.name}
                onDragStart = {(evt)=>evt.preventDefault()}
            />
            <b>{cast.name || cast.original_name}</b>

        </div>
    ))

    return (
        
            <AliceCarousel
                mouseTracking
                infinite
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                items={items}
                autoPlay
            />
       
    )
}

export default Cast
