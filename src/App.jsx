import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfileDetails from "./components/ProfileDetails";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { profileAction } from "./redux/action";
import Chat from "./components/Chat";

function App() {

  return (
    <>
      <BrowserRouter>
        <MyNav  />
        <Chat />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userId" element={<ProfileDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
