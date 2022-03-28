import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOrderById } from '../../redux/actions';
import { currentUserSelector } from '../../redux/selectors';

import Popup from '../Popup/Popup';

import './OrderSearchPopup.css';

function OrderSearchPopup({ isOpened, onClose }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { jwt } = useSelector(currentUserSelector);
    const [orderId, setOrderId] = useState(null);

    const handleInputChange = (event) => {
        setOrderId(event.target.value);
    };

    console.log({ orderId })
    console.log({ orderId, jwt })

    const handleOrderSearch = (event) => {
        event.preventDefault();
        dispatch(getOrderById({ orderId, jwt }));
        console.log('Ya doshel')
        onClose();
        navigate('/order');
    };

    return (
        <Popup isOpened={isOpened} onClose={onClose}>
            <form className='order-search-popup__form' onSubmit={handleOrderSearch}>
                <fieldset className='order-search-popup__fieldset'>
                    <label className='order-search-popup__label'>Введите номер заказа</label>
                    <input className='order-search-popup__input'
                        type='number'
                        name='id'
                        required
                        value={orderId || ''}
                        onChange={handleInputChange}
                    />
                </fieldset>
                <button className='order-search-popup__button' type='submit'>Отслеживание</button>
            </form>
        </Popup>
    );
};

export default OrderSearchPopup;