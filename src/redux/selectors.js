export const currentUserSelector = state => {
    console.log({ state })
    return state.user
};
export const currentOrderSelector = state => state.currentOrder;
export const newOrderSelector = state => {
    console.log({ state })
    return state.newOrder
};