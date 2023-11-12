import './style.css'
import './style.module.css'
import React from "react";
 
const Popup = props => {
  return (
    // <div>
    // <head>
    
    //     <link rel="stylesheet" type="text/css" href="style.module.css"></link>
    // </head>
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>X</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;
