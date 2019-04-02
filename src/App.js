import React, { Component } from 'react';
import './App.css';
import Tvshow from './Tvshow';
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
          <Tvshow name='Captain America' cover={cover_1} />
          <Tvshow name='Sing' cover={cover_2} />
          <Tvshow name='Dr Strange' cover={cover_3} />
        </div>
        <div className='container'>
          <Tvshow name='Exmachina' cover={cover_4} />
          <Tvshow name='Logan' cover={cover_5} />
          <Tvshow name='Passengers' cover={cover_6} />
        </div>
      </div>
    );
  }
}


export default App;
