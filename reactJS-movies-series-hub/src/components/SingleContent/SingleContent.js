import { Badge } from '@material-ui/core'
import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { img_300, noPicture } from '../../config/config'
import './SingleContent.css'
import { motion } from 'framer-motion'

function SingleContent({id,type,title,poster,date,vote}) {
    const navigate = useNavigate();
    return (
        <motion.div layout
            animate={{opacity : 1}}
            initial={{opacity : 0}}
            exit = {{opacity : 0}}
        className="single-content" 
            onClick={()=>{
                navigate(`/details/${type}/${id}`)
            }}
        >
            <Badge
                className="badge"
                badgeContent={vote}
                color={vote > 6 ? 'primary' : 'secondary'}
            />
            <img
                src={poster ? `${img_300}/${poster}` : noPicture}
            />
            <div className="detail">
                <b className="detail-title">{title}</b>
                <div className="detail-bottom">
                    <p className="media-type">{type}</p>
                    <p className="date">{date}</p>
                </div>
            </div>
            
        </motion.div>
    )
}

export default SingleContent
