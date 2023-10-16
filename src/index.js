import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './pages/Signup';
import Scheduleadd from './pages/Scheduleadd';
import Academic from './pages/Academic';
import calenderTest from './pages/calenderTest';
import Career from './pages/Career';
import Portfolio from './pages/Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portfolio/> 
  </React.StrictMode>
);

reportWebVitals();
