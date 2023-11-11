import OrderListItem from "../OrderListItem/OrderListItem";

function Driver() {
	return (
		<>
			<div>
				<h1>Pending Orders:</h1>
                <OrderListItem />
                <OrderListItem />
			</div>
		</>
	);
}

export default Driver;
