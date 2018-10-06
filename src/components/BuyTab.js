import React, { Component } from 'react';

const styles = {
  container: {
    padding: 10,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    margin: '0 auto'
  },
  percentageRow: {
    display: 'flex',
    alignSelf: 'flex-end',
    
  },
  percentageItem: {
    backgroundColor: 'lightgray',
    borderRadius: 15,
    padding: '3px 10px',
    margin: '0 5px',
    fontSize: 12,
    cursor: 'pointer',
  },
  inputField: {
    justifyContent: 'space-around',
    display: 'flex',
    padding: '5px 5px'
  },
  paddingAround: {
    paddingTop: '10px',
    paddingBottom: '10px',
    textAlign: 'center'
  }
};

class BuyTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      pricePerUnit: 0
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleOnChange(field, value) {
    this.setState({
      [field]: parseFloat(value)
    });
  }
  handleClick() {
    console.log('clicked')
    this.setState({
      amount: 0,
      pricePerUnit: 0
    })

  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.percentageRow}>
          {[10, 25, 50, 100].map(p => (
            <div style={styles.percentageItem}>{p}%</div>
          ))}
        </div>
        <div>
          <div style={styles.inputField}>
            <label htmlFor="buyAmmount">Buy Amount(BTC)</label>
            <input type="text" onChange={e => this.handleOnChange('amount', e.target.value)} />
          </div>
          <div style={styles.inputField}>
            <label htmlFor="price">Price Per (KRW)</label>
            <input type="number" onChange={e => this.handleOnChange('pricePerUnit', e.target.value)} />
          </div>
          <div style={styles.inputField}>
            <label htmlFor="fee">Fee:</label>
            <div>0 BTC</div>
          </div>
          <div style={styles.inputField}>
            <label htmlFor="total">Order Total:</label>
            <div>{this.state.amount * this.state.pricePerUnit}</div>
          </div>
          <div style={styles.paddingAround}>
            -Min Order Amount: 1000 KRW -Fees Maker: 0% Taker: 0.015%
          </div>
          <div style={{display: 'flex'}}>
            <button style={{flex: 1, height: '30px'}} onClick={this.handleClick}>Reset</button>
            <button  style={{flex: 3, backgroundColor: 'red', height: '30px'}}> Buy </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BuyTab;
