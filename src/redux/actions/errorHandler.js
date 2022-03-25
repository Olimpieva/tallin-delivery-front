import { SET_REQUEST_ERROR } from "./actionTypes";
import { requestErrorMessages } from "../../utils/constants";

const handleError = ({ errorCode, action }) => {

    console.log({ errorCode })

    return {
        type: SET_REQUEST_ERROR,
        payload: (() => {
            switch (errorCode) {
                case 401:
                    return requestErrorMessages.invalidAuthUserData();
                case 500:
                    return requestErrorMessages.serverError();
                default:
                    requestErrorMessages.otherError({ errorCode, action })
            }
        })(),
    };
};

export default handleError;
