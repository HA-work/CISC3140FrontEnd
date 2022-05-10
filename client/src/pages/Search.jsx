import React, { Component } from "react";

import NavBar from "../components/NavBar";

import axios from "axios";

import cors from "cors";

import DisplayAll from "../components/DisplayAll";

export default function Search() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <h1>this is the search page</h1>

      <DisplayAll />
    </div>
  );
}
//    <CarSearch />
