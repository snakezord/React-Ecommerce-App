import React from 'react'
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    return (
        // We have access to history because menu-item component
        // is a HOC made by withRouter()
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);