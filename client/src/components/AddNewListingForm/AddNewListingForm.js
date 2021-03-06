import React, { Component } from "react";

import closeModalIcon from "../../assets/icons/cancel-icon.svg";
import axios from "axios";
import "./AddNewListingForm.scss";
class AddNewListingModal extends Component {
  state = {
    postFetchStatus: "NOT_STARTED",
    addListingAddress: "",
    selectType: "Residential",
    addListingDate: "",
    selectStyle: "Colonial",
    selectStatus: "Active",
    addListingTwilightPhotoRequests: "false",
    addListingAerialPhotoRequests: "false",
    addListingAerialVideoRequests: "false",
    addListingVirtualTourRequests: "false",
    addListingDevelopmentRequests: "false",
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
    this.getListings();
  };
  getListings = () => {
    axios
      .get("http://localhost:8001/listing")
      .then((response) => {
        this.setState({
          selectStatus: response.data,
          selectStyle: response.data,
          selectType: response.data,
        });
      })
      .catch((error) => {
        alert("an error has occured");
      });
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  isFormCompleted = () => {
    if (
      this.state.addListingAddress === "" ||
      this.state.selectType === "" ||
      typeof this.state.selectType !== "string" ||
      this.state.addListingDate === "" ||
      this.state.selectStatus === "" ||
      typeof this.state.selectStatus !== "string" ||
      this.state.selectStyle === "" ||
      typeof this.state.selectStyle !== "string" ||
      this.state.addListingTwilightPhotoRequests === "" ||
      this.state.addListingAerialPhotoRequests === "" ||
      this.state.addListingAerialVideoRequests === "" ||
      this.state.addListingVirtualTourRequests === "" ||
      this.state.addListingDevelopmentRequests === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  handleUpload = (event) => {
    event.preventDefault();

    if (this.isFormCompleted()) {
      const data = {
        address: this.state.addListingAddress,
        dateListed: this.state.addListingDate,
        type: this.state.selectType,
        style: this.state.selectStyle,
        status: this.state.selectStatus,
        dronePhotoRequests: this.state.addListingAerialPhotoRequests,
        droneVideoRequests: this.state.addListingAerialVideoRequests,
        developmentRequests: this.state.addListingDevelopmentRequests,
        virtualTourRequests: this.state.addListingVirtualTourRequests,
        twilightPhotoRequests: this.state.addListingTwilightPhotoRequests,
      };

      axios
        .post("http://localhost:8001/listing/", data)
        .then(function (response) {
          alert("a new listing has been created");

          window.location.reload();
        })
        .catch(function (error) {
          alert("an error has occured");
        });
    } else {
      alert("Complete the form");
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
    return (
      <div class="add-new-listing">
        <div class="add-new-listing__container--outer">
          <div class="add-new-listing__card">
            <div class="add-new-listing__row--header">
              <h2>Add a new listing</h2>
              <img
                className="add-new-listing__icon"
                src={closeModalIcon}
                onClick={this.props.cancelUpload}
                alt="close modal icon"
              />
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
                  {this.state.styles.map((elem, index) => {
                    return (
                      <option value={elem} key={index}>
                        {elem}
                      </option>
                    );
                  })}
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
                  {this.state.type.map((elem, index) => {
                    return (
                      <option value={elem} key={index}>
                        {elem}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div class="add-new-listing__row">
                <label htmlFor="status">STATUS</label>
                <select
                  name="selectStatus"
                  onChange={this.handleMarketStatus}
                  value={this.state.selectStatus}
                >
                  {this.state.status.map((elem, index) => {
                    return (
                      <option value={elem} key={index}>
                        {elem}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div class="add-new-listing__row--requests">
              <h2>
                Currently seeking potential suitors to provide the following for
                my listing:
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
            <div>
              <button
                className="add-new-listing__button--cancel"
                onClick={this.props.cancelUpload}
              >
                cancel
              </button>
              <button
                className="add-new-listing__button--upload"
                onClick={this.handleUpload}
              >
                upload
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewListingModal;
