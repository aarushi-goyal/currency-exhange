import React, { Component } from 'react';
import data from '../constants/data';
import CurrencyTable from '../components/Currency-table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrencyTable tableData={data.accountPositions} />
      </div>
    );
  }
}

export default App;
