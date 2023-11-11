import React from "react";
import { useNavigate } from "react-router-dom";

const SplitLayout = () => {
	const navigate = useNavigate();

	function routeConsumer() {
		navigate("/consumerHome");
	}

	function routeDriver() {
		navigate("/driverHome");
	}

	return (
		<section>
			<div
				className="left-half"
				style={{
					backgroundImage: `url("https://optimoroute.com/wp-content/uploads/2021/05/Delivery-Driver-Safety-Tips-HERO.jpg")`,
					backgroundSize: "cover",
					backgroundColor: "tan",
					backgroundBlendMode: "screen",
				}}
			>
				<button type="button" id="left-button" onClick={routeDriver}>
					Become a Driver
				</button>
			</div>
			<div
				className="right-half"
				style={{
					backgroundImage: `url("https://people.com/thmb/fybOj-ImWw2cqJg9tFn3aMV1vKE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/50-foods-kevin-hart-092022-856e0ffe414a406e8f2060345303ac5c.jpg")`,
					backgroundSize: "cover",
					backgroundColor: "maroon",
					backgroundBlendMode: "screen",
				}}
			>
				<button type="button" id="right-button" onClick={routeDriver}>
					Want to Munch
				</button>
			</div>
		</section>
	);
};

export default SplitLayout;
