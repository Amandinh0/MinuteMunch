import React from "react";
import "./OrderDetail.css";
import globalVariables from '../OrderListItem/globalVariables';
import {useNavigate} from "react-router-dom";

export default function OrderDetail()
{

    const sharedVariable = globalVariables.sharedVariable;
    const progressVariable = globalVariables.progressVariable;

    const navigate = useNavigate();

    const myStyles = {backgroundColor: '#ebe2c4'};
    
    function RouteOrder() {
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
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>General Tso Chicken</td>
                <td>2</td>
                <td>$20.00</td>
                <td>$40.00</td>
                </tr>
                <tr>
                <td>Chocolate Milk</td>
                <td>1</td>
                <td>$30.00</td>
                <td>$30.00</td>
                </tr>
                <tr>
                <td>Ice Tea</td>
                <td>2</td>
                <td>$25.00</td>
                <td>$50.00</td>
                </tr>
                <tr>
                <td>Turkey Sandwich</td>
                <td>3</td>
                <td>$5.00</td>
                <td>$15.00</td>
                </tr>
            </tbody>
            </table>

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <td>{sharedVariable}</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Delivery Location</th>
                    <td>Sylvan</td>
                </tr>
                <tr>
                    <th>Pickup Location</th>
                    <td>Frank Dining Hall</td>
                </tr>
                <tr>
                    <th>User Notes</th>
                    <td>It better taste good bro!</td>
                </tr>
                </tbody>
            </table>

            <div>
                <button onClick={RouteOrder} className="progress-button">
                Mark Order Completed
                </button>
            </div>

            <div class="total">
            <h3>$135.00</h3>
            </div>
        </div>

        </body>
        </html>
        </div>
    )

}