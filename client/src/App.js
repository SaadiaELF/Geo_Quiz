import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
