import React, { useState } from "react";
import axios from "axios";

// component to update a car in the database
export default function UpdateCar() {
  // initialize state variables
  const [score, setScore] = useState("");
  const [ranking, setRanking] = useState("");

  const [carid, setCarID] = useState("");

  // function to update a car using the provided data
  const submitHandler = (e) => {
    e.preventDefault();

    // set data to be an object with the year, make, and model
    const data = {
      carid: carid,
      score: score,
      ranking: ranking,
    };

    // update the owner using the provided data then clear the input fields in the form
    axios
      .patch(`/cars/update/json`, data)
      .then((response) => {
        console.log(data);
        console.log(response);
        setCarID("");
        setScore("");
        setRanking("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // return a form to be used to update a car in the database
  return (
    <div className="container">
      <div className="updateCarContainer">
        <h2>
          Enter the CarId of the car you would like to update followed by the
          cars new score and ranking
        </h2>

        <form onSubmit={submitHandler}>
          <label for="formid">Car ID</label>
          <input
            id="formid"
            type="number"
            value={carid}
            onChange={(e) => setCarID(e.target.value)}
            placeholder="Car ID"
            className="updateCarInput"
          />
          <br></br>
          <label for="formscore">Score</label>
          <input
            id="formscore"
            type="number"
            value={score}
            placeholder="Score"
            onChange={(e) => setScore(e.target.value)}
            className="updateCarInput"
          />
          <br></br>
          <label for="formranking">Ranking</label>
          <input
            id="formranking"
            type="number"
            value={ranking}
            placeholder="Ranking"
            onChange={(e) => setRanking(e.target.value)}
            className="updateCarInput"
          />
          <br></br>

          <button type="submit" className="updateCarButton">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
