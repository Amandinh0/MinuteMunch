import React from "react";
import {useNavigate} from "react-router-dom";
import "./OrderDetailPreview.css";
import globalVariables from '../OrderListItem/globalVariables';

function OrderDetailPreview({ order, onClickItem }) {
	console.log("from Detail", order);
	const sharedVariable = globalVariables.sharedVariable;
	const progressVariable = globalVariables.progressVariable;
	const navigate = useNavigate();
	function RouteHome() {
		navigate("/");
	}
	function RouteBack() {
		navigate("/driverHome/driverPage");
	}

	function RouteNext() {
		onClickItem(order);
		navigate("/driverHome/driverPage/driverOrderPreview/driverOrder");
	}

	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8"></meta>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>
				<title>Order Detail</title>
			</head>
			<body style={{ backgroundColor: "#EBE2C4" }}>
			<div className='munchdiv'>
				<img
					src="/logo.png"
					alt="logo"
					className="munchpic"
					onClick={RouteHome}
				/>
			</div>
				<div class="container">
					{/* <h2>Entree</h2> */}

            <table>
            <tbody>
                <tr>
                <th>Entree1:</th>
                <td>{order.foodList[0] == null ? "None" : order.foodList[0]}</td>
                </tr>
                <tr>
                <th>Entree2:</th>
                <td>{order.foodList[1] == null ? "None" : order.foodList[1]}</td>
                </tr>
                <tr>
                <th>Entree2:</th>
                <td>{order.foodList[2] == null ? "None" : order.foodList[2]}</td>
                </tr>
                <tr>
                <th>Drink:</th>
                <td>{order.drink == null ? "None" : order.drink}</td>
                </tr>
                <tr>
                <th>Delivery Location:</th>
                <td>{order.location.residenceHall}</td>
                </tr>
                <tr>
                <th>Pickup Location:</th>
                <td>{order.diningHall}</td>
                </tr>
            </tbody>
            </table>

            <div className="zzzzz">
              <button onClick={RouteNext} className="accept-button">Accept Order</button>
              <button onClick={RouteBack} className="reject-button">Reject Order</button>
            </div>

					<div class="total">
						<h3 class="money">${order.payout}</h3>
					</div>
				</div>
			</body>
		</html>
	);
}

export default OrderDetailPreview;
