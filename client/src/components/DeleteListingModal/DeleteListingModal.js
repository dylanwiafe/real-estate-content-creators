import React, { Component } from "react";
import { Link } from "react-router-dom";
// import closeModalIcon from "../../assets/icons"
import "./DeleteListingModal.scss";

class DeleteListingModal extends Component {
  render() {
    return (
      <div class="delete-listing">
        <div class="delete-listing__row">
          <h2>Delete Listing</h2>
          {/* <Link> */}
          {/* <img src={closeModalIcon} alt="close modal icon" /> */}
          {/* </Link> */}
        </div>
        <div class="delete-listing__container">
          <p>Are you sure you want to delete this listing?</p>
          <p>If you do you won't be able to retrieve it!</p>

          <div class="delete-listing__row--buttons">
            <button class="delte-listing__buttton--confirm">yes</button>
            <button class="delte-listing__buttton--cancel">no</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteListingModal;
