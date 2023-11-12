import { useLocation, useNavigate } from "react-router-dom";
import OrdersAPI from "../../api/orders";
import { useState, useEffect } from "react";
import Order from "../../order";
import Housing from "../data/locations.json";
import "./jahja1234.css";

function ConsumerConfirmation({ post }) {
	// const [currentOrder, setOrder] = useState();

	// useEffect(() => {
	//   if (currentOrder) {
	//     postOrders(currentOrder.state);
	//   }
	// },[currentOrder])

	const [phoneNumber, setphoneNumber] = useState("");
	const [residenceHall, setresidencehall] = useState("");
	const [email, setemail] = useState("");
	const [name, setname] = useState("");

	const handleNumber = (event) => {
		setphoneNumber(event.target.value);
	};
	const handleHall = (event) => {
		setresidencehall(event.target.value);
	};
	const handleEmail = (event) => {
		setemail(event.target.value);
	};
	const handleName = (event) => {
		setname(event.target.value);
	};

	const navigate = useNavigate();

	const location = useLocation();
	const { food, drink, hall } = location.state;

    const parsedFood = JSON.parse(food);
    const parsedDrink = JSON.parse(drink); 
    const parsedHall = hall;


	const postOrder = (e) => {
		e.preventDefault();
		let residenceArea = null;
		let cost = 0;

		switch (residenceHall) {
			case "Brown":
			case "McNamara":
			case "Cashin":
				residenceArea = "Sylvan";
				break;

			case "Baker":
			case "Brett":
			case "Brooks":
			case "Butterfield":
			case "Chadbourne":
			case "Gorman":
			case "Greenough":
			case "Wheeler":
				residenceArea = "Central";
				break;

			case "Birch":
			case "Elm":
			case "Linden":
			case "Maple":
			case "OakHill":
			case "Sycamore":
				residenceArea = "Honors";
				break;

			case "Crabtree":
			case "Dwight":
			case "Hamlin":
			case "Johnson":
			case "Knowlton":
			case "Leach":
			case "Lewis":
			case "MaryLyon":
			case "Thatcher":
				residenceArea = "Northeast";
				break;

            case "Cance":
            case "Coolidge":
            case "Crampton":
            case "Emerson":
            case "James":
            case "Adams":
            case "QuincyAdams":
            case "Kennedy":
            case "MacKimmie":
            case "Melville":
            case "Moore":
            case "Patterson":
            case "Pierpont":
            case "Prince":
            case "Thoreau":
            case "Washington":
                residenceArea = "Southwest";
                break; 
            case "NAptA":
            case "NAptB":
            case "NAptC":
            case "NAptD":
                residenceArea = "NorthRes";
                break; 
            
            case "Dickinson":
            case "Field":
            case "Grayson":
            case "Webster":
                residenceArea = "OHill";
                break;
            
        }
        
        if(residenceArea === "Sylvan"|| residenceArea === "Northeast"||residenceArea==="NorthRes"){
            if(hall === "Berkshire" || hall=== "Hampshire"){
                cost = 6.32; 
            if(hall === "\"Berkshire\"" || hall=== "\"Hampshire\""){
                cost = 6.33; 
            }
            else if(hall === "Worcester"){
                cost = 3.75;
            }
            else{
                cost = 4.53;
            }
          }
        }
        else if(residenceArea ==="Southwest"){
            if(hall === "Berkshire" || hall === "Hampshire"){
                cost = 3.01; 
            }
            else if(hall === "Worcester"){
                cost = 6.23;
            }
            else{
                cost = 5.56;
            }
        }
        else if(residenceArea === "OHill"||residenceArea === "Central"){
            if(hall === "Berkshire" || hall === "Hampshire"){
                cost = 5.12; 
            }
            else if(hall === "Worcester"){
                cost = 4.90;
            }
            else{
                cost = 3.23;
            }
        }
        else{
            if(hall === "Berkshire" || hall === "Hampshire" || hall === "Worcester"){
                cost = 4.39; 
            }
            else{
                cost = 5.32;
            }
        }

        
        

        const pushOrder = new Order(residenceArea,residenceHall, parsedFood, parsedDrink, 3, '4:00', cost, phoneNumber, email, name, hall); 
        //"Northeast", "Leach", ["asdlifj", "lfkdna"], ["dasilfnd"], 3 , "4:00", 6.77, "030-933-0320", "TEST@umass.edu", "lfadksjf", "WOOO"
        console.log(pushOrder.state);

		post(pushOrder);

		navigate("/consumerHome/confirmation/checkout");
	};

    return (
      <div>
        <h1 className="helloh1">Confirmation Page</h1>
        {parsedFood.length > 0 && (
          <div>
            <h3 className="helloh3">From {parsedHall}</h3>
            <h2 className="helloh2">Food items:</h2>
            <ul className="ulul">
              {parsedFood.map((item, index) => (
                <li className="lil12" key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <h2>Drink</h2>
          <ul className="ulul">{parsedDrink}</ul>
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
        { <select
        id="residenceDropdown"
        value={residenceHall}
        onChange={handleHall}
      >
        <option value="">Select a residence</option>
        {Object.keys(Housing).map((residenceName) => (
          <option key={residenceName} value={residenceName}>
            {residenceName}
          </option>
        ))}
      </select>
      }
      <br></br>
      <button onClick={postOrder}>Order</button>
        {/* <label>
          Residence Hall:
          <input type="text" value={residenceHall} onChange={handleHall} />
        </label>
        <br></br>
        <br></br>
        <button onClick={postOrder}>Order</button> */}
      </div>

    );
}

export default ConsumerConfirmation;
