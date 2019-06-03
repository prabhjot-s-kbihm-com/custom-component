import React from 'react';
import {AgGridReact} from "ag-grid-react";
// import {CustomContainer, GridTitle, Grid} from 'custom-component'
import "ag-grid-enterprise";
const Grid = (props) => {

  return (// Grid Definition
    <div>
    <AgGridReact
    columnDefs={props.columnDefs}
    rowData={props.rowData}
    deltaRowDataMode={true}
    getRowNodeId={data => data.id}
    autoGroupColumnDef={props.autoGroupColumnDef}
    groupDefaultExpanded={-1}
    onFirstDataRendered={params => params.api.sizeColumnsToFit()}
    getContextMenuItems={props.getContextMenuItems}>
  </AgGridReact></div>)
}

export default Grid;