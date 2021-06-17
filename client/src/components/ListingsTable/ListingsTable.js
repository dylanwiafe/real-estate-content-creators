import { Component } from "react";
// import axios from "axios";
// import editIcon from "../../assets/icons"
// import deleteIcon from "../../assets/icons"
// import listingModla from "../ListingsModal/ListingsModal"
// import  { Link } from 'react-router-dom';
import TwilightPhotographyRequest from "../../assets/icons/twilight-photo-icon.svg";
import AerialVideographyRequest from "../../assets/icons/drone-photo-icon.svg";
import AerialPhotographyRequest from "../../assets/icons/drone-photo-icon.svg";
// import TwilightPhotographyRequest from
import VirtualTourRequest from "../../assets/icons/virtual-tour-icon.svg";
import DevelopmentRequest from "../../assets/icons/development-icon.svg";

class ListingsTable extends Component {
  state = {
    listings: [],
    showListingModal: false,
    listingToDelete: {},
  };

  //create a component did mount function
  //inside place an axios get request to localhost:8080/listing
  //in your .then after set the state to listings: response.data

  //you'll need a handle delete function that takes in a parameter of ID
  //inside the handle delete I'm using the find method on the state
  //of listings to do a strict equals comparison on the id of the item I want to delete
  //to one that exists in the json object
  //then I'm setting the state of the delete function to be true

  //you'll need a cancel delete function for the x on the modal
  //inside this function you'll set the state of showing the modal ton false

  render() {
    return (
      <div className="service">
        <div className="service__grid">
          <div className="service__card" />
          <div className="service__card" />
          <div className="service__card" />
          <div className="service__card--lg" />
          <div className="service__card--lg-2" />
        </div>
        <div className="responsive-table">
          <div className="responsive-table__header">
            <div className="responsive-table-header__cell">address</div>
            <div className="responsive-table-header__cell">type</div>
            <div className="responsive-table-header__cell">date listed</div>
            <div className="responsive-table-header__cell">style</div>
            <div className="responsive-table-header__cell">status</div>
            <div className="responsive-table-header__cell">
              {/* twilight photography requests */}
              <img src={TwilightPhotographyRequest} alt=""></img>
            </div>
            <div className="responsive-table-header__cell">
              {/* aerial videography requests */}
              <img src={AerialVideographyRequest} alt=""></img>
            </div>
            <div className="responsive-table-header__cell">
              {/* aerial photography requests */}
              <img src={AerialPhotographyRequest} alt=""></img>
            </div>
            <div className="responsive-table-header__cell">
              {/* virtual tour requests */}
              <img src={VirtualTourRequest} alt=""></img>
            </div>
            <div className="responsive-table-header__cell">
              {/* development requests */}
              <img src={DevelopmentRequest} alt=""></img>
            </div>
          </div>
          <div className="responsive-table__body">
            <div className="responsive-table__row">
              <div className="responsive-table-body__cell">
                placeholder value
              </div>
              <div className="responsive-table-body__cell">
                placeholder value
              </div>
              <div className="responsive-table-body__cell">
                placeholder value
              </div>
              <div className="responsive-table-body__cell">
                placeholder value
              </div>
              <div className="responsive-table-body__cell">
                placeholder value
              </div>
              <div className="responsive-table-body__cell">1 request</div>
              <div className="responsive-table-body__cell">1 request</div>
              <div className="responsive-table-body__cell">1 request</div>
              <div className="responsive-table-body__cell">1 request</div>
              <div className="responsive-table-body__cell">1 request</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingsTable;
