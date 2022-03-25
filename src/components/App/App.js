import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Login from '../Login/Login';
import NewOrder from '../NewOrder/NewOrder';

import './App.css';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<NewOrder />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<div>Not Found Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
