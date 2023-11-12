import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../LoginForm/Loginform";
import "../LoginForm/style.css";
import { Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReCAPTCHA from "react-google-recaptcha";

const ConsumerLayout = ({setEmailStr, setPassStr, setReq, passList}) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
	const navigate = useNavigate();

	function RouteHome() {
		navigate("/");
	}

	function RouteNext() {        
        setEmailStr(email);
        setPassStr(pass)
        let loop = 0;
        let bool = false;
        while (loop < 5 && !bool) {
            if (passList[loop] == pass) {
                navigate("/consumerHome/consumerPage");
                bool = true;
            }
            loop += 1;
        }
        if (loop == 5) {
            alert("Invalid Username/Password");
        }
	}

	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

    function handleChangeEmail(e){
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    function handleChangePassword(e){
        console.log(e.target.value);
        setPass(e.target.value);
    }

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
							<form className="LoginBox">
								<b>Consumer Login</b>
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
                                        onChange={handleChangeEmail}
									/>
								</p>
								<p>
									<input
										type="password"
										className="password"
										name="pass"
										placeholder="Password"
                                        onChange={handleChangePassword}
									/>
								</p>
								<ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
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

export default ConsumerLayout;
