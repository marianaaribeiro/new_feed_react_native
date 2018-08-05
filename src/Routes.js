import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Feed from './components/Feed';


export default props => (
    <Router navigationBarStyle={{backgroundColor:'#000'}} titleStyle={{color: '#fff'}}>
    
        <Scene key='Feed' component={Feed} title='Feed' hideNavBar={true}/>

    </Router>
);