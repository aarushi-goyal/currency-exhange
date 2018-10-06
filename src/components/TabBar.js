import React, { Component } from 'react';
import '../assets/TabBar.css';

const style = {
  flexDisplay: {
    flex: 1,
    backgroundColor: 'lightgrey',
    textAlign: 'center'
  },
  container: {
    padding: 10,
    justifyContent: 'center',
    display: 'flex',
    width: '40%',
    margin: '0 auto'
  },
  selectedTab: {
    backgroundColor: 'red',
    width: '100%'
  }
};

class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
  }

  componentDidMount() {

  }

  handleClick(activeTab, currentTab) {
    if (activeTab == currentTab) {
      this.setState({ color: 'red' })
    }
    
  }

  render() {
    const { activeTabs } = this.props;
    return(
    <div style={style.container}>
      <div style={{...style.flexDisplay, backgroundColor: 'red'}}>
        Buy
      </div>
      <div style={style.flexDisplay}>
        Sell
      </div>
    </div>
    )
  }
}

export default TabBar;
