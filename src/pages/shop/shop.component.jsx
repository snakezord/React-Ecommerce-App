import React from 'react'
import { Route } from 'react-router-dom'

import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import { firestore, convertCollectionSnapShotToMap } from '../../firebase/firebase.utils.js'

import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions.js'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {    
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')

        collectionRef.onSnapshot(snapshot => {
            const collectionsMap = convertCollectionSnapShotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({loading: false})
        })
    }
    render() {
        const { match } = this.props
        const { loading } = this.state
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={() => <CollectionsOverviewWithSpinner isLoading={loading} /> } />
                <Route path={`${match.path}/:collectionId`} render={() => <CollectionPageWithSpinner isLoading={loading} /> } />
            </div>
        )
    }  
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);