import OrderListItem from "../OrderListItem/OrderListItem";
import OrderList from "../OrderList/OrderList";

function DriverPage({orderList}) {
	return (
		<>
			<div>
				<h1>Pending Orders:</h1>
                <OrderList orderList={orderList}/>
			</div>
		</>
	);
}

export default DriverPage;
