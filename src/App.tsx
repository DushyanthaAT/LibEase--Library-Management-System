import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Dashboard from "./pages/Admin/Dashboard";
import AddBook from "./pages/Admin/AddBook";
import BookPage from "./pages/BookPage";
import SignIn from "./pages/SignIn";
import UpdateBook from "./pages/Admin/UpdateBook";

// PrivateRoute component to protect routes
const PrivateRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    // Redirect to sign-in page if no token
    return <Navigate to="/sign-in" />;
  }
  return element;
};

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
        <Route path="/book/:bookId" element={<BookPage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/admin/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
        <Route
          path="/admin/create-a-post"
          element={<PrivateRoute element={<AddBook />} />}
        />
        <Route
          path="/admin/update-a-post/:bookId"
          element={<PrivateRoute element={<UpdateBook />} />}
        />
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
