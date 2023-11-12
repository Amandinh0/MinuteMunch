import { useState } from "react";
import foodMenus from "../data/menus.json";
import DiningPopUp from "./DiningPopUp";

function ConsumerPage() {
	const [buttonPopup, setbuttonPopup] = useState(false);
	const [hallName, sethallName] = useState(null);
	const [hallString, setHallString] = useState(null);

	const wooClicked = () => {
		// <DiningPopUp hallName={foodMenus.Worcester} drinks={foodMenus.Drinks}/>
		sethallName(foodMenus.Worcester);
		setbuttonPopup(true);
		setHallString("Worcester");
	};
	const frankClicked = () => {
		sethallName(foodMenus.Franklin);
		setbuttonPopup(true);
		setHallString("Franklin");
	};

	const hampClicked = () => {
		sethallName(foodMenus.Hampshire);
		setbuttonPopup(true);
		setHallString("Hampshire");
	};

	const berkClicked = () => {
		sethallName(foodMenus.Berkshire);
		setbuttonPopup(true);
		setHallString("Berkshire");
	};

	return (
		<>
			<div className="button-grid">
				<div className="woo">
					<button className="button-diningwoo" onClick={wooClicked}>
						{" "}
						Worcester{" "}
					</button>
				</div>
				<div className="frank">
					<button className="button-diningfrank" onClick={frankClicked}>
						{" "}
						Franklin{" "}
					</button>
				</div>
				<div className="hamp">
					<button className="button-dininghamp" onClick={hampClicked}>
						{" "}
						Hampshire{" "}
					</button>
				</div>
				<div className="berk">
					<button className="button-diningberk" onClick={berkClicked}>
						{" "}
						Berkshire{" "}
					</button>
				</div>
				<DiningPopUp
					trigger={buttonPopup}
					setTrigger={setbuttonPopup}
					hall={hallName}
					drink={foodMenus.Drinks}
					hallName={hallString}
				/>
			</div>
		</>
	);
}

export default ConsumerPage;
