import React, { createContext, useContext, useState, useEffect } from 'react';
import { useFrappeAuth, useFrappePostCall } from 'frappe-react-sdk';

const AuthContext = createContext();

// HMR-friendly hook
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const { login, logout, currentUser, isLoading, error } = useFrappeAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [otpPhone, setOtpPhone] = useState(() => localStorage.getItem('kidopia_phone') || '');

  // ✅ Use the correct backend API paths
  const { call: callSendOtp, loading: sendingOtp } = useFrappePostCall(
    'cms_portal.cms_portal.api.sendOTP'
  );
  const { call: callCheckOtp, loading: checkingOtp } = useFrappePostCall(
    'cms_portal.cms_portal.api.checkOTP'
  );

  useEffect(() => {
    setIsAuthenticated(!!currentUser || !!otpPhone);
  }, [currentUser, otpPhone]);

  const handleLogin = async (email, password) => {
    try {
      await login({ usr: email, pwd: password });
      setIsAuthenticated(true);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message || 'Login failed' };
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
      setOtpPhone('');
      localStorage.removeItem('kidopia_phone');
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message || 'Logout failed' };
    }
  };

  const sendOtp = async (phoneNumber) => {
    try {
      const res = await callSendOtp({ phone_number: phoneNumber });
      return { success: true, data: res?.message };
    } catch (err) {
      return { success: false, error: err.message || 'Failed to send OTP' };
    }
  };

  const verifyOtp = async (phoneNumber, otp) => {
    try {
      const res = await callCheckOtp({ phone_number: phoneNumber, otp });
      setOtpPhone(phoneNumber);
      localStorage.setItem('kidopia_phone', phoneNumber);
      setIsAuthenticated(true);
      return { success: true, data: res?.message };
    } catch (err) {
      return { success: false, error: err.message || 'Invalid OTP' };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        isLoading,
        error,
        sendingOtp,
        checkingOtp,
        otpPhone,
        login: handleLogin,
        logout: handleLogout,
        sendOtp,
        verifyOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
