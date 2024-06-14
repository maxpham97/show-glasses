/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useGetCustomTableState } from '../redux/customTable/customTableSlice';
import { mockData } from '../pages/Dashboard/mockData';

export const useGetDashBoardData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const tableState = useGetCustomTableState();

  const { generalSearchField } = tableState;

  const getData = async () => {
    setLoading(true);

    console.log('generalSearchField', generalSearchField);

    const filterData = generalSearchField
      ? mockData.filter((item) => item.name.toLowerCase() === generalSearchField.toLowerCase())
      : mockData;

    setData(filterData as any);

    setLoading(false)
  };

  useEffect(() => {
    getData();
  }, [generalSearchField]);

  return {
    data,
    loading,
  };
};
