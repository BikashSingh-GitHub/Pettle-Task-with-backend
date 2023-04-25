import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidenav from './components/Sidenav';
import Topnav from './components/topnav';
import Home from './components/Home';
import './App.css';
// import TravelBookNow from './pages/TravelBookNow';
// import DestinationPage from './components/DestinationPage';
// import Footer from './components/Footer';
// import DestinationPage1 from './components/DestinationPage1';
// import PlanTrip from './components/PlanTrip';
// import Signup from './components/Signup';


function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="home-container">
          <div className="side-nav">
            <Sidenav/>
          </div>
          <div className="top-nav">
            <Topnav/>
          </div>
          <div className="home-content">
            <Home/>
          </div>
        </div>
        <Routes>
          <Route path="/Sidenav" element={<Sidenav />} />
          <Route path="/Topnav" element={<Topnav />} />
          <Route path="/Home" element={<Home/>} />
          {/* <Route path="/TravelBookNow" element={<TravelBookNow/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/destinationpage" element={<DestinationPage />} />
          <Route path="/PlanTrip" element={<PlanTrip/>} />
          <Route path="/destinationpage1/" element={<DestinationPage1 />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
