import { Table, Button, Tooltip, Select, SelectOption } from '@avaya/neo-react';
import React, { useEffect } from 'react';
import './ContactsList.scss';
import { Contact, ContactGroup } from './Contact.types.ts';

interface ContactsListProps {
  groups: ContactGroup[];
}

const ContactsList: React.FC<ContactsListProps> = ({ groups }: ContactsListProps) => {
  // variable initiators using hooks
  const [isTransferDisabled] = React.useState(false);
  const [isCallDisabled] = React.useState(false);
  const [rowData, setRowData] = React.useState<Contact[]>([] as Contact[]);
  const defaultSelectedGroup = groups[0]?.name || '';
  const [selectedGroupName, setSelectedGroupName] = React.useState(defaultSelectedGroup);

  // this will run once the groups have been loaded
  useEffect(() => {
    if (groups.length) {
      setSelectedGroupName(groups[0]?.name);
    }
  }, [groups]);

  // this will run every time the selected group has changed
  useEffect(() => {
    // at first run, groups will be empty
    if (!groups.length) return;
    const group = groups.find((g) => g.name === selectedGroupName);
    if (group) {
      setRowData(group.contacts);
    }
  }, [groups, selectedGroupName]);

  // template for the actions column
  const actionsCell = ({ row }: any) => (
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
  );

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
      Cell: actionsCell,
    },
  ];

  // template for the group selector dropdown
  const groupSelector = (
    <Select
      aria-label="Select a group"
      size="md"
      value={selectedGroupName}
      onChange={(value) => {
        if (value) {
          setSelectedGroupName(value.toString());
        }
      }}
    >
      {groups.map((group: ContactGroup) => (
        <SelectOption key={group.id} value={group.name}>
          {group.name}
        </SelectOption>
      ))}
    </Select>
  );

  // actual component template
  return (
    <div className="ContactsList">
      <Table
        className="ContactsList__table"
        data={rowData}
        columns={columnDefs}
        resizableColumns
        initialStatePageSize={null}
        customActionsNode={groupSelector}
      />
    </div>
  );
};

export default ContactsList;
