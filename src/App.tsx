import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./pages/Books";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Dashboard from "./pages/Admin/Dashboard";
import AddBook from "./pages/Admin/AddBook";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/create-a-post" element={<AddBook />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App; 