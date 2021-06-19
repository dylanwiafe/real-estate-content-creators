import React, { Component } from "react";
import "../../pages/Dashboard/Dashboard.scss";

class ServiceCardGrid extends Component {
  render() {
    return (
      <div>
        <div className="service__container--title">
          <h1 className="service__heading">Hire a contractor</h1>
        </div>
        <div className="service__grid">
          <div className="service__card">
            <p className="card__heading">lorem ipsum</p>
            <p className="card__copy">lorem ipsum dolor</p>
          </div>

          <div className="service__card">
            <p className="card__heading">lorem ipsum</p>
            <p className="card__copy">lorem ipsum dolor</p>
          </div>
          <div className="service__card">
            <p className="card__heading">lorem ipsum</p>
            <p className="card__copy">lorem ipsum dolor</p>
          </div>
          <div className="service__card--lg">
            <p className="card__heading">lorem ipsum</p>
            <p className="card__copy">lorem ipsum dolor</p>
          </div>
          <div className="service__card--lg-2">
            <p className="card__heading">lorem ipsum</p>
            <p className="card__copy">lorem ipsum dolor</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ServiceCardGrid;
