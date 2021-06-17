import React, { Component } from "react";
import { Link } from "react-router-dom";
// import closeModalIcon from "../../assets/icons"

class AddNewListingForm extends Component {
  render() {
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
            Currently seeking potential suitors to provide the following for my
            listing:
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
      </div>
    );
  }
}

export default AddNewListingForm;
