import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import HomepageUser from './components/User/HomepageUser/HomepageUser';
import Dashboardres from './components/AdminResturant/DashboardResturantAdmin/DashboardResturantAdmin';
import Layout from "./components/AdminResturant/Layout/layout"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user" element={<HomepageUser />} />
        <Route path="/dashboardres" element={<Dashboardres />}/>
        <Route path="/layout" element={<Layout />}/>
      </Routes>
    </Router>
  );
}

export default App;
