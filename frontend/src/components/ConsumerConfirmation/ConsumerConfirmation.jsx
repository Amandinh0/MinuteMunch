import { useLocation, useNavigate } from "react-router-dom";
import OrdersAPI from "../../api/orders";
import { useState } from "react";
import Order from "../../order";



function ConsumerConfirmation(props){

    const [phoneNumber, setphoneNumber] = useState(''); 
    const [residenceHall, setresidencehall] = useState(''); 
    const [email, setemail] = useState(''); 
    const [name, setname] = useState('');

    const handleNumber = (event) =>{
        setphoneNumber(event.target.value); 
    }
    const handleHall = (event) =>{
        setresidencehall(event.target.value); 
    }
    const handleEmail = (event) =>{
        setemail(event.target.value); 
    }
    const handleName = (event) =>{
        setname(event.target.value); 
    }

    const navigate = useNavigate(); 

    

    const location = useLocation();
    const { breakfast, lunch, drink, hall } = location.state;

    const parsedBreakfast = JSON.parse(breakfast);
    const parsedLunch = JSON.parse(lunch);
    const parsedDrink = JSON.parse(drink); 
    const parsedHall = JSON.parse(hall);

    function postOrder(){

        const pushOrder = new Order("residenceArea",residenceHall, parsedBreakfast, parsedDrink, 3, '4:00', "$4", phoneNumber, email , name, hall); 
        console.log(pushOrder);
        navigate('/consumerHome/confirmation/checkout');

    }

    return (
      <div>
        <h1>Confirmation Page</h1>
        {parsedBreakfast.length > 0 && (
          <div>
            <h3>From {parsedHall}</h3>
            <h2>Breakfast items:</h2>
            <ul>
              {parsedBreakfast.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        ``
        {parsedLunch.length > 0 && (
          <div>
            <h2>Lunch items:</h2>
            <ul>
              {parsedLunch.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <h2>Drink</h2>
          <ul>{parsedDrink}</ul>
        </div>

        <label>
          Name:
          <input type="text" value={name} onChange={handleName} />
        </label>
        <br></br>
        <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={handleNumber} />
        </label>
        <br></br>
        <label>
          Umass Email:
          <input type="text" value={email} onChange={handleEmail} />
        </label>
        <br></br>
        <label>
          Residence Hall:
          <input type="text" value={residenceHall} onChange={handleHall} />
        </label>
        <br></br>
        <br></br>
        <button onClick={postOrder}>Order</button>
      </div>

      // <p>Breakfast items: {JSON.stringify(parsedBreakfast)}</p>
      //<p>Lunch items: {JSON.stringify(parsedLunch)}</p>
    );
}

export default ConsumerConfirmation; 
