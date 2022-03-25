export const MAIN_URL = 'http://51.250.14.76:8080';

export const requestErrorMessages = {
    serverError: () => 'Internal server error. Try later.',
    invalidAuthUserData: () => 'Incorrect credentials',
    otherError: ({ errorCode, action }) => `Sorry, an error ${errorCode} occurred while ${action}`,
};