import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Component from '../components/table';
import { itemsSelector } from '../selectors';

const mapStateToProps = (state) => {
  const props = {
    items: itemsSelector(state),
    loadState: state.fetchingItemsState,
  };
  return props;
}

const ItemsContainer = connect(
  mapStateToProps,
  actionCreators
)(Component);

export default ItemsContainer;