import React, { Component } from "react";
// import cancelIcon from "../../assets/icons/cancel-icon.svg";
import "./EditListingModal.scss";
import axios from "axios";
class EditListingModal extends Component {
  state = {
    postFetchStatus: "NOT_STARTED",
    editListingAddress: "",
    selectType: "Residential",
    editListingDate: "",
    selectStyle: "Colonial",
    selectStatus: "Active",
    editListingTwilightPhotoRequests: "false",
    editListingAerialPhotoRequests: "false",
    editListingAerialVideoRequests: "false",
    editListingVirtualTourRequests: "false",
    editListingDevelopmentRequests: "false",
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
      .get("http://localhost:8001/listing")
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
    // const { name, value } = event.target;
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  handleUpdate = (event) => {
    event.preventDefault();
    // console.log(this.state);
    // console.log(this.isFormCompleted());
    const id = this.props.listingToEdit.listingID;
    // if (this.isFormCompleted()) {
    const data = {
      address: this.state.editListingAddress,
      dateListed: this.state.editListingDate,
      type: this.state.selectType,
      style: this.state.selectStyle,
      status: this.state.selectStatus,
      dronePhotoRequests: this.state.editListingAerialPhotoRequests,
      droneVideoRequests: this.state.editListingAerialVideoRequests,
      developmentRequests: this.state.editListingDevelopmentRequests,
      virtualTourRequests: this.state.editListingVirtualTourRequests,
      twilightPhotoRequests: this.state.editListingTwilightPhotoRequests,
    };
    console.log(data);
    // this.setState({postFetchStatus: 'PENDING'})
    axios
      .put(`http://localhost:8001/listing/${id}`, data)
      .then(function (response) {
        console.log(response);
        alert("your listing has been updated!");
        return axios.get("http://localhost:8001/listing");
        // this.setState({postFetchStatus: 'SUCCESS'})
      })
      .catch(function (error) {
        // this.setState({postFetchStatus: 'FAILURED'})

        console.log(error);
      });
    // }
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
  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   const requiredListingData = {
  //     id: "",
  //     address: event.target.address,
  //     dateListed: event.target.dateListed,
  //     type: event.target.type,
  //     style: event.target.style,
  //     status: event.target.status,
  //     dronePhotoRequests: event.target.dronePhotoRequests,
  //     droneVideoRequests: event.target.droneVideoRequests,
  //     developmentRequests: event.target.developmentRequests,
  //     virtualTourRequests: event.target.virtualTourRequests,
  //     twilightPhotoRequests: event.target.twilightPhotoRequests,
  //   };

  //   console.log(requiredListingData);

  //   axios
  //     .put(
  //       `http://localhost8001/listing/edit ${this.state.listing.id}`,
  //       requiredListingData
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({ formSubmit: true });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   event.target.reset();
  // };

  // componentDidMount = () => {
  //   const id = this.props.match.params.id;
  //   axios.get(`http://localhost8001/listing/${id}`).then((response) => {
  //     console.log(response.data);
  //     this.setState = {
  //       id: response.id,
  //       address: response.address,
  //       dateListed: response.dateListed,
  //       type: response.type,
  //       style: response.style,
  //       status: response.status,
  //       dronePhotoRequests: response.dronePhotoRequests,
  //       droneVideoRequests: response.droneVideoRequests,
  //       developmentRequests: response.developmentRequests,
  //       virtualTourRequests: response.virtualTourRequests,
  //       twilightPhotoRequests: response.twilightPhotoRequests,
  //     };
  //   });
  // };

  render() {
    return (
      <div class="edit-listing">
        <div class="edit-listing__container--outer">
          <div class="edit-listing__card">
            <div class="edit-listing__row--header">
              <h2>Add a new listing</h2>
              {/* <img src={closeModalIcon} alt="close modal icon" /> */}
            </div>
            <div class="edit-listing__col">
              <div class="edit-listing__row">
                <label htmlFor="address">ADDRESS</label>
                <input
                  name="editListingAddress"
                  placeholder="address"
                  value={this.state.editListingAddress}
                  onChange={this.handleChange}
                />
              </div>

              <div class="edit-listing__row">
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
            <div class="edit-listing__col">
              <div class="edit-listing__row">
                <label htmlFor="listingDate">DATE LISTED</label>
                <input
                  type="text"
                  name="editListingDate"
                  placeholder="date listed: mm/dd/yy"
                  value={this.state.editListingDate}
                  onChange={this.handleChange}
                />
              </div>

              <div class="edit-listing__row">
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

              <div class="edit-listing__row">
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
            <div class="edit-listing__row--requests">
              <h2>
                Currently seeking potential suitors to provide the following for
                my listing:
              </h2>
              <div class="edit-listing__row">
                <label htmlFor="">Aerial Photography</label>
                <input
                  name="editListingAerialPhotoRequests"
                  value={this.state.editListingAerialPhotoRequests}
                  type="checkbox"
                  onChange={this.handleChange}
                  checked={this.state.editListingAerialPhotoRequests === true}
                />
              </div>
              <div class="edit-listing__row">
                <label htmlFor="">Aerial Videography</label>
                <input
                  name="editListingAerialVideoRequests"
                  value={this.state.editListingAerialVideoRequests}
                  type="checkbox"
                  onChange={this.handleChange}
                  checked={this.state.editListingAerialVideoRequests === true}
                />
              </div>
              <div class="edit-listing__row">
                <label htmlFor="">Development</label>
                <input
                  name="editListingDevelopmentRequests"
                  value={this.state.editListingDevelopmentRequests}
                  type="checkbox"
                  onChange={this.handleChange}
                  checked={this.state.editListingDevelopmentRequests === true}
                />
              </div>
              <div class="edit-listing__row">
                <label htmlFor="">Virtual Tour</label>
                <input
                  name="editListingVirtualTourRequests"
                  value={this.state.editListingVirtualTourRequests}
                  type="checkbox"
                  onChange={this.handleChange}
                  checked={this.state.editListingVirtualTourRequests === true}
                />
              </div>
              <div class="edit-listing__row">
                <label htmlFor="">Twilight Photography</label>
                <input
                  name="editListingTwilightPhotoRequests"
                  value={this.state.editListingTwilightPhotoRequests}
                  type="checkbox"
                  onChange={this.handleChange}
                  checked={this.state.editListingTwilightPhotoRequests === true}
                />
              </div>
            </div>
            <div>
              <button onClick={this.handleUpdate}>upload listing</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditListingModal;
