import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

hydrateRoot(document.getElementById('root'), 
<BrowserRouter>
  <App />
</BrowserRouter>);
