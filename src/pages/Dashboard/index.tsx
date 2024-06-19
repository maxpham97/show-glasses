import { useGetDashBoardData } from '../../resources/dashboard';
import { TableColumn } from '../../components/cutomTable/types';
import CustomTable from '../../components/CutomTable/CustomTable';
import GeneralSearchField from '../../components/CutomTable/GeneralSearchField';

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
