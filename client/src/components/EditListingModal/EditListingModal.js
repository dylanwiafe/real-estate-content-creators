import React, { Component } from "react";
import cancelIcon from "../../assets/icons/cancel-icon.svg";
import "./EditListingModal.scss";
import axios from "axios";
class EditListingModal extends Component {
  state = {
    address: "",
    dateListed: "",
    type: "",
    style: "",
    status: "",
    dronePhotoRequests: "",
    droneVideoRequests: "",
    developmentRequests: "",
    virtualTourRequests: "",
    formSubmit: false,
    twilightPhotoRequests: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const requiredListingData = {
      id: "",
      address: event.target.address,
      dateListed: event.target.dateListed,
      type: event.target.type,
      style: event.target.style,
      status: event.target.status,
      dronePhotoRequests: event.target.dronePhotoRequests,
      droneVideoRequests: event.target.droneVideoRequests,
      developmentRequests: event.target.developmentRequests,
      virtualTourRequests: event.target.virtualTourRequests,
      twilightPhotoRequests: event.target.twilightPhotoRequests,
    };

    console.log(requiredListingData);

    axios
      .put(
        `http://localhost8001/listing/edit ${this.state.listing.id}`,
        requiredListingData
      )
      .then((response) => {
        console.log(response);
        this.setState({ formSubmit: true });
      })
      .catch((error) => {
        console.log(error);
      });

    event.target.reset();
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    axios.get(`http://localhost8001/listing/${id}`).then((response) => {
      console.log(response.data);
      this.setState = {
        id: response.id,
        address: response.address,
        dateListed: response.dateListed,
        type: response.type,
        style: response.style,
        status: response.status,
        dronePhotoRequests: response.dronePhotoRequests,
        droneVideoRequests: response.droneVideoRequests,
        developmentRequests: response.developmentRequests,
        virtualTourRequests: response.virtualTourRequests,
        twilightPhotoRequests: response.twilightPhotoRequests,
      };
    });
  };

  render() {
    return (
      <div className="edit-listing">
        <div className="edit-listing__card">
          <div class="edit-listing__row">
            <div className="edit-listing__container--close">
              <img
                src={cancelIcon}
                alt="cancel"
                onClick={this.props.cancelEdit}
              />
            </div>
            <h2>Edit Listing</h2>
            <div className="edit-listing__container">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus deleniti dignissimos.
              </p>

              <div class="add-new-listing__col">
                <div class="add-new-listing__row">
                  <label htmlFor="agentID">AGENT ID</label>
                  <input type="text" />
                </div>

                <div class="add-new-listing__row">
                  <label htmlFor="address">ADDRESS</label>
                  <input type="text" />
                </div>

                <div class="add-new-listing__row">
                  <label htmlFor="style">PROPERTY STYLE</label>
                  <input type="text" />
                </div>
              </div>
              <div class="add-new-listing__col">
                <div class="add-new-listing__row">
                  <label htmlFor="listingDate">DATE LISTED</label>
                  <input type="text" />
                </div>

                <div class="add-new-listing__row">
                  <label htmlFor="">PROPERTY TYPE</label>
                  <input type="text" />
                </div>

                <div class="add-new-listing__row">
                  <label htmlFor="status">STATUS</label>
                  <input type="text" />
                </div>
              </div>
              <div class="add-new-listing__row--requests">
                <h2>
                  Currently seeking potential suitors to provide the following
                  for my listing:
                </h2>
                <div class="add-new-listing__row">
                  <label htmlFor="">Aerial Photography</label>
                  <input type="checkbox" />
                </div>
                <div class="add-new-listing__row">
                  <label htmlFor="">Aerial Videography</label>
                  <input type="checkbox" />
                </div>
                <div class="add-new-listing__row">
                  <label htmlFor="">Development</label>
                  <input type="checkbox" />
                </div>
                <div class="add-new-listing__row">
                  <label htmlFor="">Virtual Tour</label>
                  <input type="checkbox" />
                </div>
                <div class="add-new-listing__row">
                  <label htmlFor="">Twilight Photography</label>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="edit-listing__row--buttons">
                <button className="" onClick={this.props.confirmEdit}>
                  confirm
                </button>
                <button className="" onClick={this.props.cancelEdit}>
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      //   </div>
    );
  }
}

export default EditListingModal;
