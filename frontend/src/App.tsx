// import Button from "./components/UI/Button";
// import { Link } from "react-router-dom";
// // import './scss/App.module.scss';
// import styles from "./scss/App.module.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Contact from "./components/Contact/Contact";
import Books from "./components/Books/Books";
import AddBook from "./components/AddBook/AddBook";

function App() {
  return (
    <Router>
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
