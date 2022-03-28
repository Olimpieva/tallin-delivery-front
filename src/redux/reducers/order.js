import { FAILURE, GET_ORDER_BY_ID, REQUEST, SUCCESS } from "../actions/actionTypes";

const initialState = {
    current: null,
    loading: false,
    error: null,
};

const user = (state = initialState, action) => {

    switch (action.type) {
        case GET_ORDER_BY_ID + REQUEST:
            return { ...state, loading: true, error: null }
        case GET_ORDER_BY_ID + SUCCESS:
            return { ...state, current: action.payload, loading: false, error: null };
        case GET_ORDER_BY_ID + FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    };
};

export default user;