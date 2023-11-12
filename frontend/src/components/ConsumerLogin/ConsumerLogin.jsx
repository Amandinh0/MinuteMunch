import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../LoginForm/Loginform";
import "../LoginForm/style.css"
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function ConsumerLayout() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    function RouteHome() {
      navigate('/');
   
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
   
    return <div>
      <Button className = "preLogin"
        onClick={togglePopup}
      >
      Click to Login
      </Button>
      <img src="./logo.png" alt = "logo" className = "munchpic" onClick = {RouteHome} />
      {isOpen && <Popup
        content={<>
          <div classname = "LoginBox">
            <b>Consumer Login</b>
            <p>
              <input type = "text" className = "username" name = "user" />
            </p>
            <p>
              <input type = "text" className = "password" name = "pass" />
            </p>
            <Button variant = "primary">Login</Button>
          </div>
        </>}
        handleClose={togglePopup}
      />}
    </div>
  }
}
export default ConsumerLayout