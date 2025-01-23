import { Table, Button, Tooltip, Select, SelectOption } from '@avaya/neo-react';
import React, { useEffect } from 'react';
import './ContactsList.scss';
import { MOCK_DATA, findGroupById } from './mock-data';

const ContactsList: React.FC = () => {
  const [isTransferDisabled] = React.useState(false);
  const [isCallDisabled] = React.useState(false);
  const [rowData, setRowData] = React.useState<any[]>([]);
  const [selectedGroupID, setSelectedGroupID] = React.useState('1');
  useEffect(() => {
    const group = findGroupById(selectedGroupID);
    if (group) {
      setRowData(group.contacts);
    }
  }, [selectedGroupID]);
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
        <div className="ContactsList__actions">
          <Tooltip
            label={`Transfer current call to ${row.original.name} (${row.original.number})`}
            position="left"
            multiline
          >
            <Button
              variant="primary"
              disabled={isTransferDisabled}
              icon="call-transfer"
              onClick={() => {
                // eslint-disable-next-line no-alert
                alert(`Clicked Transfer to ${row.original.number}`);
              }}
            />
          </Tooltip>
          <Tooltip
            label={`Start a call to ${row.original.name} (${row.original.number})`}
            position="left"
            multiline
          >
            <Button
              variant="primary"
              disabled={isCallDisabled}
              icon="call"
              onClick={() => {
                // eslint-disable-next-line no-alert
                alert(`Clicked call on ${row.original.number}`);
              }}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  const groupSelector = (
    <Select
      aria-label="Select a group"
      size="md"
      value={selectedGroupID}
      onChange={(value) => {
        if (value) {
          setSelectedGroupID(value.toString());
        }
      }}
    >
      {MOCK_DATA.groups.map((group) => (
        <SelectOption key={group.id} value={group.id}>
          {group.name}
        </SelectOption>
      ))}
    </Select>
  );

  return (
    <div className="ContactsList">
      <Table
        className="ContactsList__table"
        data={rowData}
        columns={columnDefs}
        resizableColumns
        draggableRows
        // allowToggleColumnVisibility
        initialStatePageSize={null}
        customActionsNode={groupSelector}
      />
    </div>
  );
};

export default ContactsList;
