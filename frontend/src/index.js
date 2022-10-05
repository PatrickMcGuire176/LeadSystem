import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />  
    </BrowserRouter>
);

root.render(
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />} />            
      </Routes>
  </BrowserRouter>
);

reportWebVitals();