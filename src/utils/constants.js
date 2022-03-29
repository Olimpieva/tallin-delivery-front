export const MAIN_URL = 'http://51.250.14.76:8080';

export const requestErrorMessages = {
    serverError: () => 'Произошла ошибка на сервере. Попробуйте повторить запрос позднее.',
    invalidAuthUserData: () => 'Incorrect credentials',
    orderNotFound: () => ({ title: 'Заказ не найден', message: 'Проверьте номер отслеживания' }),
    otherError: ({ errorCode, action }) => `Ой! Во время запроса ${action} произошла ошибка ${errorCode}`,
};

export const orderStatus = {
    OPEN: 'OPEN',
    ACCEPTED: 'ACCEPTED',
    INPROGRESS: 'INPROGRESS',
    DELIVERED: 'DELIVERED'
};

export const validationErrorMessages = {
    valueMissing: () => 'Поле должно быть заполнено.',
    tooShort: ({ minLength }) => `Поле должно содержать минимум ${minLength} символ${minLength < 5 ? `а` : `ов`}`,
    patternMismatch: () => 'Поле заполнено некорректно.',
    typeMismatch: () => 'Поле заполнено некорректно.'
};