import { useLocation, useNavigate } from "react-router-dom";
import OrdersAPI from "../../api/orders";
import { useState, useEffect } from "react";
import Order from "../../order";

function ConsumerConfirmation({post}){

  // const [currentOrder, setOrder] = useState();

  // useEffect(() => {
  //   if (currentOrder) {
  //     postOrders(currentOrder.state);
  //   }
  // },[currentOrder])



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
    const { food, drink, hall } = location.state;

    const parsedFood = JSON.parse(food);
    const parsedDrink = JSON.parse(drink); 
    const parsedHall = JSON.parse(hall);

    const payout = 0.33

    const postOrder = e => {
        e.preventDefault();
        const pushOrder = new Order("residenceArea",residenceHall, parsedFood, parsedDrink, 3, '4:00', 0.77, phoneNumber, email , name, hall); 
        //"Northeast", "Leach", ["asdlifj", "lfkdna"], ["dasilfnd"], 3 , "4:00", 6.77, "030-933-0320", "TEST@umass.edu", "lfadksjf", "WOOO"
        console.log(pushOrder.state);

        post(pushOrder);

        navigate('/consumerHome/confirmation/checkout');
    }

    return (
      <div>
        <h1>Confirmation Page</h1>
        {parsedFood.length > 0 && (
          <div>
            <h3>From {parsedHall}</h3>
            <h2>Food items:</h2>
            <ul>
              {parsedFood.map((item, index) => (
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
