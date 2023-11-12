import OrderListItem from "../OrderListItem/OrderListItem";
import OrderList from "../OrderList/OrderList";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./style.css";

function DriverPage({ orderList, onClickPage }) {
	const navigate = useNavigate();

	function RouteHome() {
		navigate("/");
	}
	return (
		<>
			<div
				class="containers"
				style={{ height: "100vh", backgroundColor: "#ebe2c4" }}
			>
				<div className="button-grid">
					<OrderList orderList={orderList} onClickItem={onClickPage} />
				</div>
				<img
					src="/logo.png"
					alt="logo"
					className="munchpic"
					onClick={RouteHome}
				/>
			</div>
		</>
	);
}

export default DriverPage;
