/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react-hooks/exhaustive-deps */
import { Table, Button, Tooltip, Select, SelectOption } from '@avaya/neo-react';
import React, { useEffect } from 'react';
import './ContactsList.scss';
import { Contact, ContactGroup } from './Contact.types.ts';
import { getWidgetApi, getActiveInteraction } from './widgetApiTools.ts';

interface ContactsListProps {
  groups: ContactGroup[];
}

const log = (...args: any[]) => {
  // eslint-disable-next-line no-console
  console.info('MGM: ', ...args);
};

// main component controller
const ContactsList: React.FC<ContactsListProps> = ({ groups }: ContactsListProps) => {
  const defaultSelectedGroup = groups[0]?.name || '';
  const widgetApi = getWidgetApi();

  // variable initiators using hooks
  const [hasActiveCall, setHasActiveCall] = React.useState(false);
  const [isConsulting, setIsConsulting] = React.useState(false);
  const [isCallDisabled] = React.useState(false);
  const [rowData, setRowData] = React.useState<Contact[]>([] as Contact[]);
  const [selectedGroupName, setSelectedGroupName] = React.useState(defaultSelectedGroup);

  // this will run once the groups have been loaded
  useEffect(() => {
    const handleInteractionEvent = (event: any) => {
      log('onAnyInteractionEvent', event);
      const activeInteraction = getActiveInteraction(widgetApi);
      if (activeInteraction) {
        log('Active interaction found:', activeInteraction);
        setHasActiveCall(true);
      } else {
        log('No active interaction found');
        setHasActiveCall(false);
      }
    };
    widgetApi.onDataEvent('onAnyInteractionEvent', handleInteractionEvent);
    widgetApi.onDataEvent('onAnyInteractionEndedEvent', handleInteractionEvent);

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
      log('Setting row data for group:', group.contacts);
      setRowData(group.contacts);
    }
  }, [selectedGroupName]);

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
          disabled={!hasActiveCall || isConsulting}
          icon="call-transfer"
          onClick={() => {
            const activeInteraction = getActiveInteraction(widgetApi);
            if (activeInteraction) {
              const interactionApi = getWidgetApi(activeInteraction?.id);
              interactionApi.consult(row.original.number);
              setIsConsulting(true);
              // the consult action takes a while to show changes in UI,
              // so I added this timeout to give the impression of a delay
              setTimeout(() => setIsConsulting(false), 2000);
            } else {
              log('No active interaction found');
            }
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
            widgetApi.startVoiceInteraction(row.original.number);
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
      {groups.length >= 1 ? (
        groups?.map((group: ContactGroup) => (
          <SelectOption key={group.id} value={group.name}>
            {group.name}
          </SelectOption>
        ))
      ) : (
        <span>empty</span>
      )}
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
        initialStatePageSize={100}
        customActionsNode={groupSelector}
      />
    </div>
  );
};

export default ContactsList;
