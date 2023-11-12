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

  const [passsList, setPassList] = useState([]);
  const [authRequest, setRequest] = useState(false);
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ordersList, setOrders] = useState([]);
  const [postOrder, setPostOrder] = useState(null);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [deletedOrder, setDeleteOrder] = useState(null);
  const [changeOrder, setChangeOrder] = useState(null);

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

  const getPasswords = async email => {
    try {
      let passLister = [];
      passLister[0] = await OrdersAPI.getUserPassword("afairbanks@umass.edu");
      passLister[1] = await OrdersAPI.getUserPassword("samuelnewman@umass.edu");
      passLister[2] = await OrdersAPI.getUserPassword("irapko@umass.edu");
      passLister[3] = await OrdersAPI.getUserPassword("skale@umass.edu");
      passLister[4] = await OrdersAPI.getUserPassword("amanchhetri@umass.edu");
      console.log(passLister);
      setPassList(passLister);
    } catch (err) {
      console.log(err);
    }
  };

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
    getPasswords(email)
  }, [changeOrder]); //refresh when root back to home

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

  useEffect(() => {
    let loop = 0;
    while (loop < 5) {
      console.log(passsList[loop]);
        if (password == passsList[loop]) {
            loop = 5;
            setAuth(true);
        }
        loop += 1;
    }
  }, [authRequest]);


	return (
		<Router>
			<Routes>
        <Route path="/consumerHome/confirmation/checkout" element={<Checkout />} />
				<Route path="/consumerHome/confirmation" element={<ConsumerConfirmation post={setPostOrder} />} />
				<Route path="/consumerHome" element={<ConsumerLayout />} />
				<Route path="/driverHome" element={<DriverLayout passList={passsList} setReq={setRequest} setEmailStr={setEmail} setPassStr={setPassword} />} />
				<Route path="/driverHome/driverPage" element={<DriverPage orderList={ordersList} onClickPage={setCurrentOrder} />} />
        <Route path="/driverHome/driverPage/driverOrderPreview" element={<OrderDetailPreview order={currentOrder} onClickItem={setDeleteOrder}/>} />
        <Route path="/driverHome/driverPage/driverOrderPreview/driverOrder" element={<OrderDetail order={currentOrder} onClickItem={setChangeOrder}/>} />
				<Route path="/consumerHome/consumerPage" element={<ConsumerPage />} />
				<Route path="/" element={<SplitLayout />} />
			</Routes>
		</Router>
	);
}

export default App;

// edit
