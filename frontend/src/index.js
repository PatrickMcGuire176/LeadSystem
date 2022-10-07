import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login'
import ContactList from './Pages/ContactList'

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
          <Route path='/ContactList' element={<ContactList />} />
      </Routes>
  </BrowserRouter>
);

reportWebVitals();