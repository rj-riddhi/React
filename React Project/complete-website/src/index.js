import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

var element = document.getElementById('root');
var root = createRoot(element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
