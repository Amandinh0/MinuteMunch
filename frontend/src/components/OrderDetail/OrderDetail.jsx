import React from "react";
import "./OrderDetail.css";
import globalVariables from '../OrderListItem/globalVariables';
import {useNavigate} from "react-router-dom";

export default function OrderDetail({order, onClickItem})
{

    const sharedVariable = globalVariables.sharedVariable;
    const progressVariable = globalVariables.progressVariable;

    const navigate = useNavigate();

    const myStyles = {backgroundColor: '#ebe2c4'};
    
    function RouteOrder() {
        onClickItem(order);
        navigate('/driverHome/driverPage');
    }

    return (
        <div
			style={{
				backgroundColor: "#EBE2C4",
			}}
		>
        <html lang="en">
        <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Order Detail</title> 
        </head>
        <body style={myStyles}>

        <header>
            <h1>Order Detail Page</h1>
        </header>

        <div class="container">
            <h2>Order #312: {progressVariable}</h2>

            <table>
            <thead>
                <tr>
                <th>Item</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{order.foodList[0] == null ? "None" : order.foodList[0]}</td>
                </tr>
                <tr>
                <td>{order.foodList[1] == null ? "None" : order.foodList[1]}</td>
                </tr>
                <tr>
                <td>{order.foodList[2] == null ? "None" : order.foodList[2]}</td>
                </tr>
                <tr>
                <td>{order.drink == null ? "None" : order.drink}</td>
                </tr>
            </tbody>
            </table>

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <td>{order.name}</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Delivery Location</th>
                    <td>{order.location.residenceHall}</td>
                </tr>
                <tr>
                    <th>Pickup Location</th>
                    <td>{order.diningHall}</td>
                </tr>
                <tr>
                    <th>User Notes</th>
                    <td>It better taste good bro!</td>
                </tr>
                <tr>
                    <th>Phone Number</th>
                    <td>{order.phoneNumber}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{order.email}</td>
                </tr>
                </tbody>
            </table>

            <div>
                <button onClick={RouteOrder} className="progress-button">
                Mark Order Completed
                </button>
            </div>

            <div class="total">
            <h3>${order.payout}  |   {order.diningSwipes} Dining Swipes</h3>
            </div>
        </div>

        </body>
        </html>
        </div>
    )

}