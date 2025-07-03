import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NewsLetter from "./Components/Home/NewsLetter/NewsLetter";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import AllProducts from "./Components/Products/AllProducts/AllProducts";
import SingleProducts from "./Components/SingleProducts/SingleProducts";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <SingleProducts /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/singleproducts" element={<SingleProducts />} /> */}
      </Routes>
      <NewsLetter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
