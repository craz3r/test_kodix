import axios from 'axios';
import { createAction } from 'redux-actions';

export const fetchItemsRequest = createAction('TASKS_FETCH_REQUEST');
export const fetchItemsSuccess = createAction('TASKS_FETCH_SUCCESS');
export const fetchItemsFailure = createAction('TASKS_FETCH_FAILURE');

export const fetchItems = () => async (dispatch) => {
  dispatch(fetchItemsRequest());
  try {
    const url = 'https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json';
    const response = await axios.get(url);
    dispatch(fetchItemsSuccess({ items: response.data }));
  } catch (e) {
    dispatch(fetchItemsFailure());
  }
};

export const removeItem = createAction('ITEM_REMOVE');

export const addItem = createAction('ITEM_ADD');