import React from 'react';

interface TableColumn {
  // Define the structure of a table column
  key: string;
  label: string;
}

interface TableProps {
  columns: TableColumn[];
  data: any[]; // Replace with the actual data structure
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{item[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
