import { Tab, Tabs} from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Custompagination from '../components/Custompagination/Custompagination';
import SingleContent from '../components/SingleContent/SingleContent';
import { SearchMedia } from '../config/api';
import './Search.css'
function Search() {
    const [searchText,setSearchText] = useState('');
    const [content,setContent] = useState(null);
    const [page,setPage] = useState(1);
    const [numberOfPage, setNumberOfPage] = useState();
    const [type, setType] = useState(0);

    async function fetchSearchMedia(){
        const {data} = await axios.get(SearchMedia(type,searchText,page));
        setContent(data.results);
        setNumberOfPage(data.total_pages);
    }
    useEffect(()=>{
        window.scroll(0,0);
        fetchSearchMedia();
    },[page,type])

    return (
        <div className="search-page">
            <div className="container-top">
                <div className="search-container">
                    <input
                        type="text"
                        className="search-box"
                        id="search-box"
                        placeholder="search"
                        value={searchText}
                        onKeyUp={(e)=>{
                            if(e.key ==="Enter")
                                fetchSearchMedia();
                        }}
                        onChange={(evt)=>setSearchText(evt.target.value)}
                    />
                    <div className="search-button" onClick={fetchSearchMedia} >
                        Search
                    </div>
                </div>
                <Tabs
                    value={type}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={(event, newValue) => {
                        setType(newValue);
                        setPage(1);
                    }}
                    style={{ paddingBottom: 5 }}
                    // aria-label="disabled tabs example"
                    >
                    <Tab style={{ width: "50%" }} label="Search Movies" />
                    <Tab style={{ width: "50%" }} label="Search TV Series" />
                </Tabs>
            </div>

            <div className="movie-series">
                {content && content.map((item,key)=>(
                    <SingleContent
                        key={item.id}
                        id={item.id}
                        type = {type ? 'tv' : 'movie'}
                        title={item.title || item.name || item.original_title}
                        poster = {item.poster_path}
                        backdrop = {item.backdrop_path}
                        date = {item.first_air_date || item.release_date}
                        vote = {item.vote_average}
                    />
                ))}
            </div>
            { numberOfPage > 1 && 
                <Custompagination setPage={setPage} numberOfPage={numberOfPage}/>
            }
        </div>
    )
}

export default Search
