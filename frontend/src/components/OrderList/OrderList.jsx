import OrderListItem from "../OrderListItem/OrderListItem";
import s from "./style.module.css";

function OrderList({ orderList, onClickItem }) {
	return (
		<div>
			<div className={s.title}>You'll probably like :</div>
			<div className={s.list}>
				{orderList.map((order) => {
					console.log("item created");
					return (
						<span className={s.order_item} key={order.email}>
							<OrderListItem itemClicked={onClickItem} order={order} />
						</span>
					);
				})}
			</div>
		</div>
	);
}

export default OrderList;
