import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../LoginForm/Loginform";
import "../LoginForm/style.css"

function DriverLayout() {
    const [isOpen, setIsOpen] = useState(false);
   
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
   
    return <div>
      <input
        type="button"
        value="Click to Open Popup"
        onClick={togglePopup}
      />
      <p className = "para1">
        <input type = "text" className = "foo" name = "name" /> 
      </p>
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
            <button>Login</button>
          </div>
        </>}
        handleClose={togglePopup}
      />}
    </div>
  }

export default DriverLayout