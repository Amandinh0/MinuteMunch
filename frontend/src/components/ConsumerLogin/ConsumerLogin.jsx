// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Popup from "../LoginForm/Loginform";
// import "../LoginForm/style.css";
// import { Button, Alert } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ConsumerLayout = () => {
// 	const navigate = useNavigate();

// 	function RouteHome() {
// 		navigate("/");
// 	}

// 	function RouteNext() {
// 		navigate("/consumerHome/consumerPage");
// 	}

// 	const [isOpen, setIsOpen] = useState(false);

// 	const togglePopup = () => {
// 		setIsOpen(!isOpen);
// 	};

// 	return (
// 		<div
// 			style={{
// 				backgroundColor: "#570000",
// 				height: "100vh",
// 				position: "relative",
// 			}}
// 		>
// 			\
// 			<div className="screen">
// 				<button
// 					className="preLogin"
// 					value="Click to Login"
// 					onClick={togglePopup}
// 				>
// 					Login
// 				</button>
// 			</div>
// 			<img
// 				src="/whitelogo.png"
// 				alt="logo"
// 				className="munchpic"
// 				onClick={RouteHome}
// 			/>
// 			<div className="background-image">
// 				<img
// 					src="/wave-abstract-lines-background-free-png-removebg.png"
// 					alt=""
// 				/>
// 			</div>
// 			{isOpen && (
// 				<Popup
// 					content={
// 						<>
// 							<div classname="LoginBox">
// 								<b>Driver Login</b>
// 								<p>
// 									<input type="text" className="username" name="user" />
// 								</p>
// 								<p>
// 									<input type="text" className="password" name="pass" />
// 								</p>
// 								<Button onClick={RouteNext}>Login</Button>
// 							</div>
// 						</>
// 					}
// 					handleClose={togglePopup}
// 				/>
// 			)}
// 		</div>
// 	);
// };

// export default ConsumerLayout;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../LoginForm/Loginform";
import "../LoginForm/style.css";
import { Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ConsumerLayout = () => {
	const navigate = useNavigate();

	function RouteHome() {
		navigate("/");
	}

	function RouteNext() {
		navigate("/consumerHome/consumerPage");
	}

	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			style={{
				backgroundColor: "#570000",
				height: "100vh",
				position: "relative",
			}}
		>
			{/* Background Image */}
			<img
				className="background-image"
				src="/waves.png"
				alt="Background"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					zIndex: 1,
					objectFit: "cover",
				}}
			/>

			<div className="screen">
				<button
					className="preLogin"
					onClick={togglePopup}
					style={{
						zIndex: 2,
					}}
				>
					Login
				</button>
			</div>

			<img
				src="/whitelogo.png"
				alt="logo"
				className="munchpic"
				onClick={RouteHome}
				style={{
					zIndex: 2,
				}}
			/>

			{isOpen && (
				<Popup
					content={
						<>
							<div className="LoginBox">
								<b>Driver Login</b>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<p>
									<input type="text" className="username" name="user" />
								</p>
								<p>
									<input type="password" className="password" name="pass" />
								</p>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="rightmove">
									<button className="btn btn-primary" onClick={RouteNext}>
										Login
									</button>
								</div>
							</div>
						</>
					}
					handleClose={togglePopup}
				/>
			)}
		</div>
	);
};

export default ConsumerLayout;
