import { createSelector } from 'reselect';
import { translateStatus } from '../helpers';

export const getItems = state => state.itemsState;

export const itemsSelector = createSelector(
  getItems,
  items => Object.values(items).map((item) => {
    return {...item, status: translateStatus(item.status)}
  }),
);