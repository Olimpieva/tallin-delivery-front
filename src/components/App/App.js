import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { setAuthToken } from '../../redux/actions';
import { currentUserSelector } from '../../redux/selectors';

import Login from '../Login/Login';
import NewOrder from '../NewOrder/NewOrder';

import './App.css';

function App() {

  const dispatch = useDispatch();
  const token = useSelector(currentUserSelector);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      dispatch(setAuthToken(jwt));
    };

  }, [dispatch]);

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
