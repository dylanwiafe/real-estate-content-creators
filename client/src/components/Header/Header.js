// import e from "express";
import React, { Component } from "react";
import Logo from "../../assets/logo/project-myna-logo.svg";
import Avatar from "../../assets/project-myna-avatar.jpg";
import "./Header.scss";
class Header extends Component {
  render() {
    return (
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
              <button className="nav__button">
                <p className="nav__copy--btn-icon">+</p>
                <p className="nav__copy--btn-edit">add unit</p>
              </button>
              <img className="nav__avatar" src={Avatar} alt="avatar" />
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
