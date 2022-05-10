import React, { Component } from "react";
import axios from "axios";

import cors from "cors";

import { BrowserRouter, Route, Link } from "react-router-dom";

import "./Nav.css";

// maybe just use list and remove match

class NavBar extends Component {
  // render

  // npm start can take some time
  // some times need to cancel and restart a couple of times

  render() {
    return (
      <div>
        <nav>
          <div class="topnav">
            <a class="active" href="http://localhost:3000/">
              Home
            </a>
            <a href="http://localhost:3000/Register">Register</a>
            <a href="http://localhost:3000/Search">Search</a>
            <a href="http://localhost:3000/Update">Update</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
