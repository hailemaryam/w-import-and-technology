import "./Kidopia.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Category from "./Category/Category";
import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "../contexts/LanguageContext";

function Kidopia() {

  return (

    <div >
      <LanguageProvider>
      {/* Header */}
      <Header />
      
      <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
        </Routes>
      </main>
      <Footer />
      
      </LanguageProvider>
      </div>
  )
}

export default Kidopia;
