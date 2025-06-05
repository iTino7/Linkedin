import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfileDetails from "./components/ProfileDetails";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { profileAction } from "./redux/action";
import Chat from "./components/Chat";

function App() {
  const dispatch = useDispatch();
  const me = JSON.parse(localStorage.getItem("me"));
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYjBiM2IxMGJmMDAwMTVjZjIyYTQiLCJpYXQiOjE3NDg5Mzg5MzEsImV4cCI6MTc1MDE0ODUzMX0.x7bYpZXsMIBHVOtE_a-UyTnY_qWaBm7IsdvFovn6KL0";

  useEffect(() => {
    dispatch(profileAction(TOKEN, "me"));
  }, []);
  return (
    <>
      <BrowserRouter>
        <MyNav me={me} />
        <Chat me={me} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userId" element={<ProfileDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
