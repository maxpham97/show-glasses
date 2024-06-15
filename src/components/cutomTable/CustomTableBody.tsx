/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { TableColumn } from './types';

const CustomTableBody = ({ columns, data }: { columns: TableColumn[]; data: any }) => {
    console.log('columns', columns);
    console.log('data', data);

    return <tbody>Empty Data</tbody>;
};

export default CustomTableBody;
