import React from 'react'
import './homepage.styles.scss'


// Its a functional component because we don't really need any lifecycle methods at this point,
// not do we to store any state
const HomePage = () => {
    return (
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">SNEAKERS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">WOMEN'S</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">MANS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HomePage;