import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createOrder, resetOrder } from '../../redux/actions';
import { newOrderSelector } from '../../redux/selectors';
import { useValidation } from '../../utils/useValidation';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import FormError from '../FormError/FormError';
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
    const { values: { name, phone, comment }, errors, isFormValid, handleChange, resetForm } = useValidation({
        values: initialOrderState,
        isFormValid: true
    });

    const handleCreateOrder = async (event) => {
        event.preventDefault();
        dispatch(createOrder({ name, phone, comment }));
    };

    const handleClosePopup = () => {
        dispatch(resetOrder());
        resetForm(initialOrderState);
    };

    return (
        <div className='new-order-page'>
            <Header />
            <main className='new-order'>
                <h2 className='new-order__title'>Создать заказ</h2>
                <form className='new-order__form' onSubmit={handleCreateOrder}>
                    <fieldset className='new-order__fieldset fieldset'>
                        <input className="new-order__input" id="name"
                            type='text'
                            name='name'
                            placeholder='Имя'
                            minLength='2'
                            maxLength="12"
                            required
                            value={name}
                            onChange={handleChange}
                        />
                        <FormError essage={errors.name} />
                    </fieldset>

                    <fieldset className='new-order__fieldset fieldset'>
                        <input className="new-order__input" id="phone"
                            type='tel'
                            name='phone'
                            placeholder='Телефон'
                            minLength='6'
                            maxLength="12"
                            required
                            value={phone}
                            onChange={handleChange}
                        />
                        <FormError message={errors.phone} />
                    </fieldset>

                    <fieldset className='new-order__fieldset fieldset'>
                        <input className="new-order__input" id="comment"
                            type='text'
                            name='comment'
                            placeholder='Комментарий'
                            maxLength="20"
                            value={comment}
                            onChange={handleChange}
                        />
                    </fieldset>

                    <button className='new-order__button' type='submit' disabled={!isFormValid}>Заказать</button>
                </form>
                <NotificationPopup newOrderId={newOrderFromApi?.id} onClose={handleClosePopup} />
                <ErrorPopup message={error} />
            </main>
        </div>
    );
};

export default NewOrder;