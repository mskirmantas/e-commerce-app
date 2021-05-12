import React from 'react';

import './CollectionItem.styles.scss'

const CollectionItem = ({
    id,
    name,
    price,
    imageUrl
}) => (
    <div className="CollectionItem">
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>

        </div>

    </div>

)

export default CollectionItem;