import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import "../sass/app.scss"

import App from './app'


const store = configureStore();
//Le noeud parent
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
   <Provider store={store} >
      
      <App />
   </Provider>, MOUNT_NODE
)