import React, { useState } from 'react';

import { ReactComponent as MainLogo } from '../../images/logo/main-logo.svg';

import './Header.css';
import { Link } from 'react-router-dom';

const initialState = {
    training: false,
    title: true,
    buttons: false
}

function Header(props) {

    const [isElementShown, setIsElementShown] = useState(initialState);

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
                <Link to="/signin" title="Выход из аккаунта" className="header__button_exit" />
            </div>
        </div>
    );
}

export default Header;