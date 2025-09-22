import "./Kidopia.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Category from "./Category/Category";
import { Routes, Route } from "react-router-dom";

function Kidopia() {

  return (

    <div >
      {/* Header */}
      <Header />
      <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
        </Routes>
      </main>
      <Footer />

    </div>
  )
}

export default Kidopia;
