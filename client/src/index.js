import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Search from "./pages/Search.jsx";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Update from "./pages/Update";
import registerServiceWorker from "./registerServiceWorker";

// https://isotropic.co/react-multiple-pages/

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

//<Route path="/search" element={<Search />} />
//<Route path="/register" element={<Register />} />
//<Route path="/home" element={ <Home /> }>
