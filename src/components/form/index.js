import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import './style.css';

const validateYear = value => (value > 0 && value < (new Date()).getFullYear() ? undefined : 'Invalid year');
const validatePrice = value => value > 0 ? undefined : 'Invalid price';

const renderField = ({
  input,
  label,
  id,
  type,
  placeholder,
  meta: { touched, error }
}) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} id={id} />
    {touched &&
      ((error && <span className='valid-error'>{error}</span>))}
    <label htmlFor={id}>{label}</label>
  </div>
)

class AddItemForm extends Component {
  addItem = (values) => {
    this.props.addItem(values);
    this.props.reset();
  }

  render() {
    return (
      <form className='add-form' onSubmit={this.props.handleSubmit(this.addItem)}>
        <div className='container'>
          <div className='field name'>
            <Field type='text' component={renderField} required name='title' id='title'  placeholder='Название'/>
            <label htmlFor='title'>Название</label>
          </div>
          <div className='field price'>
            <Field type='number' component={renderField} required name='price' id='price' placeholder='Цена' validate={validatePrice} parse={value => !value ? null: Number(value)} />
            <label htmlFor='price'>Цена</label>
          </div>
          <div className='field year'>
            <Field type='number' component={renderField} required name='year' id='year' placeholder='Год' validate={validateYear} parse={value => !value ? null : Number(value)} />
            <label htmlFor='year'>Год</label>
          </div>
          <div className='field desc'>
            <Field type='text' component={renderField} name='description' id='description' placeholder='Описание' />
            <label htmlFor='desc'>Описание</label>
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
}


export default reduxForm({
  form: 'addItem',
})(AddItemForm);