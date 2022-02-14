import { LinearProgress } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner/Banner';
import Custompagination from '../components/Custompagination/Custompagination';
import Genres from '../components/Genres/Genres';
import SingleContent from '../components/SingleContent/SingleContent';
import { TvSeriesData } from '../config/api';
import { img_backDrop, unavailableLandscape } from '../config/config';
import useGenre from '../hooks/useGenres';
import './TvSeries.css'
import { motion ,AnimatePresence } from 'framer-motion'
function TvSeries() {
    const [genres,setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [page,setPage] = useState(1);
    const [content , setContent] = useState(null);
    const [numberOfPage , setNumerOfPage] = useState();
    const genresForURL = useGenre(selectedGenres);
    const [bannerImg,setBannerImg] = useState(null);

    function randomNum(n){
        return Math.floor(Math.random() * n-1);
    }

    async function fetchTvSeries(){
        const { data } = await axios.get(TvSeriesData(page,genresForURL))
        setContent(data.results);
        setBannerImg(data.results[randomNum(data.results.length-1)]?.backdrop_path);
        setNumerOfPage(data.total_pages);
    }
    useEffect(()=>{
        window.scroll(0,0);
        console.log(genresForURL);
        fetchTvSeries();
    },[page,genresForURL])

    if(!!!content && !!!bannerImg)
        return <LinearProgress style={{backgroundColor : 'greenyellow', marginTop:'60px'}}/>
    return (
        <div className="tv-series-page">
            <Banner pageTitle='Discover Series' bannerImg={bannerImg ? `${img_backDrop}/${bannerImg}` : unavailableLandscape}/>
            <Genres
                type="tv"
                genres={genres}
                setGenres={setGenres}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                setPage={setPage}
            />
            <motion.div layout className="tv-series">
            {content && content.map((item,key)=>(
                    <AnimatePresence>
                        <SingleContent
                            key={item.id}
                            id={item.id}
                            type = "tv"
                            title={item.title || item.name || item.original_title}
                            poster = {item.poster_path}
                            backdrop = {item.backdrop_path}
                            date = {item.first_air_date || item.release_date}
                            vote = {item.vote_average}
                        />
                    </AnimatePresence>
                ))}
            </motion.div>
            <Custompagination setPage={setPage} numberOfPage={numberOfPage}/>
        </div>
    )
}

export default TvSeries
