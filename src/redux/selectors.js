import { createSelector } from "reselect";

export const currentUserSelector = state => state.user;
export const errorSelector = state => state.error;
export const currentOrderSelector = state => state.order;