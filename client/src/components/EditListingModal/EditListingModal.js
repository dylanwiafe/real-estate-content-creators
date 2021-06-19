import React, { Component } from "react";
import cancelIcon from "../../assets/icons/cancel-icon.svg";
import "./EditListingModal.scss";
class EditListingModal extends Component {
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
