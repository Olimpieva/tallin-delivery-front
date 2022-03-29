import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentOrderSelector } from '../../redux/selectors';
import Preloader from '../Preloader/Preloader';

import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';

import './OrderDetails.css';
import { orderStatus } from '../../utils/constants';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../redux/actions';

function OrderDetails(props) {

    const { id: orderId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderById({ orderId }));
    }, [orderId, dispatch]);

    const { order, loading, error } = useSelector(currentOrderSelector);

    return (
        <div className='order-details-page'>
            {
                loading ?
                    <Preloader />
                    :
                    order ?
                        <>
                            <Header />
                            <main className='order-details'>
                                <input className='order-details__input'></input>
                                <div className='order-details__content'>
                                    <ul className='order-details__order-list order-list'>
                                        <li className='order-list__item'>
                                            <h3 className='order-list__title'>Имя</h3>
                                            <span className='order-list__description'>{order.customerName}</span>
                                        </li>
                                        <li className='order-list__item'>
                                            <h3 className='order-list__title'>Телефон</h3>
                                            <span className='order-list__description'>{order.customerPhone}</span>
                                        </li>
                                        <li className='order-list__item'>
                                            <h3 className='order-list__title'>Комментарий</h3>
                                            <span className='order-list__description'>{order.comment}</span>
                                        </li>
                                    </ul>
                                    <ul className='order-details__status-list status-list'>
                                        <li className='status-list__item'>
                                            <span className={`status-list__status ${order.status === orderStatus.OPEN && 'status-list__status_active'}`}>OPEN</span>
                                            <h3 className={`status-list__description ${order.status === orderStatus.OPEN && 'status-list__description_active'}`}>Заказ создан</h3>
                                        </li>
                                        <div className='status-list__line'></div>
                                        <li className='status-list__item'>
                                            <span className={`status-list__status ${order.status === orderStatus.ACCEPTED && 'status-list__status_active'}`}>ACCEPTED</span>
                                            <h3 className={`status-list__description ${order.status === orderStatus.ACCEPTED && 'status-list__description_active'}`}>Заказ принят курьером</h3>
                                        </li>
                                        <div className='status-list__line'></div>
                                        <li className='status-list__item'>
                                            <span className={`status-list__status ${order.status === orderStatus.INPROGRESS && 'status-list__status_active'}`}>INPROGRESS</span>
                                            <h3 className={`status-list__description ${order.status === orderStatus.INPROGRESS && 'status-list__description_active'}`}>Заказ доставляется</h3>
                                        </li>
                                        <div className='status-list__line'></div>
                                        <li className='status-list__item'>
                                            <span className={`status-list__status ${order.status === orderStatus.DELIVERED && 'status-list__status_active'}`}>DELIVERED</span>
                                            <h3 className={`status-list__description ${order.status === orderStatus.DELIVERED && 'status-list__description_active'}`}>Заказ завершён</h3>
                                        </li>
                                    </ul>
                                </div>
                            </main>
                        </>
                        :
                        <NotFound title={error?.title} message={error?.message} />
            }
        </div>
    );
};

export default OrderDetails;