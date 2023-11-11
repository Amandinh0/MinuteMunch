import './styles/styles.css';
import SplitLayout from './components/SplitLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConsumerLayout from './pages/ConsumerLayout';
import DriverLayout from './pages/DriverLayout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/consumerHome" element={<ConsumerLayout />} />
        <Route path="/driverHome" element={<DriverLayout />} />
        <Route path="/" element={<SplitLayout />} />
      </Routes>
    </Router>
  );
}

export default App;

// edit
