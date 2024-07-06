import "./App.css";
import Home from "./components/home/Home";
import ProfileView from "./components/profileInfo/ProfileView";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<ProfileView />}></Route>
      </Routes>
    </>
  );
}

export default App;
