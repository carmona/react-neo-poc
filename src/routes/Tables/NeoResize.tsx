import { Table } from '@avaya/neo-react';
import React from 'react';

const NeoTableExample: React.FC = () => {
  const columnDefs = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Status',
      accessor: 'status',
      sortType: 'alphanumeric',
    },
    {
      Header: 'Level',
      accessor: 'level',
      sortType: 'alphanumeric',
    },
    {
      Header: 'Color',
      accessor: 'hexValue',
      sortType: 'alphanumeric',
    },
    {
      Header: 'Other',
      accessor: 'other',
      disableSortBy: true,
    },
  ];
  const rowData = [
    {
      id: '20',
      label: 'Daniel',
      name: 'Daniel Smith',
      other: 'Delor Itum',
      date: new Date(2000, 2, 1),
      status: 'inactive',
      hexValue: '00FF00',
      level: 'low',
      hasOnCallBeeper: false,
    },
    {
      id: '30',
      label: 'Tif',
      name: 'Tif Brown',
      other: 'Asdf Fded',
      date: new Date(2010, 2, 12),
      status: 'in call',
      hexValue: '0000FF',
      level: 'high',
      hasOnCallBeeper: true,
    },
    {
      id: '40',
      label: 'Hailey',
      name: 'Hailey Garcia',
      other: 'Consectetur Adipiscing',
      date: new Date(2020, 1, 21),
      status: 'awc',
      hexValue: 'FFFF00',
      level: 'medium',
      hasOnCallBeeper: false,
    },
    {
      id: '50',
      label: 'Alex',
      name: 'Alex Miller',
      other: 'Duis aute',
      date: new Date(2000, 2, 11),
      status: 'awc',
      hexValue: 'FF00FF',
      level: 'low',
      hasOnCallBeeper: true,
    },
  ];
  return (
    <div className="neo-table-example">
      <Table
        data={rowData}
        columns={columnDefs}
        caption="Default NEO Table"
        resizableColumns
        showPagination
        draggableRows
        allowToggleColumnVisibility
        initialStatePageSize={50}
      />
    </div>
  );
};

export default NeoTableExample;
