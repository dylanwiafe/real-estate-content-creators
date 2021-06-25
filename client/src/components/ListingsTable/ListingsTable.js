import { Component } from "react";
import axios from "axios";

import TwilightPhotographyRequest from "../../assets/icons/twilight-photo-icon.svg";
import AerialVideographyRequest from "../../assets/icons/drone-photo-icon.svg";
import AerialPhotographyRequest from "../../assets/icons/drone-photo-icon.svg";

import VirtualTourRequest from "../../assets/icons/virtual-tour-icon.svg";
import DevelopmentRequest from "../../assets/icons/development-icon.svg";
import dropdownArrow from "../../assets/icons/dropdown-chevron.svg";
import EditListingModal from "../EditListingModal/EditListingModal";
import DeleteListingModal from "../../components/DeleteListingModal/DeleteListingModal";
import editIcon from "../../assets/icons/edit-icon.svg";
import deleteIcon from "../../assets/icons/delete-icon.svg";
import cardIcon from "../../assets/icons/SVG/drone-photography.svg";
import cardIcon2 from "../../assets/icons/SVG/drone-videography.svg";
import cardIcon3 from "../../assets/icons/SVG/real-estate-twilight-photography-1.svg";
import cardIcon4 from "../../assets/icons/SVG/virtual-video-tours.svg";
import cardIcon5 from "../../assets/icons/SVG/real-estate-twilight-photography-2.svg";

class ListingsTable extends Component {
  state = {
    listings: [],
    showDeleteModal: false,
    showEditModal: false,
    listingToEdit: {},
    listingToDelete: {},
  };

  componentDidMount() {
    axios
      .get("http://localhost:8001/listing")
      .then((response) => {
        this.setState({ listings: response.data });
      })
      .catch((error) => {
        alert("an error has occured");
      });
  }

  handleDelete = (id) => {
    const listingToDelete = this.state.listings.find(
      (listing) => listing.listingID === id
    );

    this.setState({ showDeleteModal: true, listingToDelete });
  };

  handleEdit = (id) => {
    const listingToEdit = this.state.listings.find(
      (listing) => listing.listingID === id
    );
    this.setState({ showEditModal: true, listingToEdit });
  };

  confirmDelete = () => {
    axios
      .delete(
        "http://localhost:8001/listing/" + this.state.listingToDelete.listingID
      )
      .then((response) => {
        return axios.get("http://localhost:8001/listing");
      })
      .then((response) => {
        this.setState({ showDeleteModal: false, listings: response.data });
      })
      .catch((error) => {
        alert("an error has occured");
      });
  };

  confirmEdit = () => {
    axios
      .put(
        "https://localhost:8001/listing" + this.state.listingToEdit.listingID
      )
      .then((response) => {
        this.setState({ showEditModal: false, listings: response.data });
      })
      .catch((error) => {
        alert("an error has occured");
      });
  };

  cancelDelete = () => {
    this.setState({ showDeleteModal: false });
  };
  cancelEdit = () => {
    this.setState({ showEditModal: false });
  };

