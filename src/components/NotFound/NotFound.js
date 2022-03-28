import React, { useState } from 'react';

import { ReactComponent as NotFoundImage } from '../../images/order-not-found.svg';
import Header from '../Header/Header';

import './NotFound.css';

function NotFound(props) {

    return (
        <div className='not-found-page'>
            <Header />
            <main className='not-found'>
                <div>Order Not Found</div>
                <NotFoundImage />
            </main>
        </div>
    );
};

export default NotFound;