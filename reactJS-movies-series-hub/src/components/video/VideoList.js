import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { VideoData } from '../../config/api';
import "./VideoList.css"

function VideoList({id,type}) {
    
    const [content , setContent] = useState([]);

    async function fetchVideo(){
        const {data} = await axios.get(VideoData(type,id));
        console.log(data);
        setContent(data.results);
    }


    useEffect(()=>{
        fetchVideo();
    },[])

    return (
        <div className="video-list">
            {content &&content.map((item,key)=>(
                <Video key={key} item={item}/>
            ))}
        </div>
    )
}

export default VideoList


function Video({item}){
    const iframeRef = useRef();

    useEffect(()=>{
        const height = iframeRef.current.offsetWidth * 9 / 16 +'px';
        iframeRef.current.setAttribute('height' , height);
    },[])

    return(
        <div className="video">
            <div className="video-title">
                <h2>{item.name}</h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
    );
}


