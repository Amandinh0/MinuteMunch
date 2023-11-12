import { useLocation } from "react-router-dom";

function ConsumerConfirmation(props) {
	const location = useLocation();
	const { breakfast, lunch } = location.state;

	const parsedBreakfast = JSON.parse(breakfast);
	const parsedLunch = JSON.parse(lunch);

	return (
		<>
			<h1>This is conusmer confirmation</h1>
			{/* <h1>{parsedBreakfast}</h1>
            <h1>{parsedLunch}</h1> */}
			<p>Breakfast items: {JSON.stringify(parsedBreakfast)}</p>
			<p>Lunch items: {JSON.stringify(parsedLunch)}</p>
		</>
	);
}

export default ConsumerConfirmation;
