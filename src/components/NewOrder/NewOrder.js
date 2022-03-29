import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { checkToken, createOrder, resetOrder } from '../../redux/actions';
import { newOrderSelector } from '../../redux/selectors';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import Header from '../Header/Header';
import NotificationPopup from '../NotificationPopup/NotificationPopup';

import './NewOrder.css';

const initialOrderState = {
    name: '',
    phone: '',
    comment: '',
};

function NewOrder(props) {

    const dispatch = useDispatch();
    const { order: newOrderFromApi, error } = useSelector(newOrderSelector);
    const [newOrder, setNewOrder] = useState(initialOrderState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewOrder((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleCreateOrder = async (event) => {
        event.preventDefault();
        dispatch(createOrder(newOrder));
    };

    const handleClosePopup = () => {
        setNewOrder(initialOrderState);
        dispatch(resetOrder());
    };

    const checkOrders = () => {
        return dispatch(checkToken());
    };

    return (
        <div className='new-order-page'>
            <Header />
            <main className='new-order'>
                <h2 className='new-order__title'>Создать заказ</h2>
                <form className='new-order__form' onSubmit={(event) => {
                    handleCreateOrder(event)
                }}>
                    <input className="new-order__input" id="name"
                        type='text'
                        name='name'
                        placeholder='Имя'
                        minLength='2'
                        maxLength="12"
                        required
                        value={newOrder.name}
                        onChange={handleInputChange}
                    />
                    <input className="new-order__input" id="phone"
                        type='tel'
                        name='phone'
                        placeholder='Телефон'
                        minLength='6'
                        maxLength="12"
                        required
                        value={newOrder.phone}
                        onChange={handleInputChange}
                    />
                    <input className="new-order__input" id="comment"
                        type='text'
                        name='comment'
                        placeholder='Комментарий'
                        maxLength="20"
                        value={newOrder.comment}
                        onChange={handleInputChange}
                    />
                    <button className='new-order__button' type='submit'>Заказать</button>
                </form>
                <button onClick={checkOrders}>Check Orders</button>
                <NotificationPopup newOrderId={newOrderFromApi?.id} onClose={handleClosePopup} />
                <ErrorPopup message={error} />
            </main>
        </div>
    );
};

export default NewOrder;