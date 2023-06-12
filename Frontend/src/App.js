import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Home } from "./Pages/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
