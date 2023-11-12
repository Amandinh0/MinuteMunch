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
    function loginpopup(){
        let userInput = '';
        let userInput2 = '';
        let a = 1;

        while (userInput === '' && a === 1)
        {
            userInput = prompt('Enter Username:');
            if(userInput === null)
            {
                a = 0;
            }
        }
        console.log('Username entered:', userInput);

        while (userInput2 === '' && a === 1) 
        {
            userInput2 = prompt('Enter Password:');
            if(userInput2 === null)
            {
                a = 0;
            }
        }
        console.log('Password entered:', userInput2);

        if(a === 1)
        {
            navigate('/driverHome/driverPage');
        }
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
      <img src="/logo.png" alt = "logo" className = "munchpic" onClick = {RouteHome} />
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
}
export default DriverLayout;