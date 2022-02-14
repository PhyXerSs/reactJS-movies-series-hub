import { LinearProgress } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner/Banner';
import Custompagination from '../components/Custompagination/Custompagination';
import SingleContent from '../components/SingleContent/SingleContent';
import { TrendingData } from '../config/api';
import { img_backDrop, unavailableLandscape } from '../config/config';
import './Trending.css';
import { motion ,AnimatePresence } from 'framer-motion'

function Trending() {
    const [page,setPage] = useState(1);
    const [content,setContent] = useState(null);
    const [bannerImg,setBannerImg] = useState(null)

    function randomNum(n){
        return Math.floor(Math.random() * n-1);
    }

    async function fetchTrending(){
        const { data } = await axios.get(TrendingData(page));
        setContent(data.results);
        setBannerImg(data.results[randomNum(data.results.length-1)]?.backdrop_path);
    }
    useEffect(()=>{
        window.scroll(0, 0);
        fetchTrending();
    },[page])
    
    if(!!!content && !!!bannerImg)
        return <LinearProgress style={{backgroundColor : 'greenyellow', marginTop:'60px'}}/>
    return (
        <div className="trending-page">
            <Banner pageTitle='Trending Today' bannerImg={bannerImg ? `${img_backDrop}/${bannerImg}` : unavailableLandscape}/>
            <motion.div layout className="trending">
                {content && content.map((item,key)=>(
                    <AnimatePresence>
                        <SingleContent
                            key={item.id}
                            id={item.id}
                            type = {item.media_type}
                            title={item.title || item.name || item.original_title}
                            poster = {item.poster_path}
                            backdrop = {item.backdrop_path}
                            date = {item.first_air_date || item.release_date}
                            vote = {item.vote_average}
                        />
                    </AnimatePresence>
                ))}
            </motion.div>
            <Custompagination setPage={setPage}/>
        </div>

    )
}

export default Trending
