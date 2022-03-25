import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';

import './App.css';

function App() {

  const dispatch = useDispatch()

  return (
    <div className="App">
      App
      <Routes>
        <Route path="/" element={<div>Main Page</div>} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<div>Not Found Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
