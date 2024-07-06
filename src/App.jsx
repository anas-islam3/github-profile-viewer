import { useEffect } from "react";
import "./App.css";
import Home from "./components/home/Home";
import ProfileView from "./components/profileInfo/ProfileView";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:id" element={<ProfileView></ProfileView>}></Route>
      </Routes>
    </>
  );
}

export default App;
