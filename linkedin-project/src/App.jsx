import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";
import InfoBlock from "./components/InfoBlock";
import Profile from "./components/Profile";
import ProfileBlock from "./components/ProfileBlock";
import Analisi from "./components/Analisi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Analisi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
