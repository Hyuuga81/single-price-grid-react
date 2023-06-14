import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PriceGrid from './price-grid.js';

import './styles.css';

class App extends Component {
  render() {
    return (
      <PriceGrid />
    );
  }
}

const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);
