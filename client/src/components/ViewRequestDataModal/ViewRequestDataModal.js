import React, { Component } from "react";

class ViewListingModal extends Component {
  render() {
    return (
      <div class="view-listing">
        <div class="view-listing__row">
          <h2>Lorem ipsum</h2>
        </div>
        <div class="view-listing__container--photo"></div>
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
