import React from "react";
import "./App.css";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
//import PageNotFound from "./Components/PageNotFound";
//import UnitDrawer from "./Components/UnitDrawer";

export default function App() {
  return (
    <div className="App">
      <Home />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/servicio-social-app" element={<Home />} />
          <Route path="/servicio-social-app/unit-drawer" element={<UnitDrawer />} />
          <Route path="/:pageName" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}
