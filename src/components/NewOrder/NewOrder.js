import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, getOrders } from '../../redux/actions';
import handleError from '../../redux/actions/errorHandler';
import { currentUserSelector } from '../../redux/selectors';
import api from '../../utils/Api';

import Header from '../Header/Header';
import NotificationPopup from '../NotificationPopup/NotificationPopup';

import './NewOrder.css';

const initialState = {
    name: '',
    phone: '',
    comment: '',
};

function NewOrder(props) {

    const dispatch = useDispatch();
    const { jwt } = useSelector(currentUserSelector);
    const [order, setOrder] = useState(initialState);
    const [newOrderId, setNewOrderId] = useState(null)

    const handleCreateOrder = (event) => {
        console.log('ya tut?')
        event.preventDefault();
        dispatch(createOrder({ order, jwt }));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setOrder((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleCreateOrder2 = async (event) => {
        event.preventDefault();
        let newOrder;

        try {
            newOrder = await api.createOrder({ order, jwt });
        } catch (error) {
            dispatch(handleError({ errorCode: error.status, action: 'create order' }))
        }

        setNewOrderId(newOrder.id);
    }


    const handleClosePopup = () => {
        setNewOrderId(null);
        setOrder(initialState);
    };

    const checkOrders = () => {
        return dispatch(getOrders({ jwt }));
    };

    return (
        <div className='new-order-page'>
            <Header />
            <main className='new-order'>
                <h2 className='new-order__title'>Создать заказ</h2>
                <form className='new-order__form' onSubmit={(event) => {
                    handleCreateOrder2(event)
                }}>
                    <input className="new-order__input" id="name"
                        type='text'
                        name='name'
                        placeholder='Имя'
                        minLength='2'
                        maxLength="12"
                        required
                        value={order.name}
                        onChange={handleInputChange}
                    />
                    <input className="new-order__input" id="phone"
                        type='tel'
                        name='phone'
                        placeholder='Телефон'
                        minLength='6'
                        maxLength="12"
                        required
                        value={order.phone}
                        onChange={handleInputChange}
                    />
                    <input className="new-order__input" id="comment"
                        type='text'
                        name='comment'
                        placeholder='Комментарий'
                        maxLength="20"
                        value={order.comment}
                        onChange={handleInputChange}
                    />
                    <button className='new-order__button' type='submit'>Заказать</button>
                </form>
                <button onClick={checkOrders}>Check Orders</button>
                <NotificationPopup newOrderId={newOrderId} onClose={handleClosePopup} />
            </main>
        </div>

    );
};

export default NewOrder;