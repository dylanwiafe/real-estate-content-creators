import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import closeModalIcon from "../../assets/icons"
import "./DeleteListingModal.scss";
import cancelIcon from "../../assets/icons/cancel-icon.svg";
import deleteIcon from "../../assets/icons/5.svg";
class DeleteListingModal extends Component {
  render() {
    return (
      <div class="delete-listing">
        <div className="delete-listing__container--outer">
          <div className="delete-listing__card">
            <div class="delete-listing__row">
              <div className="delete-listing__container--close">
                <img
                  src={cancelIcon}
                  alt="cancel"
                  onClick={this.props.cancelDelete}
                />
              </div>
              <h2>Delete Listing</h2>
              {/* <Link> */}
              {/* <img src={closeModalIcon} alt="close modal icon" /> */}
              {/* </Link> */}
            </div>
            <div class="delete-listing__container">
              <p>Are you sure you want to delete this listing?</p>
              <p>If you do you won't be able to retrieve it!</p>
              <img src={deleteIcon} className="delete-listing__icon" alt="" />
              <div class="delete-listing__row--buttons">
                <button
                  class="delete-listing__button--confirm"
                  onClick={this.props.confirmDelete}
                >
                  yes
                </button>
                <button
                  class="delete-listing__button--cancel"
                  onClick={this.props.cancelDelete}
                >
                  no
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteListingModal;
