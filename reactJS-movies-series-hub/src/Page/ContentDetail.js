import { Chip, LinearProgress } from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Cast from '../components/Casts/Cast';
import VideoList from '../components/video/VideoList';
import { ContentDeta } from '../config/api';
import { img_500, img_backDrop, unavailableLandscape, unavailablePoster } from '../config/config';
import './ContentDetail.css'



function ContentDetail() {
    const { type, id } = useParams();
    const [bannerImg , setBannerImg] = useState(null);
    const [content, setContent] = useState(null);
    async function fetchData(){ 
        const {data}= await axios.get(ContentDeta(type,id));
        setBannerImg(data.backdrop_path || unavailableLandscape);
        setContent(data);
    }
    
    useEffect(()=>{
        document.getElementById("html").style.backgroundColor = "#111";
        document.getElementById("App").style.backgroundColor = "transparent";
        fetchData();
        return ()=>{
            document.getElementById("App").style.backgroundColor = "#272c2f";
            document.getElementById("html").style.backgroundColor = "#272c2f";
        }
    },[])

    if(!!!content && !!!bannerImg)
        return <LinearProgress style={{backgroundColor : 'greenyellow', marginTop:'60px'}}/>
    return (
        <>
            <div 
                className="content-detail"
                style={{
                    backgroundImage:`url(${img_backDrop}/${bannerImg})`
                }}
            ></div>
        <div className="content-container">
            {content && <div className="content">
                <div className="image-block">
                    {<img src={content.poster_path ? `${img_500}/${content.poster_path} ` : unavailablePoster }/>}
                </div>
                <div className="details-block">
                    <h1>{content.title || content.original_title || content.name || content.original_name}</h1>
                    <i>{content.tagline}</i>
                    <div className="chip-container">{content.genres.map((item,key)=>(
                        <Chip
                            className="chip-detail-page"
                            label={item.name}
                            key={item.id}
                            size="small"
                            style={{
                                margin:2,
                            }}
                        />
                    ))}
                    </div>
                    <div className="overview-container">
                        <p>{content.overview}</p>
                    </div>
                    
                    <Cast id={id} type={type} />
                </div>
                
            </div>}
            <div>
                <VideoList id={id} type={type}/>
            </div>
        </div>
        </>
        
        

    )
}

export default ContentDetail
