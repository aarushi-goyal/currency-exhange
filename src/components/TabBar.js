import React, { Component } from 'react';
import '../assets/TabBar.css';

class TabBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const { activeTabs } = this.props;
    return(
    <div className="main-div">
      <div className="flex-display">
        <button className="selected-tab" >Buy</button>
      </div>
      <div className="flex-display">
        <button className="selected-tab">Sell</button>
      </div>
    </div>
    )
  }
}

export default TabBar;
