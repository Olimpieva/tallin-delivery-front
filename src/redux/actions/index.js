import api from "../../utils/Api";
import { CLEAR_ORDER, CREATE_ORDER, FAILURE, GET_ORDER_BY_ID, LOGIN, LOGOUT, REQUEST, RESET_ERROR, SUCCESS } from "./actionTypes";
import handleError from "./errorHandler";

export const setLoggedIn = () => ({ type: LOGIN + SUCCESS });

export const checkToken = () => async (dispatch, getState) => {

    const { loading } = getState();

    dispatch({ type: LOGIN + REQUEST });

    if (loading) {
        return;
    }

    try {
        const orders = await api.getAllOrders();
        dispatch(setLoggedIn());
        console.log({ orders });
    } catch (error) {
        dispatch({ type: LOGIN + FAILURE });
    };
};

export const login = (userData) => async (dispatch, getState) => {

    const { loading } = getState();

    dispatch({ type: LOGIN + REQUEST });

    if (loading) {
        return;
    };

    try {
        const token = await api.login(userData);
        localStorage.setItem('jwt', token);
        dispatch(setLoggedIn());
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
        dispatch({ type: CREATE_ORDER + SUCCESS, payload: newOrder });
    } catch (error) {
        dispatch(handleError({ errorCode: error.status || 500, action: CREATE_ORDER }));
    };
};

export const getOrderById = (orderData) => async (dispatch, getState) => {
    const { loading } = getState();

    if (loading) {
        return;
    };

    dispatch({ type: GET_ORDER_BY_ID + REQUEST });

    try {
        const order = await api.getOrderById(orderData);
        dispatch({ type: GET_ORDER_BY_ID + SUCCESS, payload: order });
    } catch (error) {
        dispatch(handleError({ errorCode: 404, action: GET_ORDER_BY_ID }));
    };
};

export const resetOrder = () => ({ type: CLEAR_ORDER });

export const resetError = () => ({ type: RESET_ERROR });


