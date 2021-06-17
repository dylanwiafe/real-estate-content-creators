import React from "react";
import { Component } from "react";
import ListingsTable from "../../components/ListingsTable/ListingsTable";
import "../Dashboard/Dashboard.scss";

// import Header from "../components/Header/Header";
class Dashboard extends Component {
  render() {
    console.log();
    return (
      <div>
        <ListingsTable />
      </div>
    );
  }
}

export default Dashboard;
