import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../LoginForm/Loginform";
import "../LoginForm/style.css"
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const DriverLayout = () => {
    const navigate = useNavigate();

    function RouteHome() {
      navigate('/');
    }

    function RouteNext() {
      navigate('/driverHome/driverPage');
    }
    

    const [isOpen, setIsOpen] = useState(false);
   
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
   
    return <div>
      <Button className = "preLogin"
        value="Click to Open Popup"
        onClick={togglePopup}>
        Click to Login</Button>
      <img src="./logo.png" alt = "logo" className = "munchpic" onClick = {RouteHome} />
      {isOpen && <Popup
        content={<>
          <div classname = "LoginBox">
            <b>Driver Login</b>
            <p>
              <input type = "text" className = "username" name = "user" />
            </p>
            <p>
              <input type = "text" className = "password" name = "pass" />
            </p>
            <Button onClick={RouteNext} >Login</Button>
          </div>
        </>}
        handleClose={togglePopup}
      />}
    </div>
  }

export default DriverLayout