import React from 'react';

const Table = ({ tableData, renderRow, renderHeader, renderSeparator }) => (
  <div>
    {console.log(renderHeader)}
    {renderHeader && renderHeader()}
    {tableData.map((rowData, index) => (
      <div>
        {renderRow(rowData, index)}
        {renderSeparator && tableData.length !== index + 1 && renderSeparator()}
      </div>
    ))}
  </div>
);

export default Table;
