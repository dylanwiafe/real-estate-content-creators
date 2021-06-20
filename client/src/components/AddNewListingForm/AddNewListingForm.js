import React, { Component } from "react";
import { Link } from "react-router-dom";
// import closeModalIcon from "../../assets/icons"
import axios from "axios";

class AddNewListingModal extends Component {
  state = {
    addListingAddress: "",
    selectType: "Residential",
    addListingDate: "",
    selectStyle: "Colonial",
    selectStatus: "Active",
    addListingTwilightPhotoRequests: "true",
    addListingAerialPhotoRequests: "true",
    addListingAerialVideoRequests: "true",
    addListingVirtualTourRequests: "true",
    addListingDevelopmentRequests: "true",
    styles: [
      "colonial",
      "apartment",
      "condo",
      "townhouse",
      "office",
      "industrial",
      "warehouse",
      "retail",
    ],
    type: ["Commercial", "Residential", "Mixed Use"],
    status: ["active", "inactive"],
  };

  componentDidMount = () => {
    axios
      .get("https://localhose:8001/listing")
      .then((response) => {
        this.setState({
          selectStatus: response.data,
          selectStyle: response.data,
          selectType: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  isFormCompleted = () => {
    if (
      !this.state.addListingAddress.trim() ||
      !this.state.addListingType.trim() ||
      !this.state.addListingDate.trim() ||
      !this.state.selectStatus.trim() ||
      !this.state.addListingStyle.trim() ||
      !this.state.addListingTwilightPhotoRequests ||
      !this.state.addListingAerialPhotoRequests ||
      !this.state.addListingAerialVideoRequests ||
      !this.state.addListingVirtualTourRequests ||
      !this.state.addListingDevelopmentRequests
    ) {
      return false;
    } else {
      return true;
    }
  };

  handleUpload = (event) => {
    event.preventDefault();
    console.log(this.state);
    console.log(this.isFormCompleted());

    if (this.isFormCompleted()) {
      const data = {
        address: this.state.addListingAddress,
        dateListed: this.state.addListingDate,
        type: this.state.addListingType,
        style: this.state.addListingStyle,
        status: this.state.addListingStatus,
        dronePhotoRequests: this.state.addListingAerialPhotoRequests,
        droneVideoRequests: this.state.addListingAerialVideoRequests,
        developmentRequests: this.state.addListingDevelopmentRequests,
        virtualTourRequests: this.state.addListingVirtualTourRequests,
        twilightPhotoRequests: this.state.addListingTwilightPhotoRequests,
      };
      console.log(data);
      axios
        .post("https://localhost:8001/listing/add", data)
        .then(function (response) {
          console.log(response);
          alert("a new listing has been created");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  handleSelectStyle = (event) => {
    this.setState({ selectStyle: event.target.value });
  };

  handleMarketStatus = (event) => {
    this.setState({ selectStatus: event.target.value });
  };
  handleSelectType = (event) => {
    this.setState({ selectType: event.target.value });
  };

  render() {
    // const styles = this.state.styles;
    // const type = this.state.type;
    // const status = this.state.status;

    return (
      <div class="add-new-listing">
        <div class="add-new-listing__row--header">
          <h2>Add a new listing</h2>
          <Link>
            {/* <img src={closeModalIcon} alt="close modal icon" /> */}
          </Link>
        </div>
        <div class="add-new-listing__col">
          <div class="add-new-listing__row">
            <label htmlFor="address">ADDRESS</label>
            <input
              name="addListingAddress"
              placeholder="address"
              value={this.state.addListingAddress}
              onChange={this.handleChange}
            />
          </div>

          <div class="add-new-listing__row">
            <label htmlFor="style">PROPERTY STYLE</label>
            <select
              name="selectStyle"
              onChange={this.handleSelectStyle}
              value={this.state.selectStyle}
            >
              {" "}
            </select>
          </div>
        </div>
        <div class="add-new-listing__col">
          <div class="add-new-listing__row">
            <label htmlFor="listingDate">DATE LISTED</label>
            <input
              type="text"
              name="addListingDate"
              placeholder="date listed: mm/dd/yy"
              value={this.state.addListingDate}
              onChange={this.handleChange}
            />
          </div>

          <div class="add-new-listing__row">
            <label htmlFor="">PROPERTY TYPE</label>
            <select
              name="selectType"
              onChange={this.handleSelectType}
              value={this.state.selectType}
            >
              {" "}
            </select>
          </div>

          <div class="add-new-listing__row">
            <label htmlFor="status">STATUS</label>
            <select
              name="selectStatus"
              onChange={this.handleMarketStatus}
              value={this.state.selectStatus}
            >
              {" "}
            </select>
          </div>
        </div>
        <div class="add-new-listing__row--requests">
          <h2>
            Currently seeking potential suitors to provide the following for my
            listing:
          </h2>
          <div class="add-new-listing__row">
            <label htmlFor="">Aerial Photography</label>
            <input
              name="addListingAerialPhotoRequests"
              value={this.state.addListingAerialPhotoRequests}
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.addListingAerialPhotoRequests === true}
            />
          </div>
          <div class="add-new-listing__row">
            <label htmlFor="">Aerial Videography</label>
            <input
              name="addListingAerialVideoRequests"
              value={this.state.addListingAerialVideoRequests}
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.addListingAerialVideoRequests === true}
            />
          </div>
          <div class="add-new-listing__row">
            <label htmlFor="">Development</label>
            <input
              name="addListingDevelopmentRequests"
              value={this.state.addListingDevelopmentRequests}
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.addListingDevelopmentRequests === true}
            />
          </div>
          <div class="add-new-listing__row">
            <label htmlFor="">Virtual Tour</label>
            <input
              name="addListingVirtualTourRequests"
              value={this.state.addListingVirtualTourRequests}
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.addListingVirtualTourRequests === true}
            />
          </div>
          <div class="add-new-listing__row">
            <label htmlFor="">Twilight Photography</label>
            <input
              name="addListingTwilightPhotoRequests"
              value={this.state.addListingTwilightPhotoRequests}
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.addListingTwilightPhotoRequests === true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewListingModal;
