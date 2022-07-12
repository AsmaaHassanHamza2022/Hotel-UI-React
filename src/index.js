import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter } from 'react-router-dom';

import {AuthProvider} from '../src/Context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <BrowserRouter>
       <AuthProvider>
           <App/>
       </AuthProvider>
   </BrowserRouter>
 
);
