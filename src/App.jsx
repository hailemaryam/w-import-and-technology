import './App.css';
import WImportAndTechnology from './components/WImportAndTechnology';
import ScrollToTopButton from './components/ScrollToTop/ScrollToTop';
import { HashRouter as Router, useLocation } from "react-router-dom";
import { FrappeProvider } from "frappe-react-sdk";
import { AuthProvider } from "./contexts/AuthContext";
import { useEffect } from 'react';

// Base URL for Frappe API
// DEV: empty string to leverage Vite proxy
// PROD: actual domain
const frappeUrl = import.meta.env.DEV 
  ? 'http://localhost:5173' // or your Vite dev server proxy base
  : 'http://amhaservice.et';


console.log('Frappe URL:', frappeUrl);
console.log('Environment:', import.meta.env.DEV ? 'development' : 'production');

function RouteScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <FrappeProvider
      url={frappeUrl}
      enableCSRF={true}
      csrfTokenPath="/api/method/frappe.auth.get_csrf_token"
    >
      <AuthProvider>
        <Router>
          <RouteScrollToTop />
          <WImportAndTechnology />
          <ScrollToTopButton />
        </Router>
      </AuthProvider>
    </FrappeProvider>
  );
}

export default App;
