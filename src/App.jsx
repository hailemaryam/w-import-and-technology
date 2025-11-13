import './App.css'
import WImportAndTechnology from './components/WImportAndTechnology';
import ScrollToTopButton from './components/ScrollToTop/ScrollToTop'; // Renamed import
import { HashRouter as Router, useLocation } from "react-router-dom";
import { FrappeProvider } from "frappe-react-sdk";
import { AuthProvider } from "./contexts/AuthContext";
import { useEffect } from 'react';

// Use proxy URL for development, direct URL for production
const frappeUrl = import.meta.env.DEV ? window.location.origin : 'https://w-import-and-technology.memby.online';

console.log('Frappe URL:', frappeUrl);
console.log('Environment:', import.meta.env.DEV ? 'development' : 'production');

// Component to scroll to top on route changes
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
          <RouteScrollToTop /> {/* This handles auto-scroll on route changes */}
          <WImportAndTechnology />
          <ScrollToTopButton /> {/* This is the floating button */}
        </Router>
      </AuthProvider>
    </FrappeProvider>
  );
}

export default App;