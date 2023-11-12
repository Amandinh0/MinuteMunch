import React from "react";
import {useNavigate} from "react-router-dom"; 

function DriverLayout(){

    const navigate = useNavigate(); 

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