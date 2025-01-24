import React, { useEffect } from 'react';
import { Widget, WidgetHeader, Icon, WidgetContent } from '@avaya/neo-react';
import ContactsList from './ContactsList.tsx';
import useCsv from './useCsv.ts';
import { ContactGroup } from './Contact.types.ts';

const ContactsWidget: React.FC = () => {
  const sourceUrl = 'http://127.0.0.1:8080/assets/contacts.csv';
  const title = 'Contacts List';
  const groupsList = useCsv(sourceUrl) as ContactGroup[];
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Groups List:', groupsList);
  }, [groupsList]);
  return (
    <Widget>
      <WidgetHeader>
        <Icon icon="call" aria-label="phone" />
        <p>{title}</p>
      </WidgetHeader>
      <WidgetContent>
        <ContactsList groups={groupsList} />
      </WidgetContent>
    </Widget>
  );
};

export default ContactsWidget;
