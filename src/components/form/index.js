import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import './style.css';

const validateYear = value => (value > 0 && value < (new Date()).getFullYear() + 1 ? undefined : 'Invalid year');
const validatePrice = value => value > 0 ? undefined : 'Invalid price';

const renderField = ({
  input,
  label,
  id,
  type,
  tabIndex,
  placeholder,
  meta: { touched, error }
}) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} id={id} tabIndex={tabIndex} />
    {touched &&
      ((error && <span className='valid-error'>{error}</span>))}
    <label htmlFor={id}>{label}</label>
  </div>
)

class AddItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: null,
    }
  }

  addItem = (values) => {
    this.props.addItem(values);
    this.props.reset();
  }

  render() {
    return (
      <form className='add-form' onSubmit={this.props.handleSubmit(this.addItem)}>
        <div className='container'>
          <div className='field name'>
            <Field type='text' component={renderField} required name='title' id='title' tabIndex='1' placeholder='Название' label='Название'/>
          </div>
          <div className='field price'>
            <Field type='number' component={renderField} required name='price' id='price' placeholder='Цена' label='Цена' tabIndex={ this.state.isMobile ? 2 : 3 } validate={validatePrice} parse={value => !value ? null: Number(value)} />
          </div>
          <div className='field year'>
            <Field type='number' component={renderField} required name='year' id='year' placeholder='Год' label='Год' tabIndex={ this.state.isMobile ? 3 : 2 } validate={validateYear} parse={value => !value ? null : Number(value)} />
          </div>
          <div className='field desc'>
            <Field type='text' component={renderField} name='description' id='description' placeholder='Описание' label='Описание' />
          </div>
          <div className='field colors'>
            <label>Цвет</label>
            <label className='custom-radio custom-radio--white'>
              <Field type='radio' component='input' required name='color' value='white' />
              <span>White</span>
            </label>
            <label className='custom-radio custom-radio--black'>
              <Field type='radio' component='input' required name='color' value='black' />
              <span>Black</span>
            </label>
            <label className='custom-radio custom-radio--grey'>
              <Field type='radio' component='input' required name='color' value='grey' />
              <span>Grey</span>
            </label>
            <label className='custom-radio custom-radio--red'>
              <Field type='radio' component='input' required name='color' value='red' />
              <span>Red</span>
            </label>
            <label className='custom-radio custom-radio--green'>
              <Field type='radio' component='input' required name='color' value='green' />
              <span>Green</span>
            </label>
          </div>
          <div className='field status'>
            <Field name='status' component='select' id='status'>
              <option value='' hidden>Статус</option>
              <option value='in_stock'>В наличии</option>
              <option value='pednding'>Ожидается</option>
              <option value='out_of_stock'>Нет в наличии</option>
            </Field>
            <label htmlFor='status'>Статус</label>
          </div>
          <div className='field submit'>
            <button type='submit'>
              Отправить
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12">
                <path d="M8.014,6.236 L2.175,12.014 L-0.015,9.847 L3.875,5.999 L-0.015,2.151 L2.175,-0.015 L8.014,5.762 L7.775,5.999 L8.014,6.236 Z"/>
              </svg>
            </button>
          </div>
        </div>
      </form>
    )
  }

  updateDimensions = () => {
    if(window.innerWidth < 720) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

}


export default reduxForm({
  form: 'addItem',
})(AddItemForm);
