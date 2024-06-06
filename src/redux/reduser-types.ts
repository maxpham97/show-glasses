/* eslint-disable @typescript-eslint/no-explicit-any */
export type CustomTableReducerType = {
  pageIndex: number;
  pageSize: number;
  searchFields?: Record<string, unknown>;
  sortField?: string;
  filterFields?: {
    accessor?: string;
    fields?: Record<string, string[]>;
    textSearch?: string;
    selectOptions?: Record<string, Array<any>>;
    columnField?: string[];
    checkCallApi?: number;
    options?: {
      value: any;
      label: string;
    }[];
  };
  sortDirection?: 'asc' | 'desc';
  generalSearchField?: string;
};

export interface IBaseAction {
    type:string
}

export interface ICustomTableAction extends IBaseAction {
    payload: Partial<CustomTableReducerType>
}
