import React from "react";
import { Component } from "react";
import ListingsTable from "../../components/ListingsTable/ListingsTable";
import "../Dashboard/Dashboard.scss";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ListingsTable />
      </div>
    );
  }
}

export default Dashboard;
