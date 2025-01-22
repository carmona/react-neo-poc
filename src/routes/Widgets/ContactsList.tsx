import { Table, Button } from '@avaya/neo-react';
import React from 'react';
import './ContactsList.scss';

const ContactsList: React.FC = () => {
  const [isTransferDisabled] = React.useState(false);
  const [isCallDisabled] = React.useState(false);
  const columnDefs = [
    {
      Header: 'Name',
      accessor: 'name',
      sortType: 'alphanumeric',
    },
    {
      Header: 'Number',
      accessor: 'number',
      sortType: 'alphanumeric',
    },
    {
      Header: 'Actions',
      // eslint-disable-next-line react/no-unstable-nested-components
      Cell: ({ row }: any) => (
        <div className="AddressBook__actions">
          <Button
            variant="primary"
            disabled={isTransferDisabled}
            icon="call-transfer"
            onClick={() => {
              // eslint-disable-next-line no-alert
              alert(`Clicked Transfer to ${row.original.number}`);
            }}
          />
          <Button
            variant="primary"
            disabled={isCallDisabled}
            icon="call"
            onClick={() => {
              // eslint-disable-next-line no-alert
              alert(`Clicked call on ${row.original.number}`);
            }}
          />
        </div>
      ),
    },
  ];
  const rowData = [
    {
      id: '1',
      label: 'Mandalay',
      name: 'Mandalay Bay',
      number: '7624567876',
    },
    {
      id: '2',
      label: 'Excalibur',
      name: 'Excalibur Hotel',
      number: '1234567890',
    },
    {
      id: '3',
      label: 'Luxor',
      name: 'Luxor Hotel',
      number: '736724578',
    },
    {
      id: '4',
      label: 'Bellagio',
      name: 'Bellagio Hotel',
      number: '9817408516',
    },
    {
      id: '5',
      label: 'Aria',
      name: 'Aria Hotel',
      number: '5341857915',
    },
  ];
  return (
    <div className="AddressBook">
      <Table
        className="AddressBook__table"
        data={rowData}
        columns={columnDefs}
        resizableColumns
        showPagination
        draggableRows
        // allowToggleColumnVisibility
        initialStatePageSize={null}
      />
    </div>
  );
};

export default ContactsList;
