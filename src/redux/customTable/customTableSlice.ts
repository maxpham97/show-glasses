/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { CustomTableReducerType, ICustomTableAction } from '../reduser-types';
import REDUX_SLICE_NAMES from '../../consts/redax-slice-names';
import { useAppDispatch, useAppSelector } from '../hook';
import { RootState } from '../store';
const initialState: CustomTableReducerType = {
  pageIndex: 500,
  pageSize: 0,
  sortDirection: 'asc',
  searchFields: undefined,
  sortField: undefined,
  generalSearchField: undefined,
  filterFields: {},
};

const customTableSlice = createSlice({
  name: REDUX_SLICE_NAMES.CUSTOM_TABLE,
  initialState,
  reducers: {
    setCustomTableState: (
      state: CustomTableReducerType = initialState,
      action: ICustomTableAction
    ) => {
      const listProperties = Object.keys(state);

      Object.keys(action.payload).forEach((field) => {
        if (listProperties.includes(field)) {
          state[field as keyof CustomTableReducerType] = action.payload[
            field as keyof CustomTableReducerType
          ] as never;
        }
      });
    },
    inceasePageIndex: (state: CustomTableReducerType) => ({
      ...state,
      pageIndex: state.pageIndex + 1,
    }),
    resetCustomTable: () => initialState,
  },
});

const { setCustomTableState, resetCustomTable, inceasePageIndex } = customTableSlice.actions;

export const useGetCustomTableState = () =>
  useAppSelector((state: RootState) => state[customTableSlice.name] as CustomTableReducerType);

export const useSetCustomTableState = () => {
  const dispatch = useAppDispatch();

  return {
    setCustomTableState: (fields: Partial<CustomTableReducerType>) => {
      dispatch(setCustomTableState(fields));
    },
    inceasePageIndex: () => {
      dispatch(resetCustomTable());
    },
    onPageChange: (event: unknown, newPage: number) => {
      dispatch(setCustomTableState({ pageIndex: newPage }));
    },
    onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setCustomTableState({ pageSize: parseInt(event.target.value, 10), pageIndex: 0 }));
    },
  };
};

export default customTableSlice;
