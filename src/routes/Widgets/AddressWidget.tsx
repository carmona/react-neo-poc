import React from 'react';
import { Widget, WidgetHeader, Icon, WidgetContent } from '@avaya/neo-react';
import AddressBook from './AdressBook';

const AddressWidget: React.FC = () => (
  <Widget>
    <WidgetHeader>
      <Icon icon="call" aria-label="phone" />
      <p>Address Book</p>
    </WidgetHeader>
    <WidgetContent>
      <AddressBook />
    </WidgetContent>
  </Widget>
);

export default AddressWidget;
