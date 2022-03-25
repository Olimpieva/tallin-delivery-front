import api from "../../utils/Api";
import { LOGIN, RESET_REQUEST_ERROR } from "./actionTypes";
import handleError from "./errorHandler";

export const userAuth = (userData) => async dispatch => {

    try {
        const token = await api.login(userData);
        dispatch({ type: LOGIN, payload: token });
    } catch (error) {
        console.log({ error })
        dispatch(handleError({ errorCode: error.status || 500, action: LOGIN }))
    };
};

export const resetError = () => {
    console.log('Ya tut')
    console.log({ type: RESET_REQUEST_ERROR })
    return ({ type: RESET_REQUEST_ERROR })
};
