import { LOGIN, LOGOUT, } from "../actions/actionTypes";

const initialState = {
    jwt: null,
};

const user = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN:
            return { ...state, jwt: action.payload };
        case LOGOUT:
            return { ...state, jwt: null }
        default:
            return state;
    };
};

export default user;