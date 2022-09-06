import "./App.css";
import Navbar from "./components/Navbarku";
import Pagination from "./components/Pagination";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <div>
        <nav>
          <Link to="/contact">Contact</Link>
        </nav>
      </div> */}
      {/* <div>
        <Navbar />
      </div> */}
      {/* <div>
        <Navbar />
        <div>
          <Pagination />
        </div>
        <div>
          <Contact />
        </div>
      </div> */}
    </div>
  );
}

export default App;
