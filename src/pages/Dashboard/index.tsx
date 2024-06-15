import { useGetDashBoardData } from '../../resources/dashboard';
import { TableColumn } from '../../components/cutomTable/types';
import GeneralSearchField from '../../components/cutomTable/GeneralSearchField';
import CustomTable from '../../components/cutomTable/CustomTable';

const Dashboard = () => {
    const { data } = useGetDashBoardData();

    const column: TableColumn[] = [
        {
            header: 'ID',
            accessor: 'id',
        },
        {
            header: 'Name',
            accessor: 'name',
        },
        {
            header: 'Age',
            accessor: 'age',
        },
    ];
    return (
        <div>
            <GeneralSearchField />
            <CustomTable columns={column} data={data} />
        </div>
    );
};

export default Dashboard;
