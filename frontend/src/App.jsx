import "./components/HomePage/style.module.css";
import "./styles.css";
import SplitLayout from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConsumerLayout from "./components/ConsumerLogin/ConsumerLogin";
import DriverLayout from "./components/DriverLogin/DriverLogin";
import Driver from "./components/DriverPage/DriverPage";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {

const [colorCustomer, changeColor] = useState("#FDF4E3");
const [colorDriver, changeDriveColor] = useState("#390000");
	return (
    // <div className = "all">
      <Router>
        <Routes>
            <Route path="/consumerHome" element={<ConsumerLayout />} />
            <Route path="/driverHome" element={<DriverLayout />} />
            <Route path="/driverHome/driverPage" element={<Driver />} />
          <Route path="/" element={<SplitLayout />} />
        </Routes>
      </Router>
    // </div>
	);
}

export default App;

// edit
