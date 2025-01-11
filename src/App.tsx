import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Dashboard from "./pages/Admin/Dashboard";
import AddBook from "./pages/Admin/AddBook";
import BookPage from "./pages/BookPage";
import SignIn from "./pages/SignIn";

const App: React.FC = () => {
  const location = useLocation();
  return (
    <div>
      {/* Conditionally render Navbar */}
      {location.pathname !== "/sign-in" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/books" element={<Books />} />
        <Route path="/bookPage" element={<BookPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/create-a-post" element={<AddBook />} />
      </Routes>
    </div>
  );
};

const RouterWrapper: React.FC = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default RouterWrapper;
