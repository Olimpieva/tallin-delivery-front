import React, { useCallback, useState } from 'react';

import { ReactComponent as MainLogo } from '../../images/logo/main-logo.svg';

import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions';

const initialState = {
    training: false,
    title: true,
    buttons: true
}

function Header(props) {

    const { pathname } = useLocation();

    const [isElementShown, setIsElementShown] = useState(initialState);

    const dispatch = useDispatch();

    const exitButtonClickHandler = () => {
        dispatch(logout());
    };

    return (
        <div className="header">
            <div className='logo_main'>
                {isElementShown.title && <MainLogo className='logo_main__image' />}
                <span className={`logo_main__text ${isElementShown.training && 'logo_main__text_shown'}`}>Тренажёр</span>
            </div>
            <h1 className='title'>
                Tallin
                <span className='title_highlight'> Delivery</span>
            </h1>
            <div className={`header__buttons ${isElementShown.buttons && 'header__buttons_shown'}`}>
                <button className='header__button_check-order'>Статус</button>
                <Link to="/signin" title="Выход из аккаунта" className="header__button_exit" onClick={exitButtonClickHandler} />
            </div>
        </div>
    );
}

export default Header;