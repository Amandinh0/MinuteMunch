import React from "react";
import {useNavigate} from "react-router-dom"; 

function DriverLayout(){

    const navigate = useNavigate(); 

    function loginpopup(){
        let userInput = '';
        let userInput2 = '';

        while (userInput === '' || userInput === null) 
        {
            userInput = prompt('Enter Username:');
        }
        console.log('Username entered:', userInput);

        while (userInput2 === '' || userInput2 === null) 
        {
            userInput2 = prompt('Enter Password:');
        }
        console.log('Password entered:', userInput2);

        navigate('/driverHome/driverPage');
    }

    return(
        
        <>
        <div>
            <h1>Driver Login Page</h1>
            <div className="driver-layout">
                <div className="loginpopup">
                    {/* Button for the login pop up */}
                    <button onClick={loginpopup}>Login</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default DriverLayout