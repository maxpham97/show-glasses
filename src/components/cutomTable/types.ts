/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';

interface CustomTableProps<T> {
  data?: Array<T>;
  columns: Array<TableColumn>;
  isLoadingGetMore?: boolean;
  maxHeight?: number | string;
  totalRecords?: number;
  //   renderRowClass?: (row: any) => SxProps<Theme>;
  isFilterColumn?: boolean;
  isDisplayLoadingColumn?: boolean;
  loadingFilterColumns?: Array<string>;
  optionsForceValue?: Array<{ value: any; label: string }>;
  handleResetOptions?: Function;
}

interface TableColumn {
  header?: string | JSX.Element;
  hidden?: boolean;
  accessor: string;
  colSpan?: number;
  rowSpan?: number;
  columns?: TableColumn[];
  // sx?: SxProps<Theme>;
  renderData?: FC<any>;
  disableSearch?: boolean;
  disableFilter?: boolean;
  selectOptions?: Array<{ label: string; value: unknown }>;
  disableSort?: boolean;
}

interface ActionTableProps {
  isLoading?: boolean;
  columns?: TableColumn[];
  refreshAction?: () => void;
  searchAction?: () => void;
  addAction?: () => void;
  handleActionAdd?: (data?: any) => void;
  disableSearch?: boolean;
  placeholderSearch?: string;
}

export type { ActionTableProps, TableColumn, CustomTableProps };
