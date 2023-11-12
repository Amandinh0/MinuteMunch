import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../LoginForm/Loginform";
import "../LoginForm/style.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DriverLayout = () => {
	const navigate = useNavigate();

	function RouteHome() {
		navigate("/");
	}

	function RouteNext() {
		navigate("/driverHome/driverPage");
	}

	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			style={{
				backgroundColor: "#EBE2C4",
				height: "100vh",
				position: "relative",
			}}
		>
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
					zIndex: 0,
					objectFit: "cover",
					opacity: 0.1,
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
				src="/logo.png"
				alt="logo"
				className="munchpic"
				onClick={RouteHome}
			/>
			{isOpen && (
				<Popup
					content={
						<>
							<form className="LoginBox">
								<b>Driver Login</b>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<div className="spacer"></div>
								<p>
									<input
										type="text"
										className="username"
										name="email"
										placeholder="Email"
									/>
								</p>
								<p>
									<input
										type="password"
										className="password"
										name="pass"
										placeholder="Password"
									/>
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
							</form>
						</>
					}
					handleClose={togglePopup}
				/>
			)}
		</div>
	);
};

export default DriverLayout;
