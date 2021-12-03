import React from 'react'
import './Banner.css'
function Banner({pageTitle,bannerImg}) {
    return (
        <div className="banner"
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
        </div>
    )
}

export default Banner
