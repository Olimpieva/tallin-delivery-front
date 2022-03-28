import { combineReducers } from "redux";
import user from "./user";
import order from "./order";
import error from "./error";

export default combineReducers({
    user,
    order,
    error,
});