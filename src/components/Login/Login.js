import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, userAuth } from '../../redux/actions';
import { currentUserSelector, errorSelector } from '../../redux/selectors';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

import Header from '../Header/Header';

import './Login.css';

const initialState = { username: "", password: "" };

function Login(props) {
    const dispatch = useDispatch();

    const [userData, setUserData] = useState(initialState);

    const currentUser = useSelector(currentUserSelector);
    const error = useSelector(errorSelector);

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUserData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleLogin = (event) => {
        event.preventDefault();
        dispatch(login(userData));
    };

    return (
        <div className='login-page'>
            <Header />
            <main className="login">
                <form className='login__form' onSubmit={handleLogin}>
                    <input className="login__input" id="username"
                        type='text'
                        name='username'
                        placeholder='login'
                        minLength='2'
                        maxLength="30"
                        required
                        value={userData.username}
                        onChange={handleInputChange}
                    />
                    <input className="login__input" id="password"
                        type='password'
                        name='password'
                        placeholder='password'
                        minLength='8'
                        maxLength="30"
                        required
                        value={userData.password}
                        onChange={handleInputChange}
                    />
                    <button className='login__button' type='submit'>Sign In</button>
                </form>
                <ErrorPopup message={error.message} />
            </main>
        </div>

    );
};

export default Login;