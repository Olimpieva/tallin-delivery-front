import { SET_REQUEST_ERROR, RESET_REQUEST_ERROR } from "../actions/actionTypes";

const initialState = { message: '' };

const error = (state = initialState, action) => {

    switch (action.type) {
        case SET_REQUEST_ERROR:
            return { ...state, message: action.payload };
        case RESET_REQUEST_ERROR:
            console.log({ action })
            return initialState;
        default:
            return state;
    };
};

export default error;