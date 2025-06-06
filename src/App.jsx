import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfileDetails from "./components/ProfileDetails";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { profileAction } from "./redux/action";
import Chat from "./components/Chat";
import Lavoro from "./components/Lavoro";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Chat />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userId" element={<ProfileDetails />} />
          <Route path="/jobs" element={<Lavoro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
