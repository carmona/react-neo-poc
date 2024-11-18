// Theme
import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
// React Grid Logic
import 'ag-grid-community/styles/ag-grid.css';
// Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css';
import React, { useState } from 'react';

// Row Data Interface
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

// Create new GridExample component
const GridResizeReorder: React.FC = () => {
  // Row Data: The data to be displayed.
  // , setRowData
  const [rowData] = useState<IRow[]>([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ]);

  // Column Definitions: Defines & controls grid columns.
  // , setColDefs
  const [colDefs] = useState<ColDef<IRow>[]>([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ]);

  const defaultColDef: ColDef = {
    flex: 1,
  };

  // Container: Defines the grid's theme & dimensions.
  return (
    <div className="ag-theme-quartz grid-example">
      <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} />
    </div>
  );
};

export default GridResizeReorder;
