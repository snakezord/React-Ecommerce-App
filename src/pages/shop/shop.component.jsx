import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

// Because we need to store the data related to our actual collections
// on our shop page, shop page is gonna be a class component
class ShopPage extends React.Component {
    constructor(props){
        // We need access to our state
        // Thats why we send props a params 
        super(props);
        
        this.state = {
            collections: SHOP_DATA
        }
    }
    render(){
        const {collections} = this.state
        return (
        <div className='shop-page'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
        )
    }
}

export default ShopPage;