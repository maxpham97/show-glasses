/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { TableColumn } from './types';
import styles from './styles.module.scss';

interface ICustomBodyTable {
  columns: TableColumn[];
  data: any;
}

const CustomBodyTable = (props: ICustomBodyTable) => {
  const { columns, data } = props;

  const totalColumns = React.useMemo(
    () => columns.reduce((acc, col) => acc + (col.colSpan || 1), 0),
    [columns]
  );

  const renderBody = (inputColumns: TableColumn, data: any): JSX.Element | null => {
    const hidden = inputColumns.hidden;

    if (hidden) return null;

    if (!inputColumns.columns)
      return (
        <td key={data[inputColumns.accessor]} className={styles.tableCell}>
          {inputColumns.renderData ? inputColumns.renderData(data) : data[inputColumns.accessor]}
        </td>
      );

    return (
      <>
        {inputColumns.columns.map((column, index: number) => (
          <div key={index}>{renderBody(column, data)}</div>
        ))}
      </>
    );
  };

  return (
    <tbody>
      {data.length > 0 ? (
        data.map((row: any, index: number) => (
          <tr key={index}>{columns.map((col: any) => renderBody(col, row))}</tr>
        ))
      ) : (
        <tr>
          <th className={styles.tableCell} colSpan={totalColumns}>
            Empty Table
          </th>
        </tr>
      )}
    </tbody>
  );
};

export default CustomBodyTable;
