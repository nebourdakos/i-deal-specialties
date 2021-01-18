import React from "react";
import logo from "../assets/images/logo.png";
function Jumbotron({ title, body }) {
  return (
    <section id="header">
      <div className="grid-wrapper">
        <div className="col-3">
          <span className="image fit">
            <img src={logo} alt="" />
          </span>
        </div>
      </div>
      <div className="inner">
        <h1>{title}</h1>
        <p>{body}</p>
        <ul className="actions">
          <li>
            <a href="#one" className="button scrolly">
              Learn More
            </a>
          </li>
          <li>
            <a href="#four" className="button scrolly">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Jumbotron;
