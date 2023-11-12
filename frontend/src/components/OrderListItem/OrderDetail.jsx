import React from "react";
import "./OrderDetail.css";
import globalVariables from './globalVariables';

export default function OrderDetail() 
{

    const sharedVariable = globalVariables.sharedVariable;
    const progressVariable = globalVariables.progressVariable;

    return (
        <html lang="en">
        <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Order Detail</title> 
        </head>
        <body>

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
                <tr>
                    <th>QR Code</th>
                    <td><img src="QRCODE.jpg" alt="HELLO"></img></td>
                </tr>
                </tbody>
            </table>

            <div>
                <button className="progress-button">
                Mark Order Completed
                </button>
            </div>

            <div class="total">
            <strong>Total:</strong> $70.00
            </div>
        </div>

        </body>
        </html>
    )

}