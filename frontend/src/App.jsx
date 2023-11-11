import "./components/HomePage/style.module.css";
import "./styles.css";
import SplitLayout from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConsumerLayout from "./components/ConsumerLogin/ConsumerLogin";
import DriverLayout from "./components/DriverLogin/DriverLogin";
import Driver from "./components/DriverPage/DriverPage";
import ConsumerPage from "./components/ConsumerPage/ConsumerPage";
import ConsumerConfirmation from "./components/ConsumerConfirmation/ConsumerConfirmation";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/consumerHome/confirmation" element={<ConsumerConfirmation />} />
				<Route path="/consumerHome" element={<ConsumerLayout />} />
				<Route path="/driverHome" element={<DriverLayout />} />
				<Route path="/driverHome/driverPage" element={<Driver />} />
				<Route path="/consumerHome/consumerPage" element={<ConsumerPage />} />
				<Route path="/" element={<SplitLayout />} />
			</Routes>
		</Router>
	);
}

export default App;

// edit
