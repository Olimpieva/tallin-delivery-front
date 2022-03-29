import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { checkToken } from '../../redux/actions';
import { currentUserSelector } from '../../redux/selectors';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Login from '../Login/Login';
import NewOrder from '../NewOrder/NewOrder';
import NotFound from '../NotFound/NotFound';
import OrderDetails from '../OrderDetails/OrderDetails';
import Preloader from '../Preloader/Preloader';

import './App.css';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(currentUserSelector);

  console.log({ 111: user })

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      dispatch(checkToken());
    }

  }, [dispatch]);

  return (
    <div className="app">
      {
        user.loading ?
          <div className='app__preloader'>
            <Preloader />
          </div>
          :
          <Routes>
            <Route element={<ProtectedRoute loggedIn={user.loggedIn} />} >
              <Route path="/" element={<NewOrder />} />
              <Route path="/order/:id" element={<OrderDetails />} />
            </Route>
            <Route path="/signin" element={user.loggedIn ? <Navigate replace to="/" /> : <Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      }

    </div>
  );
}

export default App;
