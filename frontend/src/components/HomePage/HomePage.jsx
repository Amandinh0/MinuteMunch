import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SplitLayout = () => {
	const navigate = useNavigate();
	const [isLeftHovered, setIsLeftHovered] = useState(false);
	const [isRightHovered, setIsRightHovered] = useState(false);

	function routeConsumer() {
		navigate("/consumerHome");
	}

	function routeDriver() {
		navigate("/driverHome");
	}

	const leftStyle = {
		backgroundImage: `url("https://swartzlaw.com/wp-content/uploads/2022/05/Are-Food-Delivery-Drivers-More-Prone-to-Massachusetts-Distracted-Driving-Crashes-food-delivery-drivers.jpg")`,
		backgroundSize: "cover",
		backgroundColor: "tan",
		backgroundBlendMode: "screen",
		filter: isLeftHovered ? "none" : "blur(5px)",
	};

	const rightStyle = {
		backgroundImage: `url("https://people.com/thmb/fybOj-ImWw2cqJg9tFn3aMV1vKE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/50-foods-kevin-hart-092022-856e0ffe414a406e8f2060345303ac5c.jpg")`,
		backgroundSize: "cover",
		backgroundColor: "maroon",
		backgroundBlendMode: "screen",
		filter: isRightHovered ? "none" : "blur(5px)",
	};

	return (
		<section>
			<div
				className="left-half"
				style={leftStyle}
				onMouseEnter={() => setIsLeftHovered(true)}
				onMouseLeave={() => setIsLeftHovered(false)}
			>
				<button type="button" id="left-button" onClick={routeDriver}>
					Supply the Munch
				</button>
			</div>
			<div
				className="right-half"
				style={rightStyle}
				onMouseEnter={() => setIsRightHovered(true)}
				onMouseLeave={() => setIsRightHovered(false)}
			>
				<button type="button" id="right-button" onClick={routeDriver}>
					Want to Munch
				</button>
			</div>
		</section>
	);
};

export default SplitLayout;
