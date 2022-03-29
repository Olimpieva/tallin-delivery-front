import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../redux/actions';
import { currentUserSelector } from '../../redux/selectors';
import { useValidation } from '../../utils/useValidation';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import FormError from '../FormError/FormError';
import Header from '../Header/Header';

import './Login.css';

const initialState = { username: "", password: "" };

function Login(props) {

    const dispatch = useDispatch();
    const { error } = useSelector(currentUserSelector);
    const { values: { username, password }, errors, isFormValid, handleChange, resetForm } = useValidation({
        values: initialState,
        isFormValid: true
    });

    const handleLogin = async (event) => {
        event.preventDefault();
        dispatch(login({ username, password }));
        resetForm(initialState);
    };

    return (
        <div className='login-page'>
            <Header hideInfo />
            <main className="login">
                <form className='login__form form' onSubmit={handleLogin}>

                    <fieldset className='login__fieldset fieldset'>
                        <input className={`input login__input ${errors.username && 'input_invalid'}`} id="username"
                            type='text'
                            name='username'
                            placeholder='login'
                            minLength='2'
                            maxLength="30"
                            required
                            value={username}
                            onChange={handleChange}
                        />
                        <FormError message={errors.username} />
                    </fieldset>

                    <fieldset className='login__fieldset fieldset'>
                        <input className={`input login__input ${errors.password && 'input_invalid'}`} id="password"
                            type='password'
                            name='password'
                            placeholder='password'
                            minLength='8'
                            maxLength="30"
                            required
                            value={password}
                            onChange={handleChange}
                        />
                        <FormError message={errors.password} />
                    </fieldset>

                    <button className='button login__button' type='submit' disabled={!isFormValid}>Sign In</button>
                </form>
                <ErrorPopup message={error} />
            </main>
        </div>
    );
};

export default Login;