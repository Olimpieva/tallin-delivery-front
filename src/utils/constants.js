export const MAIN_URL = 'http://51.250.14.76:8080';

export const defaultOrderStatus = {
    OPEN: 'OPEN',
    ACCEPTED: 'ACCEPTED',
    INPROGRESS: 'INPROGRESS',
    DELIVERED: 'DELIVERED'
};

export const userFields = [{
    title: 'Имя',
    field: 'customerName'
}, {
    title: 'Телефон',
    field: 'customerPhone'
}, {
    title: 'Комментарий',
    field: 'comment'
}];

export const statusFields = [{
    name: 'OPEN',
    description: 'Заказ создан'
}, {
    name: 'ACCEPTED',
    description: 'Заказ принят курьером'
}, {
    name: 'INPROGRESS',
    description: 'Заказ доставляется'
}, {
    name: 'DELIVERED',
    description: 'Заказ завершён'
}];

export const requestErrorMessages = {
    serverError: () => 'Произошла ошибка на сервере. Попробуйте повторить запрос позднее.',
    invalidAuthUserData: () => 'Incorrect credentials',
    orderNotFound: () => ({ title: 'Заказ не найден', message: 'Проверьте номер отслеживания' }),
    otherError: ({ errorCode, action }) => `Ой! Во время запроса ${action} произошла ошибка ${errorCode}`,
};

export const validationErrorMessages = {
    valueMissing: () => 'Поле должно быть заполнено.',
    tooShort: ({ minLength }) => `Поле должно содержать минимум ${minLength} символ${minLength < 5 ? `а` : `ов`}`,
    patternMismatch: () => 'Поле заполнено некорректно.',
    typeMismatch: () => 'Поле заполнено некорректно.'
};