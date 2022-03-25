import React, { useState } from 'react';

import Header from '../Header/Header';

import './NewOrder.css';

const initialState = {
    name: '',
    phone: '',
    company: '',
};

function NewOrder(props) {

    const [orderData, setOrderData] = useState(initialState);

    const handleCreateOrder = (event) => {
        event.preventDefault();
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setOrderData((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <div className='new-order-page'>
            <Header />
            <main className='new-order'>
                <h2 className='new-order__title'>Создать заказ</h2>
                <form className='new-order__form' onSubmit={handleCreateOrder}>
                    <input className="new-order__input" id="name"
                        type='text'
                        name='name'
                        placeholder='Имя'
                        minLength='2'
                        maxLength="30"
                        required
                        value={orderData.name}
                        onChange={handleInputChange}
                    />
                    <input className="new-order__input" id="phone"
                        type='tel'
                        name='phone'
                        placeholder='Телефон'
                        minLength='8'
                        maxLength="30"
                        required
                        value={orderData.phone}
                        onChange={handleInputChange}
                    />
                    <input className="new-order__input" id="comment"
                        type='text'
                        name='comment'
                        placeholder='Комментарий'
                        maxLength="100"
                        required
                        value={orderData.comment}
                        onChange={handleInputChange}
                    />
                    <button className='new-order__button' type='submit'>Заказать</button>
                </form>
            </main>
        </div>

    );
};

export default NewOrder;