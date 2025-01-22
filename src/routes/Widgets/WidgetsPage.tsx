import React from 'react';
import './widgets.scss';
import { Widget, Icon, WidgetHeader, WidgetContent } from '@avaya/neo-react';
// import {  } from 'antd/es/layout/layout';
// import AddressBook from './AdressBook';
import AddressWidget from './AddressWidget';

const WidgetsPage: React.FC = () => (
  <div className="WidgetsPage DemoPage">
    <h1>Widgets</h1>
    <h2>MGM</h2>
    <h3>AddressBook Widget</h3>
    <AddressWidget />

    <h2>NEO</h2>
    <h3>default widget</h3>
    <Widget>
      <WidgetHeader>
        <Icon icon="chat" aria-label="chat" />
        <p>Header of widget window</p>
      </WidgetHeader>
      <WidgetContent>
        Adipisicing in consequat incididunt occaecat sit eu
        <strong>enim ex pariatur</strong>. Ad eiusmod duis incididunt reprehenderit.
      </WidgetContent>
    </Widget>

    <h3>disabled widget</h3>
    <Widget disabled>
      <WidgetHeader>
        <Icon icon="chat" aria-label="chat" />
        <p>Header of widget window</p>
      </WidgetHeader>
      <WidgetContent>
        Adipisicing in consequat incididunt occaecat sit eu
        <strong>enim ex pariatur</strong>. Ad eiusmod duis incididunt reprehenderit.
      </WidgetContent>
    </Widget>
  </div>
);

export default WidgetsPage;
