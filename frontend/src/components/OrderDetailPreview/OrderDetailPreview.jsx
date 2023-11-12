import React from "react";
import {useNavigate} from "react-router-dom";
import "./OrderDetailPreview.css";
import globalVariables from '../OrderListItem/globalVariables';

function OrderDetailPreview() {

  const sharedVariable = globalVariables.sharedVariable;
  const progressVariable = globalVariables.progressVariable;

  const navigate = useNavigate();

    function RouteHome() {
      navigate('/driverHome/driverPage/driverOrderPreview/driverOrder');
    }
    function RouteBack() {
      navigate('/driverHome/driverPage');
    }

  return (
    <html lang="en">
        <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Order Detail</title> 
        </head>
        <body>

        <header>
            <h1>Order Detail Preview</h1>
        </header>

        <div class="container">
            {/* <h2>Entree</h2> */}

            <table>
            <tbody>
                <tr>
                <th>Entree:</th>
                <td>MEAL</td>
                </tr>
                <tr>
                <th>Side1:</th>
                <td>MILK</td>
                </tr>
                <tr>
                <th>Side2:</th>
                <td>MILK</td>
                </tr>
                <tr>
                <th>Side3:</th>
                <td>MILK</td>
                </tr>
                <tr>
                <th>Side4:</th>
                <td>MILK</td>
                </tr>
                <tr>
                <th>Delivery Location:</th>
                <td>MILK</td>
                </tr>
                <tr>
                <th>Pickup Location:</th>
                <td>MILK</td>
                </tr>
            </tbody>
            </table>

            <div>
              <button onClick={RouteHome} className="accept-button">Accept Order</button><button onClick={RouteBack} className="reject-button">Reject Order</button>
            </div>

            <div class="total">
            <h3 class="money">$10.00</h3>
            </div>
        </div>

        </body>
        </html>
  ) 
  
}

export default OrderDetailPreview;