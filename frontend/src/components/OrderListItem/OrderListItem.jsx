import React from "react";
//import {useNavigate} from "react-router-dom";

const OrderListItem = () => {
	//const navigate = useNavigate();

	function orderPopup() {
		alert("graden");
	}

	return (
		<div className="button-container">
			{/* Button for the order popup */}
			<button class="grid-button" onClick={orderPopup}>
				CLICK
			</button>{" "}
		</div>
	);
};

export default OrderListItem;
