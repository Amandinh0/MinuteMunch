import React from "react";
import {useNavigate} from "react-router-dom"; 



const SplitLayout = () => {
  const navigate = useNavigate(); 

  function routeConsumer(){
    navigate('/consumerHome');
  }

  function routeDriver(){
    navigate('/driverHome')
  }

    return (
      <div className="split-layout">
        <div className="left-half">
          {/* Button for the left half */}
          <button onClick={routeConsumer}>Left</button>
        </div>
        <div className="right-half">
          {/* Button for the right half */}
          <button onClick={routeDriver}>Right</button>
        </div>
      </div>
    );
  };

  
  
  
  export default SplitLayout;

