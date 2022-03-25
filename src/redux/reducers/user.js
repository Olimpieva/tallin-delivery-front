import { LOGIN, } from "../actions/actionTypes";

const initialState = {
    token: null,
};

const user = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN:
            return { ...state, token: action.payload };
        default:
            return state;
    };
};

export default user;