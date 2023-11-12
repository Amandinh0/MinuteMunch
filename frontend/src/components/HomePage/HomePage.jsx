import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SplitLayout = () => {
	const navigate = useNavigate();
	const [hoveredSection, setHoveredSection] = useState(null);

	function routeDriver() {
		navigate("/driverHome");
	}

	function routeConsumer() {
		navigate("/consumerHome");
	}

	const sectionStyle = (section) => ({
		backgroundImage: `url("${
			section === "left"
				? "https://optimoroute.com/wp-content/uploads/2021/05/Delivery-Driver-Safety-Tips-HERO.jpg"
				: "https://people.com/thmb/fybOj-ImWw2cqJg9tFn3aMV1vKE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/50-foods-kevin-hart-092022-856e0ffe414a406e8f2060345303ac5c.jpg"
		}")`,
		backgroundSize: "cover",
		backgroundColor: section === "left" ? "tan" : "maroon",
		backgroundBlendMode: "screen",
		filter: hoveredSection && hoveredSection !== section ? "blur(5px)" : "none",
	});

	return (
		<section>
			<div
				className="left-half"
				style={sectionStyle("left")}
				onMouseEnter={() => setHoveredSection("left")}
				onMouseLeave={() => setHoveredSection(null)}
			>
				<button class="butn" onClick={routeDriver}>
					Become a Driver
				</button>
			</div>
			<div
				className="right-half"
				style={sectionStyle("right")}
				onMouseEnter={() => setHoveredSection("right")}
				onMouseLeave={() => setHoveredSection(null)}
			>
				<button class="butn" onClick={routeConsumer}>
					Want to Munch
				</button>
			</div>
		</section>
	);
};

export default SplitLayout;
