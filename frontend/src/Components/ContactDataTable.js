import React, { Component } from "react";

const columns = [
  {
    Header: "First Name",
    accessor: "firstName",
    Filter: TextSearchFilter,
    filter: "rankedMatchSorter"
  },
  {
    Header: "Last Name",
    accessor: "lastName",
    Filter: TextSearchFilter
  },
  {
    Header: "Age",
    accessor: "age"
  },
  {
    Header: "Visits",
    accessor: "visits"
  },
  {
    Header: "Status",
    accessor: "status",
    Filter: DropdownFilter
  },
  {
    Header: "Profile Progress",
    accessor: "progress"
  }
];

class PeopleDataTable extends Component {
  // Loading must be handled here because DataTable MUST have data on load
  renderTable() {
    if (!data) {
      return <Loading />;
    } else {
      return <Datatable data={data} columns={columns} />;
    }
  }

  render() {
    return <>{this.renderTable()}</>;
  }
}

export default PeopleDataTable;
