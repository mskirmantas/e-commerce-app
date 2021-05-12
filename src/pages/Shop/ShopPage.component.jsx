import React from 'react';

import SHOP_DATA from './Shop.data';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component'

class ShopPage extends React.Component {

    constructor(){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }
    render(){

        // destructuring state object
        const {collections} = this.state;

        return(
            <div className="ShopPage">
               {
                   collections.map(({ id, ...otherCollectionProps })=> (
                       <CollectionPreview key={id} {...otherCollectionProps} />
                   ))
               }
            </div>
        )
    }
}

export default ShopPage;