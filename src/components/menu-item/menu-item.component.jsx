import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size}) => {
    return (
        <div className={`${size} menu-item`}>
            {/* We separate this div from everything else
                because we want to increase the size only of that specific div.
            */}
            <div 
            className='background-image' 
            style={{backgroundImage: `url(${imageUrl})`}}                 
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;