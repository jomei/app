import { createSelector } from 'reselect'

const _getToken = (state) => state.account.token;

export const getToken = createSelector([_getToken], (token) => token);