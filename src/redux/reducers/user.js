import { LOGIN, LOGOUT, } from "../actions/actionTypes";

const initialState = {
    token: null,
};

const user = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN:
            return { ...state, token: action.payload };
        case LOGOUT:
            return { ...state, token: null }
        default:
            return state;
    };
};

export default user;