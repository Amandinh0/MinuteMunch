import OrderListItem from "../OrderListItem/OrderListItem";
import OrderList from "../OrderList/OrderList";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DriverPage({orderList, onClickPage}) {
	const navigate = useNavigate();

	function RouteHome() {
		navigate("/");
	}
	return (
		<>
			<div>
				<h1>Pending Orders:</h1>
                <OrderList orderList={orderList} onClickItem={onClickPage}/>
			</div>
			<img
				src="/logo.png"
				alt="logo"
				className="munchpic"
				onClick={RouteHome}
			/>
		</>
	);
}

export default DriverPage;
