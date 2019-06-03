import React, { Component } from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {AgGridReact} from "ag-grid-react";
import {actions} from './ducks/actions';
import "ag-grid-enterprise";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
// import {CustomContainer, GridTitle, Grid} from 'custom-component'

class App extends Component {
  colDefs = [
    {field: 'check', checkboxSelection: true},
    {field: "issuer", headerName: "Issuer"},
    {field: "book", headerName: "Book"},
    {field: "spread", headerName: "Spread (bp)"},
    {field: "fee", headerName: "fee(bps)"},
    {field: "prem", headerName: "prem/disc/fee"}
  ];

  // autoGroupColumnDef = {
  //   headerName: "Folder",
  //   sort: 'asc',
  //   cellRendererParams: {
  //     suppressCount: true
  //   }
  // };

  render() {
    console.log(this.props)
    return (
      <div id='myGrid' style={{height: 450}} className="ag-theme-balham">
      {/* <GridTitle title="Spreads and Fees"/> */}
        <AgGridReact
          columnDefs={this.colDefs}
          rowData={this.props.files.files}
          deltaRowDataMode={true}
          getRowNodeId={data => data.id}
          //autoGroupColumnDef={this.autoGroupColumnDef}
          groupDefaultExpanded={-1}
          onFirstDataRendered={params => params.api.sizeColumnsToFit()}
          getContextMenuItems={this.getContextMenuItems}>
        </AgGridReact>
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
