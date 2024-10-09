import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import "./App.css";
import NavBar from "./Components/NavBar";
import SearchHistory from "./Components/SearchHistory";
import SideNavBar from "./Components/SideNavBar";
import SideStaitcBar from "./Components/SideNavBar/SideStaticBar";
import VideoItem from "./Components/VideoItem";
import HomePage from "./features/homepage/HomePage";
import "./variable.css";
import YouPage from "./features/profilepage/YouPage";
import SubscriptionsPage from "./features/subscriptionspage/SubscriptionPage";
import ShortsPage from "./features/shortspage/ShortsPage";
import { useState } from "react";

function App() {
  const [isSideNavBarOpen, setIsSideNavBarOpen] = useState();
  return (
    <>
      <BrowserRouter>
        <NavBar setIsSideNavBarOpen={setIsSideNavBarOpen} isSideNavBarOpen={isSideNavBarOpen}/>
        {!isSideNavBarOpen && <SideStaitcBar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shorts" element={<ShortsPage />} />
          <Route path="/feed/subscriptions" element={<SubscriptionsPage />} />
          <Route path="/feed/you" element={<YouPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
