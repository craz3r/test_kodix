import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { omit, keyBy } from 'lodash';
import * as actions from '../actions';

const fetchingItemsState = handleActions({
  [actions.fetchItemsRequest]() {
    return 'requested';
  },
  [actions.fetchItemsFailure]() {
    return 'failed';
  },
  [actions.fetchItemsSuccess]() {
    return 'successed';
  },
}, 'none');

const itemsState = handleActions({
  [actions.fetchItemsSuccess](state, { payload: { items } }) {
    return keyBy(items, 'id');
  },
  [actions.removeItem](state, { payload: id }) {
    return omit(state, id);
  },
  [actions.addItem](state, { payload }) {
    const newId = +(new Date());
    return { ...state, [newId]: { id: newId, ...payload } };
  },
}, {})

export default combineReducers({
  fetchingItemsState,
  itemsState,
  form: formReducer,
})
