/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { TableColumn } from './types';
import styles from './styles.module.scss';

interface ICustomTableHeader {
  columns: TableColumn[];
  handleResetOptions?: () => void;
}

const CustomTableHeader = ({ columns, handleResetOptions }: ICustomTableHeader) => {
  const renderHeaders = (inputColumns: TableColumn[]): JSX.Element | null => {
    if (!inputColumns || inputColumns.length === 0) return null;

    return (
      <tr>
        {inputColumns.map((column: TableColumn, index: number) => {
          const currentAccessor = column.accessor;
          const hidden = column.hidden;
          if (hidden) return null;
          return (
            <td
              key={index}
              className={styles.tableHeader}
              style={{ width: '100px' }}
              rowSpan={column.rowSpan || 1}
              colSpan={column.colSpan || 1}>
              {column.header}
            </td>
          );
        })}
      </tr>
    );
  };
  return <thead>{renderHeaders(columns)}</thead>;
};

export default CustomTableHeader;
