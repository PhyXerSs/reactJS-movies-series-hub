import { Chip } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react'
import { GenresData } from '../../config/api'
import './Genres.css'
function Genres({
    type,genres,setGenres,selectedGenres,setSelectedGenres,setPage
}) {

    async function fetchGenres(){
        const {data} =await axios.get(GenresData(type));
        setGenres(data.genres);
    }

    useEffect(()=>{
        fetchGenres();
        return()=>{
            setGenres({});
        }
    },[])

    function handleAdd(genre){
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g)=> g.id !== genre.id));
        setPage(1);
    }
    function handleRemove(genre){
        setSelectedGenres(selectedGenres.filter((selected)=>selected.id !==genre.id));
        let newGenres = [...genres,genre]
        let newNameGenres = newGenres.map((genre)=>genre.name)
        newNameGenres.sort()
        
        let genresSortByName = []
        newNameGenres.forEach((nameGenre)=>{
            newGenres.forEach((genre)=>{
                if(nameGenre === genre.name){
                    genresSortByName.push(genre)
                }
            })
        })
        setGenres(genresSortByName);
        
        
        setPage(1);
    }

    return (
        <div className="genres">
            {selectedGenres.map((item)=>(
                <Chip 
                    label={item.name}
                    key={item.id}
                    clickable
                    size="small"
                    color="secondary"
                    style={{margin:2}}
                    onDelete={()=>handleRemove(item)}
                />
            ))}
            {genres.map((item)=>(
                <Chip
                    label={item.name}
                    key={item.id}
                    clickable
                    size="small"
                    color="primary"
                    style={{
                        margin:2,
                    }}
                    onClick={()=>handleAdd(item)}
                />
            ))}
        </div>
    )
}

export default Genres
