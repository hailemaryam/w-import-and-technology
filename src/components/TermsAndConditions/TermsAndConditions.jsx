import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  const { t } = useLanguage();

  return (
    <div className="terms-page">
      {/* Hero Banner */}
      <section className="terms-hero">
        <div className="hero-container">
          <h1 className="hero-title">{t("termsTitle")}</h1>
          <p className="hero-subtitle">{t("termsDescription")}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="terms-main">
        <div className="terms-content">
          {/* Introduction */}
          <section className="terms-card">
            <h2 className="card-title">📖 {t("welcomeTitle")}</h2>
            <div className="card-content">
              <p>{t("welcomeContent")}</p>
            </div>
          </section>

          {/* User Registration */}
          <section className="terms-card">
            <h2 className="card-title">👤 {t("userRegistrationTitle")}</h2>
            <div className="card-content">
              <p>{t("userRegistrationContent")}</p>
            </div>
          </section>

          {/* Subscription Details */}
          <section className="terms-card">
            <h2 className="card-title">💳 {t("subscriptionTitle")}</h2>
            <div className="card-content">
              <p>{t("subscriptionContent1")}</p>
              <p>{t("subscriptionContent2")}</p>
              
              <div className="info-box">
                <h3>📦 {t("subscriptionPackages")}</h3>
                <div className="packages-grid">
                  <div className="package-card">
                    <span className="package-icon">📅</span>
                    <span className="package-text">{t("dailyPackage")}</span>
                  </div>
                  <div className="package-card">
                    <span className="package-icon">📆</span>
                    <span className="package-text">{t("weeklyPackage")}</span>
                  </div>
                  <div className="package-card">
                    <span className="package-icon">🗓️</span>
                    <span className="package-text">{t("monthlyPackage")}</span>
                  </div>
                </div>
              </div>

              <div className="info-box payment">
                <h3>💰 {t("paymentInfo")}</h3>
                <p>Payment is securely processed through Ethio Telecom</p>
              </div>

              <div className="info-box unsubscribe">
                <h3>🚫 {t("unsubscribeTitle")}</h3>
                <div className="unsubscribe-options">
                  <div className="option">
                    <span className="option-badge">A</span>
                    <span>{t("unsubscribeDaily")}</span>
                  </div>
                  <div className="option">
                    <span className="option-badge">B</span>
                    <span>{t("unsubscribeWeekly")}</span>
                  </div>
                  <div className="option">
                    <span className="option-badge">C</span>
                    <span>{t("unsubscribeMonthly")}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Requirements */}
          <section className="terms-card">
            <h2 className="card-title">⚙️ {t("technicalRequirementsTitle")}</h2>
            <div className="card-content">
              <p>{t("technicalRequirementsContent1")}</p>
              <p>{t("technicalRequirementsContent2")}</p>
            </div>
          </section>

          {/* Rule Changes */}
          <section className="terms-card">
            <h2 className="card-title">📢 {t("ruleChangesTitle")}</h2>
            <div className="card-content">
              <p>{t("ruleChangesContent")}</p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="terms-card">
            <h2 className="card-title">📞 {t("contactInfoTitle")}</h2>
            <div className="card-content">
              <p>{t("contactInfoContent")}</p>
            </div>
          </section>

          {/* Closing Message */}
          <section className="closing-card">
            <div className="closing-content">
              <div className="closing-icon">🎉</div>
              <h3 className="closing-title">{t("closingMessage")}</h3>
              <p className="closing-text">Thank you for choosing W Import and Technology!</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;