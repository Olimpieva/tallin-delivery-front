import React from 'react';

import './Popup.css';

function Popup(props) {

    const { isOpened, onClose } = props;

    return (
        <div className={`popup ${isOpened && 'popup_opened'}`}>
            <div className='popup__container'>
                <button className='popup__button-close' type='button' onClick={onClose}>&times;</button>
                {props.children}
            </div>
        </div>
    );
};

export default Popup;