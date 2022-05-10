import React from "react";

import NavBar from "../components/NavBar";
import RegisterCar from "../components/RegisterCar";

export default function Register() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <h1>this is the page to register cars</h1>

      <div>
        <RegisterCar />
      </div>
    </div>
  );
}
