import React from 'react';
import { Widget, WidgetHeader, Icon, WidgetContent } from '@avaya/neo-react';
import ContactsList from './ContactsList';

const ContactsWidget: React.FC = () => (
  <Widget>
    <WidgetHeader>
      <Icon icon="call" aria-label="phone" />
      <p>Contacts List</p>
    </WidgetHeader>
    <WidgetContent>
      <ContactsList />
    </WidgetContent>
  </Widget>
);

export default ContactsWidget;
