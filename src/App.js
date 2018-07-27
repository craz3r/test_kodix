import React, { Component } from 'react';
import logo from './assets/imgs/logo.png';
import logoRetina from './assets/imgs/logo@2x.png';
import logoMedium from './assets/imgs/logo-medium.png';
import logoMediumRetina from './assets/imgs/logo-medium@2x.png';
import ItemsContainer from './containers/itemsList';
import AddFormContainer from './containers/addForm';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <header className='page-header'>
          <div className='container'>
            <a href='index.html' className='logo' tabIndex='-1'>
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
            <AddFormContainer />
            <ItemsContainer />
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
