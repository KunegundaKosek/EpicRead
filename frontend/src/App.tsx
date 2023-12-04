import "./css/App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/page/Home/Home";
import Login from "./components/page/Login/Login";
import Register from "./components/page/Register/Register";
import Contact from "./components/page/Contact/Contact";
import Books from "./components/page/Books/Books";
import AddBook from "./components/page/AddBook/AddBook";

import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
