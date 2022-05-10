// needed a lot of trial and error to download the dependencies

// is there an easy way to do this?

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

//////////////////////////////////

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("lab2CarShow.db");

app.get("/cars/display", function (req, res) {
  const qyear = req.query.year || "";
  const qmake = req.query.make || "";

  // problem when sending strings
  // make does not work

  // problem with chaining
  // and quotation marks

  // depend on the user entering the quotation marks

  // remove the quotation marks from the data?

  //console.log(qmake);

  var results = [];

  var whereConditions = qyear === "" && qmake === "" ? "" : "WHERE ";

  if (qyear !== "") {
    whereConditions += `Year = ${qyear} `;
  }

  if (qmake !== "") {
    if (qyear !== "") {
      whereConditions += `AND Car_Make = "${qmake}" `;
    } else {
      whereConditions += `Car_Make = "${qmake}" `;
    }
  }

  db.serialize(function () {
    db.each(
      `SELECT * FROM Final_Car_Scores ${whereConditions}`,
      function (err, row) {
        results.push(row);
      },
      function () {
        res.send({ results: results });
      }
    );
  });
});

// get one car by ID
app.get("/cars/display/id/:id", function (req, res) {
  var results = [];
  db.serialize(function () {
    db.each(
      "SELECT * FROM Final_Car_Scores WHERE Car_ID =" + req.params.id,
      function (err, row) {
        results.push(row);
      },
      function () {
        res.send({ results: results });
      }
    );
  });
});

app.get("/cars/display/rank/:rank", function (req, res) {
  var results = [];
  db.serialize(function () {
    db.each(
      "SELECT * FROM Final_Car_Scores WHERE Ranking =" + req.params.rank,
      function (err, row) {
        results.push(row);
      },
      function () {
        res.send({ results: results });
      }
    );
  });
});

app.get("/cars/display/year/:year", function (req, res) {
  var results = [];
  db.serialize(function () {
    db.each(
      "SELECT * FROM Final_Car_Scores WHERE Year =" + req.params.year,
      function (err, row) {
        results.push(row);
      },
      function () {
        res.send({ results: results });
      }
    );
  });
});

// user needs quotation marks
app.get("/cars/display/make/:make", function (req, res) {
  var results = [];
  db.serialize(function () {
    db.each(
      `SELECT * FROM Final_Car_Scores WHERE Car_Make = "${req.params.make}"`,
      function (err, row) {
        results.push(row);
      },
      function () {
        res.send({ results: results });
      }
    );
  });
});

app.get("/cars/display/model/:model", function (req, res) {
  var results = [];
  db.serialize(function () {
    db.each(
      `SELECT * FROM Final_Car_Scores WHERE Car_Model = "${req.params.model}"`,
      function (err, row) {
        results.push(row);
      },
      function () {
        res.send({ results: results });
      }
    );
  });
});

////////////////////////////////////////////////////////////////////////////////////////////

// the register paths

// maybe should change the database to remove unique
// so it does not crash

// would be nice to add a way to know if an id is used
// entering a used id crashes the program

// req.body is for JSON

// req.params is for parameters

// req.query is for queries

// not sure of a good way to add register multiple records

app.post("/cars/register/json", (req, res, next) => {
  // not sure how to reduce the number of api endpoints
  // the registers all register but I gave them different paths
  // not sure how they would work together

  // used with insomnia or postman

  // maybe add the if conditions to build on it

  // user needs quotation marks

  // for JSON the user will need to escape the quotation marks

  // or I can add them on the back end

  // should remove the unique constraint

  const car_id = req.body.carid || "-1";
  const car_make = req.body.carmake || "-1";
  const car_model = req.body.carmodel || "-1";
  const email = req.body.email || "-1";
  const owner_name = req.body.name || "-1";
  const car_year = req.body.caryear || "-1";
  // req.body

  // or
  // req.params

  var sql = `INSERT INTO Final_Car_Scores (Car_ID, 
     Car_Make, Car_Model,
    Email,
    Name,
    Year) 
  VALUES (${car_id}, "${car_make}" , "${car_model}", "${email}", "${owner_name}", ${car_year})`;

  db.run(sql);
  res.send("Added record");
});

// post is not working with query and parameters on the browser end

app.post("/cars/register/query", (req, res, next) => {
  // not sure how to reduce the number of api endpoints

  const car_id = req.query.carid || "-1";
  const car_make = req.query.carmake || "-1";
  const car_model = req.query.carmodel || "-1";
  const email = req.query.email || "-1";
  const owner_name = req.query.name || "-1";
  const car_year = req.query.caryear || "-1";

  // need placeholders for the insert to work
  // the insert will not work with null values
  // tried using the string Placeholder but that caused problems
  // this seems to be the best way
  // numbers are safe placeholders because they are not confused with variables
  // req.body

  // or
  // req.params

  var sql = `INSERT INTO Final_Car_Scores (Car_ID, 
       Car_Make, Car_Model,
      Email,
      Name,
      Year) 
    VALUES (${car_id}, "${car_make}" , "${car_model}", "${email}", "${owner_name}", ${car_year})`;

  db.run(sql);
  res.send("Added record");
});

