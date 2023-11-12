import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderDetailPreview.css";
import globalVariables from "../OrderListItem/globalVariables";

function OrderDetailPreview({ order, onClickItem }) {
	console.log("from Detail", order);
	const sharedVariable = globalVariables.sharedVariable;
	const progressVariable = globalVariables.progressVariable;
	const navigate = useNavigate();
	function RouteHome() {
		navigate("/driverHome/driverPage/driverOrderPreview/driverOrder");
	}
	function RouteBack() {
		navigate("/driverHome/driverPage");
	}

	function RouteHome() {
		onClickItem(order);
		navigate("/driverHome/driverPage/driverOrderPreview/driverOrder");
	}
	function RouteBack() {
		navigate("/driverHome/driverPage");
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
			<body>
				<header>
					<h1>Order Detail Preview</h1>
					<img
						src="/logo.png"
						alt="logo"
						className="munchpic"
						onClick={RouteHome}
					/>
				</header>

				<div class="container">
					{/* <h2>Entree</h2> */}

					<table>
						<tbody>
							<tr>
								<th>Entree1:</th>
								<td>
									{order.foodList[0] == null ? "None" : order.foodList[0]}
								</td>
							</tr>
							<tr>
								<th>Entree2:</th>
								<td>
									{order.foodList[1] == null ? "None" : order.foodList[1]}
								</td>
							</tr>
							<tr>
								<th>Entree2:</th>
								<td>
									{order.foodList[2] == null ? "None" : order.foodList[2]}
								</td>
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

					<div class="total">
						<h3 class="money">{order.payout}</h3>
					</div>
				</div>
				<div>
					<div class="total">
						<h3 class="money">$10.00</h3>
					</div>
				</div>
			</body>
		</html>
	);
}

export default OrderDetailPreview;
