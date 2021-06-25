// import e from "express";
import React, { Component } from "react";
import Logo from "../../assets/logo/project-myna-logo.svg";
import Avatar from "../../assets/project-myna-avatar.jpg";
import "./Header.scss";
import AddNewListingModal from "../AddNewListingForm/AddNewListingForm";

class Header extends Component {
  state = {
    showAddModal: false,
  };

  showModal = () => {
    this.setState({ showAddModal: true });
  };

  cancelUpload = () => {
    this.setState({ showAddModal: false });
  };

  render() {
    return (
      <div>
        {this.state.showAddModal && (
          <AddNewListingModal cancelUpload={this.cancelUpload} />
        )}
        <header>
          <nav className="nav">
            <div className="nav__container">
              <div className="nav__column--brand">
                <img src={Logo} alt="website logo" />
              </div>

              <div className="nav__container--id">
                {/* <div>inbox</div>
                <div className="nav__container--user">
                  <img src={Logo} alt="profile" />
                  <div>username</div>
                </div> */}
                <button
                  className="nav__button"
                  onClick={() => this.showModal()}
                >
                  <p className="nav__copy--btn-icon">+</p>
                  <p className="nav__copy--btn-edit">add unit</p>
                </button>
                <img className="nav__avatar" src={Avatar} alt="avatar" />
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
