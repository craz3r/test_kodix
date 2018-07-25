import React, { Component } from 'react';
import logo from './assets/imgs/logo.png';
import logoRetina from './assets/imgs/logo@2x.png';
import logoMedium from './assets/imgs/logo-medium.png';
import logoMediumRetina from './assets/imgs/logo-medium@2x.png';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <header className='page-header'>
          <div className='container'>
            <a href='index.html' className='logo'>
              <picture>
                <source srcSet={`${logoMediumRetina} 2x`} media='(min-width: 720px)' type='image/png'/>
                <source srcSet={`${logoMedium}`} media='(min-width: 720px)' type='image/png'/>
                <img src={logo} srcSet={`${logoRetina} 2x`} alt='Page logo' />
              </picture>
            </a>
          </div>
        </header>
        <main className='content'>
          <h1 className='page-title'>¡Ay caramba!</h1>
          <form className='add-form'>
            <div className='container'>
              <div className='field name'>
                <input type='text' id='name' name='name' placeholder='Название' />
                <label htmlFor='name'>Название</label>
              </div>
              <div className='field price'>
                <input type='number' id='price' name='price' placeholder='Цена' />
                <label htmlFor='price'>Цена</label>
              </div>
              <div className='field year'>
                <input type='number' id='year' name='year' placeholder='Год' />
                <label htmlFor='year'>Год</label>
              </div>
              <div className='field desc'>
                <input id='desc' type='text' name='desc' placeholder='Описание' />
                <label htmlFor='desc'>Описание</label>
              </div>
              <div className='field colors'>
                <label>Цвет</label>
                <label className='custom-radio custom-radio--white'>
                  <input type='radio' name='color' value='white'/>
                  <span>White</span>
                </label>
                <label className='custom-radio custom-radio--black'>
                  <input type='radio' name='color' value='black' />
                  <span>Black</span>
                </label>
                <label className='custom-radio custom-radio--grey'>
                  <input type='radio' name='color' value='grey'  defaultChecked={true} />
                  <span>Grey</span>
                </label>
                <label className='custom-radio custom-radio--red'>
                  <input type='radio' name='color' value='red' />
                  <span>Red</span>
                </label>
                <label className='custom-radio custom-radio--green'>
                  <input type='radio' name='color' value='green' />
                  <span>Green</span>
                </label>
              </div>
              <div className='field status'>
                <select id='status'>
                  <option value='' hidden>Статус</option>
                  <option value='in_stock'>В наличии</option>
                  <option value='pednding'>Ожидается</option>
                  <option value='out_of_stock'>Нет в наличии</option>
                </select>
                <label htmlFor='status'>Статус</label>
              </div>
              <div className='field submit'>
                <button type='submit' className='btn submit'>Отправить
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12">
                    <path d="M8.014,6.236 L2.175,12.014 L-0.015,9.847 L3.875,5.999 L-0.015,2.151 L2.175,-0.015 L8.014,5.762 L7.775,5.999 L8.014,6.236 Z"/>
                  </svg>
                </button>
              </div>
            </div>
            </form>
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
                <tr>
                  <td className='results__title'>1.6 MT Ambiente 85 л.с. МКПП</td>
                  <td className='results__year'>2012</td>
                  <td className='results__color'><span>Black</span></td>
                  <td className='results__status'>Ожидается</td>
                  <td className='results__price'>1 679 000 руб.</td>
                  <td className='results__delete'><button className='delete-button'>Удалить</button></td>
                  <td className='results__desc'>+ доп. опция «Радио-навигационная система Amundasen 2DIN, CD, MP3»</td>
                </tr>
                <tr>
                  <td className='results__title'>1.6 MT Ambiente 85 л.с. МКПП</td>
                  <td className='results__year'>2012</td>
                  <td className='results__color'><span>Black</span></td>
                  <td className='results__status'>Ожидается</td>
                  <td className='results__price'>1 679 000 руб.</td>
                  <td className='results__delete'><button className='delete-button'>Удалить</button></td>
                  <td className='results__desc'></td>
                </tr>
                <tr>
                  <td className='results__title'>1.6 MT Ambiente 85 л.с. МКПП</td>
                  <td className='results__year'>2012</td>
                  <td className='results__color'><span>Black</span></td>
                  <td className='results__status'>Ожидается</td>
                  <td className='results__price'>1 679 000 руб.</td>
                  <td className='results__delete'><button className='delete-button'>Удалить</button></td>
                  <td className='results__desc'></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
        <footer className='page-footer'>
          <div className='container'>
            <p className='copyright'>
              © 2015 CAPTAIN QUACK <br />
              Десница тысячелетия и моллюск!
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
