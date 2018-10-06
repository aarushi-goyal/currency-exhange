import React, { Component } from 'react';
import data from '../constants/data';
import CurrencyTable from '../components/Currency-table';
import TabBar from '../components/TabBar';

class App extends Component {
  tab = {
    Buy: 'buy',
    Sell: 'sell'
  }
  render() {
    return (
      <div className="App">
        <CurrencyTable tableData={data.accountPositions} />
        <TabBar activeTabs=""/>
      </div>
    );
  }
}

export default App;
