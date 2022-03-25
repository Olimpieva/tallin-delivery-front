import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuth } from '../../redux/actions';
import { currentUserSelector, errorSelector } from '../../redux/selectors';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

import Header from '../Header/Header';

import './Login.css';

const initialState = { username: "", password: "" };

function Login(props) {
    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState(initialState);

    const currentUser = useSelector(currentUserSelector);
    const error = useSelector(errorSelector);

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setLoginData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleLogin = (event) => {
        event.preventDefault();
        dispatch(userAuth(loginData));
    };

    return (
        <div className='login-page'>
            <Header />
            <main className="login-page__content">
                <form className='login-page__form' onSubmit={handleLogin}>
                    <input className="input-field__input" id="username"
                        type='text'
                        name='username'
                        placeholder='login'
                        minLength='2'
                        maxLength="30"
                        required
                        value={loginData.username}
                        onChange={handleInputChange}
                    />
                    <input className="input-field__input" id="password"
                        type='password'
                        name='password'
                        placeholder='password'
                        minLength='8'
                        maxLength="30"
                        required
                        value={loginData.password}
                        onChange={handleInputChange}
                    />
                    <button className='login-page__button' type='submit'>Sign In</button>
                </form>
                <ErrorPopup message={error.message} />
            </main>
        </div>

    );
};

export default Login;