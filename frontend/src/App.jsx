import "./components/HomePage/style.module.css";
import "./styles.css";
import SplitLayout from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConsumerLayout from "./components/ConsumerLogin/ConsumerLogin";
import DriverLayout from "./components/DriverLogin/DriverLogin";
import Driver from "./components/DriverPage/DriverPage";
import {useEffect, useState} from "react";
import OrdersAPI from "./api/orders";

function App() {

  const [ordersList, setOrders] = useState([]);
  //const [currentOrder, setCurrentOrder] = useState();

  // async function fetchOrders() {
  //   try {
  //     const orderList = await OrdersAPI.fetchOrders();
  //   } catch (error) {
  //     alert("error in fetch orders");
  //   }
  // }

  const fetchOrders = async () =>{
    
    try
    {setOrders(OrdersAPI.fetchOrders());} 
    catch(err)
    {console.log(err);}
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  //useEffect(() =>)

	return (
		<Router>
			<Routes>
				<Route path="/consumerHome" element={<ConsumerLayout />} />
				<Route path="/driverHome" element={<DriverLayout />} />
				<Route path="/driverHome/driverPage" element={<Driver />} />
				<Route path="/" element={<SplitLayout />} />
			</Routes>
		</Router>
	);
}

export default App;

// edit
