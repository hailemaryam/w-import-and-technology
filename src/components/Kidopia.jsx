import "./Kidopia.css";
import Header from "./Header/Header";
import LoginHeader from "./LoginHeader/LoginHeader"; // NEW
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import Category from "./Category/Category";
import TermsAndConditions from "./TermsAndConditions/TermsAndConditions";
import MyAccount from "./MyAccount/MyAccount";
import ProtectedRoute from "./ProtectedRoute";
import { Routes, Route, useLocation } from "react-router-dom"; // ADD useLocation
import { LanguageProvider } from "../contexts/LanguageContext";

function Kidopia() {
  const location = useLocation(); // NEW: to detect current route

  // NEW: Check if current route is login page
  const isLoginPage = location.pathname === '/login';

  return (
    <div>
      <LanguageProvider>
        {/* NEW: Conditional Header - LoginHeader for login page, regular Header for others */}
        {isLoginPage ? <LoginHeader /> : <Header />}
      
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/category/:categoryName" element={
              <ProtectedRoute>
                <Category />
              </ProtectedRoute>
            } />
            <Route path="/my-account" element={
              <ProtectedRoute>
                <MyAccount />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
        
        
        <Footer />
      </LanguageProvider>
    </div>
  )
}

export default Kidopia;