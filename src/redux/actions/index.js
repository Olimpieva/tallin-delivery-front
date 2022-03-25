import api from "../../utils/Api";
import { LOGIN, LOGOUT, RESET_REQUEST_ERROR } from "./actionTypes";
import handleError from "./errorHandler";

export const login = (userData) => async dispatch => {

    try {
        const token = await api.login(userData);
        localStorage.setItem('token', token);
        dispatch({ type: LOGIN, payload: token });
    } catch (error) {
        dispatch(handleError({ errorCode: error.status || 500, action: LOGIN }));
    };
};

export const logout = () => {
    localStorage.clear();
    return { type: LOGOUT };
}

export const resetError = () => ({ type: RESET_REQUEST_ERROR });
