import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import MyNav from "./components/MyNav";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userId" element={<ProfileDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
