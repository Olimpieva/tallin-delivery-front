import React from 'react';
import { useDispatch } from 'react-redux';
import { resetError } from '../../redux/actions';

import './ErrorPopup.css';

function ErrorPopup({ message }) {
    const dispatch = useDispatch();

    const handleClosePopup = () => {
        dispatch(resetError());
    }

    return (
        <div className={`error-popup ${message && 'error-popup_opened'}`}>
            <div className='error-popup__container'>
                <button className='error-popup__button' type='button' onClick={handleClosePopup}>&times;</button>
                <span>{message}</span>
            </div>
        </div>
    );
};

export default ErrorPopup;