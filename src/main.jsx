import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import store from "./Store/store.js";
import {Provider} from 'react-redux';

import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
