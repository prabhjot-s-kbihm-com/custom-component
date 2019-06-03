import React, { Component } from 'react'
import {Provider} from 'react-redux';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

import {actions} from './actions/fileAction.js'
import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
 import {CustomContainer, GridTitle, Grid} from 'custom-component'
import "ag-grid-enterprise";
class App extends Component {
  colDefs = [
    {field: "file"},
    {field: "folder", rowGroup: true, hide: true},
    {field: "dateModified"},
    {field: "size"}
  ];

  autoGroupColumnDef = {
    headerName: "Folder",
    sort: 'asc',
    cellRendererParams: {
      suppressCount: true
    }
  };

  render() {
    return (
      <div id='myGrid' style={{height: 450}} className="ag-theme-balham">
      {/* <GridTitle title="Spreads and Fees"/> */}
        <Grid
          columnDefs={this.colDefs}
          rowData={this.props.files}
          deltaRowDataMode={true}
          getRowNodeId={data => data.id}
          autoGroupColumnDef={this.autoGroupColumnDef}
          groupDefaultExpanded={-1}
          onFirstDataRendered={params => params.api.sizeColumnsToFit()}
          getContextMenuItems={this.getContextMenuItems}>
        </Grid>
      </div>
    )
  }

  getContextMenuItems = (params) => {
    const folderActions = [{
      name: "New File",
      action: () => this.props.actions.newFile(params.node.key)
    }];

    const fileActions = [{
      name: "Delete File",
      action: () => this.props.actions.deleteFile(params.node.data.id)
    }];

    return params.node.group ? folderActions : fileActions;
  };
}

const mapStateToProps = (state) => ({
  files: state.files
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

// connect our component to the redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps // must be supplied for react/redux when using GridOptions.reactNext
)(App);