  render() {
    return (
      <div className="service">
        {this.state.showDeleteModal && (
          <DeleteListingModal
            listingToDelete={this.state.listingToDelete}
            confirmDelete={this.confirmDelete}
            cancelDelete={this.cancelDelete}
          />
        )}
        {this.state.showEditModal && (
          <EditListingModal
            listingToEdit={this.state.listingToEdit}
            // listingToDelete={}
            // confirmDelete={}
            cancelEdit={this.cancelEdit}
          />
        )}
        {/* <ServiceCardGrid /> */}
        <div className="service__container--title">
          <h1 className="service__heading">Hire a contractor</h1>
        </div>
        <div className="service__grid">
          <div className="service__card">
            <img className="card__icon" src={cardIcon} alt="" />
            <p className="card__heading">exterior photography</p>
            <p className="card__copy">view experts in my area</p>
          </div>

          <div className="service__card">
            <img className="card__icon" src={cardIcon4} alt="" />
            <p className="card__heading">interior photography</p>
            <p className="card__copy">view experts in my area</p>
          </div>
          <div className="service__card">
            <img className="card__icon" src={cardIcon3} alt="" />
            <p className="card__heading">portraits</p>
            <p className="card__copy">view experts in my area</p>
          </div>
          <div className="service__card--lg">
            <img className="card__icon" src={cardIcon5} alt="" />
            <p className="card__heading">misc.</p>
            <p className="card__copy">view experts in my area</p>
          </div>
          <div className="service__card--lg-2">
            <img className="card__icon" src={cardIcon2} alt="" />
            <p className="card__heading">aerial photography</p>
            <p className="card__copy">hire experts in my area</p>
          </div>
        </div>

        <div className="responsive-table">
          <div className="responsive-table__header--title">
            <h1 className="service__heading">Listings</h1>
          </div>
          <div className="responsive-table__header">
            <div className="responsive-table-header__cell">address</div>
            <div className="responsive-table-header__cell responsive-table-body__cell--hidden">
              type
            </div>
            <div className="responsive-table-header__cell responsive-table-body__cell--hidden">
              date listed
            </div>
            <div className="responsive-table-header__cell responsive-table-body__cell--hidden">
              style
            </div>
            <div className="responsive-table-header__cell responsive-table-body__cell--hidden">
              status
            </div>
            <div className="responsive-table-header__cell responsive-table-body__cell--hidden">
              {/* twilight photography requests */}
              <img src={TwilightPhotographyRequest} alt=""></img>
            </div>
            <div className="responsive-table-header__cell responsive-table-body__cell--hidden">
              {/* aerial videography requests */}
              <img src={AerialVideographyRequest} alt=""></img>
            </div>
            <div className="responsive-table-header__cell responsive-table-body__cell--hidden">
              {/* aerial photography requests */}
              <img src={AerialPhotographyRequest} alt=""></img>
            </div>
            <div className="responsive-table-header__cell responsive-table-body__cell--hidden">
              {/* virtual tour requests */}
              <img src={VirtualTourRequest} alt=""></img>
            </div>
            <div className="responsive-table-header__cell responsive-table-body__cell--hidden">
              {/* development requests */}
              <img src={DevelopmentRequest} alt=""></img>
            </div>
          </div>
          <div className="responsive-table__body">
            {this.state.listings.map((listing) => {
              return (
                <div className="responsive-table__row" key={listing.listingID}>
                  <div className="pseudo-test__div--jim">
                    <div className="responsive-table-body__cell">
                      {listing.address}
                    </div>
                    <img
                      className="dropdownCta"
                      src={dropdownArrow}
                      alt="menu-cta"
                    />
                  </div>
                  <div className="responsive-table-body__cell responsive-table-body__cell--hidden">
                    {listing.type || "null"}
                  </div>
                  <div className="responsive-table-body__cell responsive-table-body__cell--hidden">
                    {listing.dateListed || "null"}
                  </div>
                  <div className="responsive-table-body__cell responsive-table-body__cell--hidden">
                    {listing.style || "null"}
                  </div>
                  <div className="responsive-table-body__cell responsive-table-body__cell--hidden">
                    {listing.status || "null"}
                  </div>
                  <div className="responsive-table-body__cell responsive-table-body__cell--hidden">
                    {listing.TwilightPhotographyRequests ? "true" : "none"}
                  </div>
                  <div className="responsive-table-body__cell responsive-table-body__cell--hidden">
                    {listing.droneVideoRequests ? "true" : "none"}
                  </div>
                  <div className="responsive-table-body__cell responsive-table-body__cell--hidden">
                    {listing.dronePhotoRequest ? "true" : "none"}
                  </div>
                  <div className="responsive-table-body__cell responsive-table-body__cell--hidden">
                    {listing.virtualTourRequests ? "true" : "none"}
                  </div>
                  <div className="responsive-table-body__cell responsive-table-body__cell--hidden">
                    {listing.developmentRequests ? "true" : "none"}
                  </div>
                  <div>
                    <div className="responsive-table-body__container--buttons">
                      <button
                        onClick={() => this.handleEdit(listing.listingID)}
                        className="responsive-table-body__button responsive-table-body__button--edit"
                      >
                        <img
                          className="responsive-table-body__icon--edit"
                          src={editIcon}
                          alt="icon for editing a listing"
                        />
                      </button>
                      <button
                        onClick={() => this.handleDelete(listing.listingID)}
                        className="responsive-table-body__button responsive-table-body__button--delete"
                      >
                        <img
                          className="responsive-table-body__icon--delete"
                          src={deleteIcon}
                          alt="icon for deleting a listing"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ListingsTable;

/**
 * postFetchStatus: 'NOT_STARTED'
 *
 * postFetchStatus -> 'PENDING'
 *
 * postFetchStatus -> 'SUCCESS'
 *
 * postFetchStatus -> 'FAILURE'
 *
 *
 */
