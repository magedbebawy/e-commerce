import React from 'react'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import { Route, Switch } from "react-router-dom";
import CollectionPage from '../collection/collection.component';

    const ShopPage =({match}) =>{
        return(
            <div className='shop-page'>
                <Switch>
                    <Route exact path={`${match.path}`} component={CollectionOverview}/>
                    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
                </Switch>
                
            </div>
        )
    }


export default ShopPage