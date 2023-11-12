import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function DiningPopUp(props) {
	const [breakfastItem, setbreakfastItem] = useState([]);
	const [lunchItem, setlunchItem] = useState([]);
	const [drinkItem, setdrinkItem] = useState("");
	const hallName = props.hallName;
	const navigate = useNavigate();

	const handleBreakfastChange = (item) => {
		if (breakfastItem.includes(item)) {
			// If item is already selected, remove it
			setbreakfastItem(
				breakfastItem.filter((selectedItem) => selectedItem !== item)
			);
		} else {
			// If item is not selected and the maximum selection limit is not reached, add it
			if (breakfastItem.length < 3) {
				setbreakfastItem([...breakfastItem, item]);
			}
		}
	};

	const handleLunchChange = (item) => {
		if (lunchItem.includes(item)) {
			// If item is already selected, remove it
			setlunchItem(lunchItem.filter((selectedItem) => selectedItem !== item));
		} else {
			// If item is not selected and the maximum selection limit is not reached, add it
			if (lunchItem.length < 3) {
				setlunchItem([...lunchItem, item]);
			}
		}
	};

	const handleDrink = (event) => {
		const selectedValue = event.target.value;
		setdrinkItem(selectedValue);
	};

	function AfterSubmit() {
		let list = null;
		if (breakfastItem.length > 0) {
			list = breakfastItem;
		} else {
			list = lunchItem;
		}
		navigate("/consumerHome/confirmation", {
			state: {
				food: JSON.stringify(list),
				drink: JSON.stringify(drinkItem),
				hall: JSON.stringify(hallName),
			},
		});
	}

	return props.trigger ? (
		<div className="popup">
			<div className="popup-inner">
				<h1>Breakfast Items</h1>
				{props.hall.Breakfast ? (
					<ul>
						{props.hall.Breakfast.map((item, index) => (
							<li key={index}>
								<label>
									<input
										type="checkbox"
										checked={breakfastItem.includes(item)}
										onChange={() => handleBreakfastChange(item)}
									/>
									{item}
								</label>
							</li>
						))}
					</ul>
				) : (
					<p>No Breakfast items available.</p>
				)}
			</div>
			<div className="popup-inner">
				<h1>Lunch Items</h1>
				{props.hall.Lunch ? (
					<ul>
						{props.hall.Lunch.map((item, index) => (
							<li key={index}>
								<label>
									<input
										type="checkbox"
										checked={lunchItem.includes(item)}
										onChange={() => handleLunchChange(item)}
									/>
									{item}
								</label>
							</li>
						))}
					</ul>
				) : (
					<p>No Lunch items available.</p>
				)}
			</div>
			<div className="popup-inner">
				<h1>Drinks</h1>
				{props.drink ? (
					<select
						class="select-dropdown"
						value={drinkItem}
						onChange={handleDrink}
					>
						<option value="">Select an drink</option>
						{props.drink.map((item, index) => (
							<option key={index} value={item}>
								{item}
							</option>
						))}
					</select>
				) : (
					<p>No Drinks Available</p>
				)}
			</div>
			<div className="submit-button">
				<div className="subbutton">
					<button onClick={AfterSubmit}>Submit</button>
				</div>
				<div className="closebutton">
					<button onClick={() => props.setTrigger(false)}>Close</button>
				</div>
			</div>
		</div>
	) : (
		""
	);
}

export default DiningPopUp;
