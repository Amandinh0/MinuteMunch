import "./components/HomePage/style.module.css";
import "./styles.css";
import SplitLayout from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConsumerLayout from "./components/ConsumerLogin/ConsumerLogin";
import DriverLayout from "./components/DriverLogin/DriverLogin";
import Driver from "./components/DriverPage/DriverPage";
<<<<<<< HEAD
import OrderDetail from "./components/OrderListItem/OrderDetail";
=======
import ConsumerPage from "./components/ConsumerPage/ConsumerPage";
import ConsumerConfirmation from "./components/ConsumerConfirmation/ConsumerConfirmation";
import {useEffect, useState} from "react";
import OrdersAPI from "./api/orders";
>>>>>>> e075796812bae2531c7b0ceced3e26c69793240f

function App() {

  const [ordersList, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState();

  const fetchSingleOrder = async email => {
    try {
      setCurrentOrder(await OrdersAPI.fetchSingleOrder(email));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchOrders = async () =>{
    try
    {setOrders(await OrdersAPI.fetchOrders());} 
    catch(err)
    {console.log(err);}
  };

  const postOrders = async order => {
    try {
      const response = await OrdersAPI.postOrder(order);
    } catch(err) {
      console.log(err);
    }
  };

  const deleteOrder = async email => {
    try {
      const response = await OrdersAPI.deleteOrder(email);
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    fetchSingleOrder();    
  }, []);

  

	return (
		<Router>
			<Routes>
				<Route path="/consumerHome/confirmation" element={<ConsumerConfirmation />} />
				<Route path="/consumerHome" element={<ConsumerLayout />} />
				<Route path="/driverHome" element={<DriverLayout />} />
				<Route path="/driverHome/driverPage" element={<Driver />} />
<<<<<<< HEAD
        <Route path="/driverHome/driverPage/driverOrder" element={<OrderDetail />} />
=======
				<Route path="/consumerHome/consumerPage" element={<ConsumerPage />} />
>>>>>>> e075796812bae2531c7b0ceced3e26c69793240f
				<Route path="/" element={<SplitLayout />} />
			</Routes>
		</Router>
	);
}

export default App;

// edit