app.post(
  "/cars/register/parameters/:carid/:carmake/:carmodel/:email/:name/:caryear",
  (req, res, next) => {
    // not sure how to reduce the number of api endpoints

    // has difficulty with taking string values

    // this fix works but the data stored has quotation marks around it

    // for some reason my editor removes the () that I put around the adding the quotation marks

    // is the user supposed to put the quotation marks?

    // maybe put the burden on the user

    const car_id = req.params.carid || "-1";
    const car_make = req.params.carmake || "-1";
    const car_model = req.params.carmodel || "-1";
    const email = req.params.email || "-1";
    const owner_name = req.params.name || "-1";
    const car_year = req.params.caryear || "-1";
    // req.body

    // or
    // req.params

    // having touble with parameters/a/b/c
    // it needs the string to be in quotation marks
    // maybe add them
    // meybe there ia a better way

    // adding quotation marks around it fixes it
    // the sql command is confusing the value sent a
    // with a column or variable a

    var sql = `INSERT INTO Final_Car_Scores (Car_ID, 
       Car_Make, Car_Model,
      Email,
      Name,
      Year) 
    VALUES (${car_id}, "${car_make}" , "${car_model}", "${email}", "${owner_name}", ${car_year})`;

    db.run(sql);
    res.send("Added record");
  }
);
// left the ones that should be numbers

// patch is for updating
// put is for replacing

// removed the unique constarint to stop the program from crashing when entering in a used id

//////////////////////////////////////////////////////////////////////

// updating the records

app.patch("/cars/update/json", (req, res, next) => {
  // not sure how to reduce the number of api endpoints
  // the registers all register but I gave them different paths
  // not sure how they would work together

  // used with insomnia or postman
  //const car_id = "'" + String(req.params.carid) + "'" || "-1";
  const car_id = req.body.carid || "";
  // removed the quotation marks because carID should be a number
  // this causes problems for vip cars for example
  // but it is better this way

  // need to use escape characters when dealing with the quotes in json

  const score = req.body.score || "";
  const ranking = req.body.ranking || "";

  // req.body

  // or
  // req.params

  var insertValues = "";
  if (score !== "") {
    insertValues += `Total_Score = ${score} `;
  }
  if (ranking !== "") {
    if (score !== "") {
      insertValues += `, Ranking = ${ranking} `;
    } else {
      insertValues += `Ranking = ${ranking} `;
    }
  }

  // made an esle to not use the commma
  // not sure if it matters

  var sql = `UPDATE Final_Car_Scores SET 
    ${insertValues}
    WHERE Car_ID = ${car_id}`;

  if (car_id == "") {
    res.send("Must enter an id");
  } else {
    db.run(sql);
    res.send("Updated record");
  }
});

app.patch("/cars/update/query", (req, res, next) => {
  // not sure how to reduce the number of api endpoints
  // the registers all register but I gave them different paths
  // not sure how they would work together

  // used with insomnia or postman
  //const car_id = "'" + String(req.params.carid) + "'" || "-1";
  const car_id = req.query.carid || "";
  // removed the quotation marks because carID should be a number
  // this causes problems for vip cars for example
  // but it is better this way

  // need to use escape characters when dealing with the quotes in json

  const score = req.query.score || "";
  const ranking = req.query.ranking || "";

  // req.body

  // or
  // req.params

  var insertValues = "";
  if (score !== "") {
    insertValues += `Total_Score = ${score} `;
  }
  if (ranking !== "") {
    if (score !== "") {
      insertValues += `, Ranking = ${ranking} `;
    } else {
      insertValues += `Ranking = ${ranking} `;
    }
  }

  // made an esle to not use the commma
  // not sure if it matters

  var sql = `UPDATE Final_Car_Scores SET 
    ${insertValues}
    WHERE Car_ID = ${car_id}`;

  if (car_id == "") {
    res.send("Must enter an id");
  } else {
    db.run(sql);
    res.send("Updated record");
  }
});

app.patch(
  "/cars/update/parameters/:carid/:score/:ranking",
  (req, res, next) => {
    // not sure how to reduce the number of api endpoints
    // the registers all register but I gave them different paths
    // not sure how they would work together

    // used with insomnia or postman
    //const car_id = "'" + String(req.params.carid) + "'" || "-1";
    const car_id = req.params.carid || "";
    // removed the quotation marks because carID should be a number
    // this causes problems for vip cars for example
    // but it is better this way

    // need to use escape characters when dealing with the quotes in json

    const score = req.params.score || "";
    const ranking = req.params.ranking || "";

    // it seems parameters must be present in a url

    // req.body

    // or
    // req.params

    var insertValues = "";
    if (score !== "") {
      insertValues += `Total_Score = ${score} `;
    }
    if (ranking !== "") {
      if (score !== "") {
        insertValues += `, Ranking = ${ranking} `;
      } else {
        insertValues += `Ranking = ${ranking} `;
      }
    }

    // made an esle to not use the commma
    // not sure if it matters

    var sql = `UPDATE Final_Car_Scores SET 
    ${insertValues}
    WHERE Car_ID = ${car_id}`;

    if (car_id == "") {
      res.send("Must enter an id");
    } else {
      db.run(sql);
      res.send("Updated record");
    }
  }
);

///////////////////////////

app.listen(port, () => console.log(`Listening on port ${port}`));
