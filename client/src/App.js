import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
