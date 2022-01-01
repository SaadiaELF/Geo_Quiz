import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/quiz" element={<Quiz />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
