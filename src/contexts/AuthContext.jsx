import React, { createContext, useContext, useState, useEffect } from 'react';
import { useFrappeAuth } from 'frappe-react-sdk';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const { login, logout, currentUser, isLoading, error } = useFrappeAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log('AuthContext - currentUser changed:', currentUser);
    console.log('AuthContext - isLoading:', isLoading);
    console.log('AuthContext - error:', error);
    setIsAuthenticated(!!currentUser);
  }, [currentUser, isLoading, error]);

  const handleLogin = async (email, password) => {
    try {
      console.log('Attempting login with formatted email:', { email, password: '***' });
      console.log('Note: Email format should be 0{phone}@yourdomain.com');
      
      // Try different login formats that frappe-react-sdk might expect
      let loginResult;
      
      try {
        // Method 1: Object with usr and pwd
        console.log('Trying login method 1: {usr, pwd}');
        loginResult = await login({
          usr: email,
          pwd: password
        });
      } catch (firstError) {
        console.log('Method 1 failed, trying method 2:', firstError.message);
        
        try {
          // Method 2: Direct parameters
          console.log('Trying login method 2: direct parameters');
          loginResult = await login(email, password);
        } catch (secondError) {
          console.log('Method 2 failed, trying method 3:', secondError.message);
          
          // Method 3: Alternative object format
          console.log('Trying login method 3: alternative format');
          loginResult = await login({
            username: email,
            password: password
          });
        }
      }
      
      console.log('Login successful:', loginResult);
      setIsAuthenticated(true);
      return { success: true };
    } catch (err) {
      console.error('All login methods failed:', err);
      console.error('Error message:', err.message);
      console.error('Error response:', err.response);
      console.error('Error status:', err.status);
      
      return { 
        success: false, 
        error: err.message || 'Login failed. Please check your credentials.' 
      };
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
      return { success: true };
    } catch (err) {
      console.error('Logout error:', err);
      return { 
        success: false, 
        error: err.message || 'Logout failed' 
      };
    }
  };

  const value = {
    isAuthenticated,
    currentUser,
    isLoading,
    error,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
