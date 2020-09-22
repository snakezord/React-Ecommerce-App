import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
import DIRECTORY_DATA from './directory.data'

// This one will need to be a class component 
// because we do need to store the state value
// of those menu item that we wanna pass and create menu item with 
class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: DIRECTORY_DATA
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => {
                        return <MenuItem key={id} {...otherSectionProps}/> 
                    })
                }
            </div>
        )
    }
}

export default Directory;