import React, { Component } from 'react';
import './App.css';
import cover_1 from './images/captainamerica.jpg'
import cover_2 from './images/sing.jpg'
import cover_3 from './images/drstrange.jpg'
import cover_4 from './images/exmachina.jpg'
import cover_5 from './images/logan.jpg'
import cover_6 from './images/passengers.jpg'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className='item'>
            <img src={cover_1} alt='Captain America' />
          </div>
          <div className='item'>
            <img src={cover_2} alt='Sing' />
          </div>

          <div className='item'>
            <img src={cover_3} alt='Dr Strange' />
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <img src={cover_4} alt='Exmachina' />
          </div>
          <div className='item'>
            <img src={cover_5} alt='Logan' />
          </div>
          <div className='item'>
            <img src={cover_6} alt='Passengers' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
