// import e from "express";
import React, { Component } from "react";
import Logo from "../../assets/logo/project-myna-logo.svg";
import Avatar from "../../assets/project-myna-avatar.jpg";

class Header extends Component {
  render() {
    return (
      <header>
        <nav class="nav">
          <div class="nav__container">
            <div class="nav__column--brand">
              <img src={Logo} alt="website logo" />
            </div>

            <div class="nav__container--id">
              {/* <div>inbox</div>
                <div class="nav__container--user">
                  <img src={Logo} alt="profile" />
                  <div>username</div>
                </div> */}
              <button class="nav__button">+</button>
              <img class="nav__avatar" src={Avatar} alt="avatar" />
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
