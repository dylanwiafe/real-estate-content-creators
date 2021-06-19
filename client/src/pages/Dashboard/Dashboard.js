import React from "react";
import { Component } from "react";
import ListingsTable from "../../components/ListingsTable/ListingsTable";
import "../Dashboard/Dashboard.scss";
// import axios from "axios";
// import Header from "../components/Header/Header";
class Dashboard extends Component {
  // state = {
  //   listings: [],
  //   showDeleteModal: false,
  //   listingToDelete: {},
  // };

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:8001/listing")
  //     .then((response) => {
  //       console.log(response.data);
  //       this.setState({ listings: response.data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

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
