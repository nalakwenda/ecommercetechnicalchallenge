import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes />
        </div>
      </Router>
    </>
  );
}

export default App;
