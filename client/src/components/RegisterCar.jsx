import React, { Component } from "react";
import axios from "axios";

class RegisterCar extends Component {
  // constructor
  constructor(props) {
    super(props);

    // initialize state
    this.state = {
      carid: "",
      caryear: "",
      carmake: "",
      carmodel: "",
      name: "",
      email: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    console.log(this.state);

    axios
      .post("/cars/register/json", this.state)
      .then((response) => {
        console.log(response);
        this.setState({
          carid: "",
          caryear: "",
          carmake: "",
          carmodel: "",
          name: "",
          email: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // declare variables to be used in the return
    const { carid, caryear, carmake, carmodel, name, email } = this.state;

    // return a form for the user to add a car to the database
    return (
      <div>
        <div className="addCarDisplay">
          <h2>Enter the car and owner information to be registered</h2>

          <form onSubmit={this.submitHandler}>
            <label for="formid">Car ID</label>
            <input
              id="formid"
              type="number"
              name="carid"
              placeholder="Car ID"
              value={carid}
              onChange={this.changeHandler}
              className="addCarInput"
            />
            <br></br>
            <label for="formyear">Year</label>
            <input
              id="formyear"
              type="number"
              name="caryear"
              placeholder="Year"
              value={caryear}
              onChange={this.changeHandler}
              className="addCarInput"
            />
            <br></br>
            <label for="formmake">Make</label>
            <input
              id="formmake"
              type="text"
              name="carmake"
              placeholder="Make"
              value={carmake}
              onChange={this.changeHandler}
              className="addCarInput"
            />
            <br></br>
            <label for="formmodel">Model</label>
            <input
              id="formmodel"
              type="text"
              name="carmodel"
              placeholder="Model"
              value={carmodel}
              onChange={this.changeHandler}
              className="addCarInput"
            />
            <br></br>
            <label for="formname">Name</label>
            <input
              id="formname"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.changeHandler}
              className="addCarInput"
            />
            <br></br>
            <label for="formemail">Email</label>
            <input
              id="formemail"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.changeHandler}
              className="addCarInput"
            />
            <br></br>
            <button type="submit" className="addCarButton">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// onClick={window.alert("Car regsitered")}

export default RegisterCar;
