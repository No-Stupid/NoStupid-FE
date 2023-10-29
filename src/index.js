import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './pages/Signup';
import Scheduleadd from './pages/Scheduleadd';
import Academic from './pages/Academic';
import Career from './pages/Career';
import Portfolio from './pages/Portfolio';
import ReactDatePicker from 'react-datepicker';
import Profile from './pages/ProFile';
import Mypage from './pages/Mypage';
import Todo from './pages/Todo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todo/> 
  </React.StrictMode>
);

reportWebVitals();
