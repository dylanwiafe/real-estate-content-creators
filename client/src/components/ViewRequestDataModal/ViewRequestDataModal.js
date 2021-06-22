import React, { Component } from "react";
import { Link } from "react-router-dom";
// import closeModalIcon from "../../assets/icons"

class ViewListingModal extends Component {
  render() {
    return (
      <div class="view-listing">
        <div class="view-listing__row">
          <h2>Lorem ipsum</h2>
          <Link>
            {/* <img src={closeModalIcon} alt="close modal icon" /> */}
          </Link>
        </div>
        <div class="view-listing__container--photo">
          {/* <img src={propertyImg} alt="" /> */}
        </div>
        <div>
          <h2>Requests</h2>
          <div class="view-listing__col">
            <div class="view-listing__row--request">
              <img src="" alt="" />
              <p>Lorem, ipsum.</p>
            </div>
            <div class="view-listing__row--request">
              <img src="" alt="" />
              <p>Lorem, ipsum.</p>
            </div>
          </div>
          <div class="view-listing__col">
            <div class="view-listing__row--request">
              <img src="" alt="" />
              <p>Lorem, ipsum.</p>
            </div>
            <div class="view-listing__row--request">
              <img src="" alt="" />
              <p>Lorem, ipsum.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewListingModal;
