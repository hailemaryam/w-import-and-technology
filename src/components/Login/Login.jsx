import React, { useState, useEffect } from "react";
import "./Login.css";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const [lang, setLang] = useState(sessionStorage.getItem("lang") || "en");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");

  const [messages, setMessages] = useState({ error: "", success: "" });
  const [agreeTnc, setAgreeTnc] = useState(false);

  const i18n = {
    en: {
      welcome: "WELCOME TO KIDOPIA",
      login: "Login",
      description: "Enter your phone number and PIN to access your account",
      phone_placeholder: "Enter your phone number",
      pin_placeholder: "Enter your PIN",
      invalid_phone: "Please enter a valid phone number",
      pin_required: "PIN is required",
      login_success: "Login successful! 🎉 Redirecting...",
      login_error: "Login failed. Please check your credentials.",
      consent: "By continuing, you agree to Ethio telecom's",
      terms: "terms and conditions",
      login_btn: "LOGIN",
      trial: "Enjoy a 3-day free trial for your first Registration",
      contact: "Contact Us",
      help: "Help Desk : 251 970 305 059"
    },
    am: {
      welcome: "እንኳን ወደ Kidopia በደህና መጡ",
      login: "ለመመዝገብ",
      description: "የስልክ ቁጥርዎን እና ፒን ያስገቡ",
      phone_placeholder: "የስልክ ቁጥርዎን ያስገቡ",
      pin_placeholder: "ፒንዎን ያስገቡ",
      invalid_phone: "እባክዎ ትክክለኛ የስልክ ቁጥር ያስገቡ",
      pin_required: "ፒን ያስፈልጋል",
      login_success: "ግባ ተሳክቷል! 🎉 በቅርብ ጊዜ እየተሻገረ ነው...",
      login_error: "ግባ አልተሳካም። እባክዎ የይለፍ ቃልዎን ያረጋግጡ።",
      consent: "በመቀጠል፤ የኢትዮ ቴሌኮም ዉሎችን ተስማምተዋል",
      terms: "ደንቦች",
      login_btn: "ግባ",
      trial: "ለመጀመሪያ ምዝገባዎ 3 ቀን በነፃ ይጠቀሙ",
      contact: "ያግኙን",
      help: "Help Desk : 251 970 305 059"
    }
  };

  useEffect(() => {
    sessionStorage.setItem("lang", lang);
  }, [lang]);

  const validatePhone = (phone) => {
    // Remove any non-digit characters and check if it's a valid phone number
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length >= 9 && cleanPhone.length <= 15;
  };

  const formatPhoneForEmail = (phone) => {
    // Remove any non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    // Add "0" prefix and "@yourdomain.com" suffix
    return `0${cleanPhone}@yourdomain.com`;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    console.log('Login form submitted with:', { phone, pin: pin ? '***' : 'empty' });
    
    if (!phone || !pin) {
      setMessages({ 
        error: !phone ? t.invalid_phone : t.pin_required, 
        success: "" 
      });
      return;
    }

    if (!validatePhone(phone)) {
      setMessages({ 
        error: t.invalid_phone, 
        success: "" 
      });
      return;
    }

    if (!agreeTnc) {
      setMessages({ 
        error: "Please agree to terms and conditions", 
        success: "" 
      });
      return;
    }

    // Format phone number for email
    const emailForFrappe = formatPhoneForEmail(phone);
    console.log('Calling login function with:', { email: emailForFrappe, password: '***' });
    
    const result = await login(emailForFrappe, pin);
    console.log('Login result:', result);
    
    if (result.success) {
      setMessages({ 
        error: "", 
        success: t.login_success 
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      setMessages({ 
        error: result.error || t.login_error, 
        success: "" 
      });
    }
  };

  const t = i18n[lang];

  return (
    <div className="kidopia-login-page">
      {/* ===== Hero Section ===== */}
      <section className="kidopia-hero">
        <div className="kidopia-container kidopia-hero-inner">
          <div className="kidopia-hero-left">
            <img src="/images/images.svg" alt="Kidopia Characters" />
          </div>
          
          <div className="kidopia-card">
            <div className="kidopia-card-header">
              {t.welcome}
            </div>
            <div className="kidopia-card-inner">
              <div className="kidopia-login-container">
                <h2>{t.login}</h2>
                <p>{t.description}</p>

                {/* Phone Input */}
                <div className="kidopia-input-group">
                  <span>+251</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder={t.phone_placeholder}
                    maxLength="15"
                    required
                  />
                </div>

                {/* PIN Input */}
                <div className="kidopia-input-group">
                  <input
                    type="password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder={t.pin_placeholder}
                    required
                  />
                </div>

                {/* Messages */}
                {messages.error && <div className="kidopia-message kidopia-error">{messages.error}</div>}
                {messages.success && <div className="kidopia-message kidopia-success">{messages.success}</div>}

                {/* Consent */}
                <div className="kidopia-consent-line">
                  <input
                    type="checkbox"
                    id="kidopia-tnc-checkbox"
                    checked={agreeTnc}
                    onChange={(e) => setAgreeTnc(e.target.checked)}
                  />
                  <label htmlFor="kidopia-tnc-checkbox">
                    {t.consent}{" "}
                    <a href="/terms" target="_blank" rel="noopener noreferrer">
                      {t.terms}
                    </a>
                  </label>
                </div>

                {/* Login Button */}
                <button
                  className="kidopia-btn-login"
                  onClick={handleLogin}
                  disabled={isLoading || !phone || !pin || !agreeTnc}
                >
                  {isLoading ? "Logging in..." : t.login_btn}
                </button>

                <p className="kidopia-freeTrial">
                  {t.trial}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}