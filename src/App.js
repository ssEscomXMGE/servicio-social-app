import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import PageNotFound from "./Components/PageNotFound";
import UnitDrawer from "./Components/UnitDrawer";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unit-drawer" element={<UnitDrawer />} />
          <Route path="/:pageName" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
