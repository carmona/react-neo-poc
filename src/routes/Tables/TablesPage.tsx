import React from 'react';
import GridResizeReorder from './AgGridResize';
import './tables.scss';
import NeoTableExample from './NeoResize';

const TablesPage: React.FC = () => (
  <div className="TablesPage DemoPage">
    <h1>Tables</h1>
    <h2>Using Neo-React</h2>
    <h3>Resize columns, filter & sort</h3>
    <NeoTableExample />
    <hr style={{ width: '100%' }} />
    <h2>Using AG-Grid Library</h2>
    <h3>Simple resize & reorder columns</h3>
    <GridResizeReorder />
  </div>
);

export default TablesPage;
