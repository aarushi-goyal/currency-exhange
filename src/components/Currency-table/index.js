import React from 'react';
import Table from '../Table';

const styles = {
  headerText: {
    fontWeight: 'bold',
  },
  rowItem: {
    padding: '10px 20px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
  },
  width150: {
    width: 150
  },
  width50: {
    width: 50
  },
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  headerSeparator: {
    height: 2,
    backgroundColor: 'darkblue',
    width: '100%',
  },
};

const renderCurrencyTableHeader = () => (
  <div>
    <div style={styles.row}>
      <div style={styles.rowItem}>
        <div style={{ ...styles.headerText, ...styles.width50 }}>Product</div>
      </div>
      <div style={styles.rowItem}>
        <div style={{ ...styles.headerText, ...styles.width150 }}>Available Balance</div>
      </div>
      <div style={styles.rowItem}>
        <div style={{ ...styles.headerText, ...styles.width150 }}>Total Balance</div>
      </div>
    </div>
    <div style={styles.headerSeparator} />
  </div>
);

const renderCurrencyTableRow = currencyItem => (
  <div style={styles.row} key={currencyItem.ProductSymbol}>
    <div style={{ ...styles.rowItem, ...styles.width50 }}>
      <div>{currencyItem.ProductSymbol}</div>
    </div>
    <div style={{ ...styles.rowItem, ...styles.width150 }}>
      <div>{currencyItem.Amount - currencyItem.Hold}</div>
    </div>
    <div style={{ ...styles.rowItem, ...styles.width150 }}>
      <div>{currencyItem.Amount}</div>
    </div>
  </div>
);

const CurrencyTable = ({ tableData }) => {
  return (
    <div style={styles.container}>
      <Table
        tableData={tableData}
        renderHeader={renderCurrencyTableHeader}
        renderRow={renderCurrencyTableRow}
      />
    </div>
  );
};

export default CurrencyTable;
