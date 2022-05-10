import React from "react";

import NavBar from "../components/NavBar";
import UpdateCar from "../components/UpdateCar";

export default function Register() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <h1>this is the page to update cars</h1>

      <div>
        <UpdateCar />
      </div>
    </div>
  );
}
