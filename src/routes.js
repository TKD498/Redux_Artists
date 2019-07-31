import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './components/Home'
import Artist from './components/Artist'

const Routes = ()=>{
    return(
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/artist/:id' exact component={Artist} />
        </Switch>
    )
}

export default Routes;