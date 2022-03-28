import { SET_REQUEST_ERROR } from "./actionTypes";
import { requestErrorMessages } from "../../utils/constants";

const handleError = ({ errorCode, action }) => {

    switch (errorCode) {
        case 401:
            return requestErrorMessages.invalidAuthUserData();
        case 500:
            return requestErrorMessages.serverError();
        default:
            return requestErrorMessages.otherError({ errorCode, action });
    };
};

export default handleError;
