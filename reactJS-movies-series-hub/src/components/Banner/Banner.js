import React from 'react'
import './Banner.css'
import { motion } from 'framer-motion'
function Banner({pageTitle,bannerImg}) {
    return (
        <motion.div 
            animate={{opacity : 1}}
            transition={{delay:0.3}}
            initial={{opacity : 0}}
            exit = {{opacity : 0}}
        className="banner"
            style={{
                backgroundImage:`url(${bannerImg})`,
                backgroundPosition:'center 0px',
                backgroundSize: 'cover',
                boxShadow:'rgb(24 26 26) 0px 6px 8px 1px',
                borderBottomLeftRadius:'12px',
                borderBottomRightRadius:'12px',
                marginTop:'60px',
            }}
        >
            <span className="page-title">{pageTitle}</span>
        </motion.div>
    )
}

export default Banner
