import React, { useEffect, useState } from "react";

// used code from Adina to

// get the backend connecting

// export view cars page
function DisplayAll() {
  // initialize state variables to view data by class
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const [carid, setCarid] = useState("");

  // initialize state variables to view all data
  const [backendData, setBackendData] = useState([{}]);

  // function to get cars with the make and or model specified by user in form
  const submitHandler = (e) => {
    e.preventDefault();

    fetch(`/cars/display`)
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        console.log(backendData);
        console.log(response);
      });
  };

  // response.results ??

  // get all the cars from the database, initially
  useEffect(() => {
    fetch(`/cars/display`)
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  // return a table of all the cars or the cars specified by the make and/or model selected by the user
  return (
    <div className="container">
      {
        //console.log(backendData.results[0])
      }
      {typeof backendData.results === "undefined" ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <div className="carsDisplay">
            <h2>
              Enter in a specific Car ID to see only one car's information.
              <br></br>
              Enter in a make and model in the specified fields to see the cars
              with those specifications
            </h2>
            <form className="carsForm">
              <label for="formid">Car ID</label>
              <input
                id="formid"
                type="number"
                value={carid}
                placeholder="Car ID"
                onChange={(e) => setCarid(e.target.value)}
                className="carsInput"
              />
              <br></br>
              <label for="formmake">Make</label>
              <input
                id="formmake"
                type="text"
                value={make}
                placeholder="Make"
                onChange={(e) => setMake(e.target.value)}
                className="carsInput"
              />
              <br></br>
              <label for="formmodel">Model</label>
              <input
                id="formmodel"
                type="text"
                value={model}
                placeholder="Model"
                onChange={(e) => setModel(e.target.value)}
                className="carsInput"
              />
              <br></br>
            </form>

            <table className="carsTable">
              <tbody>
                <tr>
                  <th className="carsHeaderCell">Ranking</th>
                  <th className="carsHeaderCell">Car ID</th>
                  <th className="carsHeaderCell">Year</th>
                  <th className="carsHeaderCell">Make</th>
                  <th className="carsHeaderCell">Model</th>
                  <th className="carsHeaderCell">Total Score</th>
                  <th className="carsHeaderCell">Name</th>
                  <th className="carsHeaderCell">Email</th>
                </tr>

                {
                  // allow user to specify a make and model
                  make !== "" && model !== ""
                    ? backendData.results
                        .filter((car) =>
                          car.Car_ID.toLowerCase().startsWith(
                            carid.toLowerCase()
                          )
                        )
                        .filter((car) =>
                          car.Car_Make.toLowerCase().startsWith(
                            make.toLowerCase()
                          )
                        )
                        .filter((car) =>
                          car.Car_Model.toLowerCase().startsWith(
                            model.toLowerCase()
                          )
                        )
                        .map((car, i) => (
                          <tr key={i}>
                            <td className="carsCell">{car.Ranking}</td>
                            <td className="carsCell">{car.Car_ID}</td>
                            <td className="carsCell">{car.Year}</td>
                            <td className="carsCell">{car.Car_Make}</td>
                            <td className="carsCell">{car.Car_Model}</td>
                            <td className="carsCell">{car.Total_Score}</td>
                            <td className="carsCell">{car.Name}</td>
                            <td className="carsCell">{car.Email}</td>
                          </tr>
                        ))
                    : // allow user to specify a make
                    carid !== ""
                    ? backendData.results
                        .filter((car) =>
                          car.Car_ID.toLowerCase().startsWith(
                            carid.toLowerCase()
                          )
                        )
                        .map((car, i) => (
                          <tr key={i}>
                            <td className="carsCell">{car.Ranking}</td>
                            <td className="carsCell">{car.Car_ID}</td>
                            <td className="carsCell">{car.Year}</td>
                            <td className="carsCell">{car.Car_Make}</td>
                            <td className="carsCell">{car.Car_Model}</td>
                            <td className="carsCell">{car.Total_Score}</td>
                            <td className="carsCell">{car.Name}</td>
                            <td className="carsCell">{car.Email}</td>
                          </tr>
                        ))
                    : // allow user to specify a make
                    make !== ""
                    ? backendData.results
                        .filter((car) =>
                          car.Car_Make.toLowerCase().startsWith(
                            make.toLowerCase()
                          )
                        )
                        .map((car, i) => (
                          <tr key={i}>
                            <td className="carsCell">{car.Ranking}</td>
                            <td className="carsCell">{car.Car_ID}</td>
                            <td className="carsCell">{car.Year}</td>
                            <td className="carsCell">{car.Car_Make}</td>
                            <td className="carsCell">{car.Car_Model}</td>
                            <td className="carsCell">{car.Total_Score}</td>
                            <td className="carsCell">{car.Name}</td>
                            <td className="carsCell">{car.Email}</td>
                          </tr>
                        ))
                    : // allow user to specify an model
                    model !== ""
                    ? backendData.results
                        .filter((car) =>
                          car.Car_Model.toLowerCase().startsWith(
                            model.toLowerCase()
                          )
                        )
                        .map((car, i) => (
                          <tr key={i}>
                            <td className="carsCell">{car.Ranking}</td>
                            <td className="carsCell">{car.Car_ID}</td>
                            <td className="carsCell">{car.Year}</td>
                            <td className="carsCell">{car.Car_Make}</td>
                            <td className="carsCell">{car.Car_Model}</td>
                            <td className="carsCell">{car.Total_Score}</td>
                            <td className="carsCell">{car.Name}</td>
                            <td className="carsCell">{car.Email}</td>
                          </tr>
                        ))
                    : // if user does not specify a make or model, display all cars
                      backendData.results.map((car, i) => (
                        <tr key={i}>
                          <td className="carsCell">{car.Ranking}</td>
                          <td className="carsCell">{car.Car_ID}</td>
                          <td className="carsCell">{car.Year}</td>
                          <td className="carsCell">{car.Car_Make}</td>
                          <td className="carsCell">{car.Car_Model}</td>
                          <td className="carsCell">{car.Total_Score}</td>
                          <td className="carsCell">{car.Name}</td>
                          <td className="carsCell">{car.Email}</td>
                        </tr>
                      ))
                }
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div id="allcars"></div>
    </div>
  );
}

export default DisplayAll;
