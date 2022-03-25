export const MAIN_URL = 'http://51.250.14.76:8080';

export const LOGIN = 'LOGIN';
export const REQUEST = '_REQUEST';
export const SUCCESS = '_SUCCESS';
export const FAILURE = '_FAILURE';

export const requestErrorMessages = {
    serverError: () => 'Internal server error. Try later.',
    invalidAuthUserData: () => 'Incorrect credentials',
    otherError: ({ errorCode, action }) => `Sorry, an error ${errorCode} occurred while ${action}`,
};