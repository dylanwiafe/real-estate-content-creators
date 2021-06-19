import { Component } from "react";
import axios from "axios";
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
import dropdownArrow from "../../assets/icons/dropdown-chevron.svg";
import EditListingModal from "../EditListingModal/EditListingModal";
import DeleteListingModal from "../../components/DeleteListingModal/DeleteListingModal";
import editIcon from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";

// import ServiceCardGrid from "../ServiceCardGrid/ServiceCardGrid";

class ListingsTable extends Component {
  state = {
    listings: [],
    showDeleteModal: false,
    showEditModal: false,
    listingToEdit: {},
    listingToDelete: {},
  };

  //create a component did mount function
  //inside place an axios get request to localhost:8001/listing
  //in your .then after set the state to listings: response.data]

  componentDidMount() {
    axios
      .get("http://localhost:8001/listing")
      .then((response) => {
        console.log(response.data);
        this.setState({ listings: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //you'll need a handle delete function that takes in a parameter of ID
  handleDelete = (id) => {
    console.log(id);
    const listingToDelete = this.state.listings.find(
      (listing) => listing.id === id
    );

    this.setState({ showDeleteModal: true, listingToDelete });
  };

  handleEdit = (id) => {
    const listingToEdit = this.state.listings.find(
      (listing) => listing.id === id
    );
    this.setState({ showEditModal: true, listingToEdit });
  };
  //inside the handle delete I'm using the find method on the state
  //of listings to do a strict equals comparison on the id of the item I want to delete
  //to one that exists in the json object
  //then I'm setting the state of the delete function to be true

  //you'll need a cancel delete function for the x on the modal
  //inside this function you'll set the state of showing the modal to false

  confirmDelete = () => {
    console.log("confirm delete?");
    axios
      .delete("http://localhost:8001/listings" + this.state.listingToDelete.id)
      .then((response) => {
        console.log(response);
        return axios.get("http://localhost:8001/listings");
      })
      .then((response) => {
        console.log(response);
        this.setState({ showDeleteModal: false, listings: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  confirmEdit = () => {
    console.log("are you sure you want to render these updates?");

    axios
      .put("https://loclahost:8001/listings" + this.state.listingToEdit.id)
      .then((response) => {
        console.log(response);
        this.setState({ showEditModal: false, listings: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // cancelDelete() {
  //   console.log("would you like to close this modal?");
  //   const abc = this.setState({ showDeleteModal: false });
  // }

  render() {
    return (
      <div className="service">
        {this.state.showDeleteModal && (
          <DeleteListingModal
          // listingToDelete={}
          // confirmDelete={}
          // cancelDelete={}
          />
        )}
        {this.state.showEditModal && (
          <EditListingModal
          // listingToDelete={}
          // confirmDelete={}
          // cancelDelete={}
          />
        )}
        {/* <ServiceCardGrid /> */}
        <div className="service__container--title">
          <h1 className="service__heading">Hire a contractor</h1>
        </div>
        <div className="service__grid">
          <div className="service__card">
            <p className="card__heading">exterior photography</p>
            <p className="card__copy">view experts in my area</p>
          </div>

          <div className="service__card">
            <p className="card__heading">interior photography</p>
            <p className="card__copy">view experts in my area</p>
          </div>
          <div className="service__card">
            <p className="card__heading">portraits</p>
            <p className="card__copy">view experts in my area</p>
          </div>
          <div className="service__card--lg">
            <p className="card__heading">misc.</p>
            <p className="card__copy">view experts in my area</p>
          </div>
          <div className="service__card--lg-2">
            <p className="card__heading">aerial photography</p>
            <p className="card__copy">hire experts in my area</p>
          </div>
        </div>

        <div className="responsive-table">
          <div className="responsive-table__header--title">
            <h1 className="service__heading">Listings</h1>
            <button>Filter</button>
            <button>Export</button>
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
                <div className="responsive-table__row">
                  <div className="responsive-table-body__cell">
                    {listing.address}
                  </div>
                  <img
                    className="dropdownCta"
                    src={dropdownArrow}
                    alt="menu-cta"
                  />
                  {/* <button className="listing__cta listing__cta--edit-mobile">
                    edit
                  </button>
                  <button
                    className="listing__cta listing__cta--delete-mobile"
                    onClick={() => this.handleDelete(listing.id)}
                  >
                    delete{" "}
                  </button> */}

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
                    {listing.TwilightPhotographyRequests || "0x requests"}
                  </div>
                  <div className="responsive-table-body__cell responsive-table-body__cell--hidden">
                    {listing.droneVideoRequests || "0x requests"}
                  </div>
                  <div className="responsive-table-body__cell responsive-table-body__cell--hidden">
                    {listing.dronePhotoRequest || "0x requests"}
                  </div>
                  <div className="responsive-table-body__cell responsive-table-body__cell--hidden">
                    {listing.virtualTourRequests || "0x requests"}
                  </div>
                  <div className="responsive-table-body__cell responsive-table-body__cell--hidden">
                    {listing.developmentRequests || "0x requests"}
                  </div>
                  <div>
                    <img
                      className="responsive-table-body__icon--edit"
                      src={editIcon}
                      onClick={() => this.handleEdit(listing.id)}
                      alt="icon for editing a listing"
                    />
                    <img
                      className="responsive-table-body__icon--delete"
                      src={deleteIcon}
                      onClick={() => this.handleDelete(listing.id)}
                      alt="icon for deleting a listing"
                    />
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
