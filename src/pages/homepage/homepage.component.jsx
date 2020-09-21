import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'

// Its a functional component because we don't really need any lifecycle methods at this point,
// not do we to store any state
const HomePage = () => {
    return (
      <div className="homepage">
        <Directory />
      </div>
    )
}

export default HomePage;