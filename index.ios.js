import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

const feed = props => (
  <App/>
)

AppRegistry.registerComponent('feed', () => feed);
