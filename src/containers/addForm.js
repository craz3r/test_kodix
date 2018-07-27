import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Component from '../components/form';

const mapStateToProps = ({ items }) => {
  return {
    items
  }
}

const addFormContainer = connect(
  mapStateToProps,
  actionCreators
)(Component);

export default addFormContainer;