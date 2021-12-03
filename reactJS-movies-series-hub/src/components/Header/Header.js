import { AppBar, Button, Container, Typography } from '@material-ui/core'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import './Header.css'
function Header() {
    const [showAppBar ,setShowAppBar] = useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 70){
                setShowAppBar(false);
            }else setShowAppBar(true);
        })
        return ()=>{
            window.removeEventListener('scroll',()=>{
                if(window.scrollY > 70){
                    setShowAppBar(false);
                }else setShowAppBar(true);
            })
        }
    },[])

    return (
        <div
            className={`appbar ${showAppBar ? 'show-appbar' : 'hide-appbar'}`}
        >
            <div className="container">
                <Button className="header-button" onClick={()=>navigate('/')}>
                    <WhatshotIcon className="icon"/>
                    <p className="title">Trending</p>
                </Button>
                <Button className="header-button" onClick={()=>navigate('/movies')}>
                    <MovieIcon/>
                    <p className="title">Movies</p>
                </Button>
                <Button className="header-button" onClick={()=>navigate('/series')}>
                    <TvIcon/>
                    <p className="title">TV Series</p>
                </Button>
                <Button className="header-button" onClick={()=>navigate('/search')}>
                    <SearchIcon/>
                    <p className="title">Search</p>
                </Button>
            </div>
        </div>
    )
}

export default Header
