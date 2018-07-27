import React, { Component } from 'react';
import './style.css';

const increasePrice = (price, percent) => {
  return Math.round(price * ((100 + percent) / 100)).toLocaleString('ru-RU');
}

export default class ResultTable extends Component {
  fetchItems = () => {
    this.props.fetchItems();
  }

  // eslint-disable-next-line
  getColor = color => {backgroundColor: color};

  deleteItem = (id) => (e) => {
    e.preventDefault();
    this.props.removeItem(id);
  }

  renderTable = () => {
    const { items } = this.props;
    const amount = items.reduce((acc, {price}) => {
      return acc += price
    }, 0);

    if (!items.length) {
      return <p className='msg'>Список пуст</p>
    } else {
      return (
        <div className='results'>
          <h2 className='results__heading'>Автомобили в наличии</h2>
          <table className='results__table'>
            <thead>
              <tr>
                <th className='results__title'>Название</th>
                <th className='results__year'>Год</th>
                <th className='results__color'>Цвет</th>
                <th className='results__status'>Статус</th>
                <th className='results__price'>Цена</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className='results__title'>{item.title}</td>
                    <td className='results__year'>{item.year}</td>
                    <td className='results__color'><span className={item.color}>{item.color}</span></td>
                    <td className='results__status'>{item.status}</td>
                    <td className='results__price'>
                      {item.price.toLocaleString('ru-RU')} руб.
                      <span className='increase'>{increasePrice(item.price, 13)} руб.</span>
                    </td>
                    <td className='results__delete'><button className='delete-button' onClick={this.deleteItem(item.id)}>Удалить</button></td>
                    <td className='results__desc'>{item.description}</td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot>
              <tr>
                <td className='results__amount'>Итого: {amount.toLocaleString('ru-RU')} руб.</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )
    }
  }

  renderLoadMsg = () => {
    const { loadState } = this.props;
    const states = {
      requested: <p className='msg'>Загрузка...</p>,
      failed: <p className='msg'>Ошибка загрузки</p>,
      none: null
    }
    return states[loadState];
  }

  render() {
    const { loadState } = this.props;
    return loadState === 'successed' ? this.renderTable() : this.renderLoadMsg();
  }

  componentWillMount() {
    this.fetchItems();
  }
}