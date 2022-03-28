import api from "../../utils/Api";
import { CREATE_ORDER, FAILURE, GET_ORDER_BY_ID, LOGIN, LOGOUT, REQUEST, RESET_REQUEST_ERROR, SUCCESS } from "./actionTypes";
import handleError from "./errorHandler";

export const setAuthToken = (token) => ({ type: LOGIN, payload: token });

export const login = (userData) => async dispatch => {

    try {
        const token = await api.login(userData);
        localStorage.setItem('jwt', token);
        dispatch(setAuthToken(token));
    } catch (error) {
        dispatch(handleError({ errorCode: error.status || 500, action: LOGIN }));
    };
};

export const logout = () => {
    localStorage.clear();
    return { type: LOGOUT };
};

export const createOrder = (orderData) => async dispatch => {

    console.log({ orderData })

    try {
        const newOrder = await api.createOrder(orderData);
        console.log({ newOrder });
    } catch (error) {
        dispatch(handleError({ errorCode: error.status || 500, action: CREATE_ORDER }));
    };
};

export const getOrderById = (orderData) => async (dispatch, getState) => {
    const { loading } = getState();

    if (loading) {
        return;
    }

    dispatch({ type: GET_ORDER_BY_ID + REQUEST });

    try {
        const order = await api.getOrderById(orderData);
        console.log({ 'after api': order });
        dispatch({ type: GET_ORDER_BY_ID + SUCCESS, payload: order });
    } catch (error) {
        dispatch({
            type: GET_ORDER_BY_ID + FAILURE,
            payload: handleError({ errorCode: error.status || 500, action: GET_ORDER_BY_ID })
        })
    };
};

export const resetError = () => ({ type: RESET_REQUEST_ERROR });

export const getOrders = (token) => async dispatch => {
    console.log(token)

    try {
        const orders = await api.getOrders(token);
        console.log({ orders });
    } catch (error) {
        console.log(error);
    };
};
