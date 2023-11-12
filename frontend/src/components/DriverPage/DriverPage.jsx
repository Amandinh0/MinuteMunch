import OrderListItem from "../OrderListItem/OrderListItem";
import OrderList from "../OrderList/OrderList";

function DriverPage({orderList, onClickPage}) {
	return (
		<>
			<div>
				<h1>Pending Orders:</h1>
                <OrderList orderList={orderList} onClickItem={onClickPage}/>
			</div>
		</>
	);
}

export default DriverPage;
