import { combineReducers } from "redux";
import user from "./user";
import currentOrder from "./currentOrder";
import newOrder from "./newOrder";

export default combineReducers({
    user,
    currentOrder,
    newOrder,
});