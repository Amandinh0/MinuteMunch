import "./components/HomePage/style.module.css";
import "./styles.css";
import SplitLayout from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConsumerLayout from "./components/ConsumerLogin/ConsumerLogin";
import DriverLayout from "./components/DriverLogin/DriverLogin";
import Driver from "./components/DriverPage/DriverPage";
import OrderDetail from "./components/OrderDetail/OrderDetail";
import ConsumerPage from "./components/ConsumerPage/ConsumerPage";
import ConsumerConfirmation from "./components/ConsumerConfirmation/ConsumerConfirmation";
import { React, useEffect, useState} from "react";
import OrdersAPI from "./api/orders";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Order from "./order";
import Checkout from "./components/ConsumerConfirmation/Checkout";
import OrderDetailPreview from "./components/OrderDetailPreview/OrderDetailPreview";
import DriverPage from "./components/DriverPage/DriverPage";


function App() {

  const [ordersList, setOrders] = useState([]);
  const [postOrder, setPostOrder] = useState(null);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [deletedOrder, setDeleteOrder] = useState(null);

  const fetchSingleOrder = async email => {
    try {
      setPostOrder(await OrdersAPI.fetchSingleOrder(email));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchOrders = async () =>{
    try
    {
      setOrders(await OrdersAPI.fetchOrders());
      console.log(ordersList);
    } 
    catch(err)
    {console.log(err);}
  };

  const deleteOrder = async email => {
    try {
      const response = await OrdersAPI.deleteOrder(email);
    } catch(err) {
      console.log(err);
    }
  };

  const getPassword = async email => {
    try {
      const response = await OrdersAPI.getUserPassword(email);
    } catch (err) {
      console.log(err);
    }
  }

  const postOrders = async order => {
    try {
      const response = await OrdersAPI.postOrder(order);
      console.log(response);
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []); //refresh when root back to home

  useEffect(() => {
    if (postOrder) {
      postOrders(postOrder.state);
    }
    // if (currentOrder) {
    //   const backdkd = new Order("Northeast", "Leach", ["asdlifj", "lfkdna"], ["dasilfnd"], 3 , "4:00", 6.77, "030-933-0320", "TEST@umass.edu", "lfadksjf", "WOOO");
    //   postOrders(backdkd.state);
    // }
  }, [postOrder]);

  useEffect(() => {
    if (deletedOrder) {
      deleteOrder(deletedOrder.email);
    }
  }, [deletedOrder]);

  

	return (
		<Router>
			<Routes>
        <Route path="/consumerHome/confirmation/checkout" element={<Checkout />} />
				<Route path="/consumerHome/confirmation" element={<ConsumerConfirmation post={setPostOrder} />} />
				<Route path="/consumerHome" element={<ConsumerLayout />} />
				<Route path="/driverHome" element={<DriverLayout />} />
				<Route path="/driverHome/driverPage" element={<DriverPage orderList={ordersList} onClickPage={setCurrentOrder} />} />
        <Route path="/driverHome/driverPage/driverOrderPreview" element={<OrderDetailPreview order={currentOrder} onClickItem={setDeleteOrder}/>} />
        <Route path="/driverHome/driverPage/driverOrderPreview/driverOrder" element={<OrderDetail />} />
				<Route path="/consumerHome/consumerPage" element={<ConsumerPage />} />
				<Route path="/" element={<SplitLayout />} />
			</Routes>
		</Router>
	);
}

export default App;

// edit
