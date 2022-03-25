import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, getOrders } from '../../redux/actions';
import { currentUserSelector } from '../../redux/selectors';

import Header from '../Header/Header';

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

    const handleCreateOrder = (event) => {
        event.preventDefault();
        dispatch(createOrder({ order, jwt }));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setOrder((prevState) => ({ ...prevState, [name]: value }));
    };

    const getOrders = (event) => {
        event.preventDefault();
        dispatch(getOrders({ jwt }));
    }

    return (
        <div className='new-order-page'>
            <Header />
            <main className='new-order'>
                <h2 className='new-order__title'>Создать заказ</h2>
                <form className='new-order__form' onSubmit={(event) => {
                    console.log('Ya tut??????')
                    handleCreateOrder(event)
                }}>
                    <input className="new-order__input" id="name"
                        type='text'
                        name='name'
                        placeholder='Имя'
                        minLength='2'
                        maxLength="30"
                        required
                        value={order.name}
                        onChange={handleInputChange}
                    />
                    <input className="new-order__input" id="phone"
                        type='tel'
                        name='phone'
                        placeholder='Телефон'
                        minLength='8'
                        maxLength="30"
                        required
                        value={order.phone}
                        onChange={handleInputChange}
                    />
                    <input className="new-order__input" id="comment"
                        type='text'
                        name='comment'
                        placeholder='Комментарий'
                        maxLength="100"
                        required
                        value={order.comment}
                        onChange={handleInputChange}
                    />
                    <button className='new-order__button' type='submit'>Заказать</button>
                </form>
                <button onClick={getOrders}>Check Orders</button>
            </main>
        </div>

    );
};

export default NewOrder;