import { useNavigate } from "react-router-dom";

function ConsumerLayout(){

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

        navigate('/consumerHome/consumerPage');
    }



    return(
        <>
        <div>
            <h1>Customer Login Page</h1>
            <div className="customer-layout">
                <div className="loginpopup">
                    {/* Button for the login pop up */}
                    <button onClick={loginpopup}>Login</button>
                </div>
            </div>
        </div>
    </>
    );
}

export default ConsumerLayout