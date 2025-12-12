import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import './TermsAndConditions.css';
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  const { t } = useLanguage();

  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="hero-container">
          <h1 className="hero-titlet">{t("termsTitle")}</h1>
          <p className="hero-subtitlet">{t("termsDescription")}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="terms-main">
        <div className="terms-content">

          {/* Intro */}
          <section className="terms-card">
            <h2 className="card-title">📖 {t("welcomeTitle")}</h2>
            <div className="card-content">
              <p>{t("welcomeContent1")} <a href="https://amhaservice.et/">amhaservice.et</a> {t("welcomeContent2")}</p>
            </div>
          </section>

          {/* Registration */}
          <section className="terms-card">
            <h2 className="card-title">👤 {t("userRegistrationTitle")}</h2>
            <div className="card-content">
              <p>{t("userRegistrationContent")}</p>
            </div>
          </section>

          {/* Subscription */}
          <section className="terms-card">
            <h2 className="card-title">💳 {t("subscriptionTitle")}</h2>
            <div className="card-content">
              <p>{t("subscriptionContent1")}</p>
              <p>{t("subscriptionContent2")}</p>

              {/* Daily Package Only */}
              <div className="info-box">
                <h3>📦 {t("subscriptionPackages")}</h3>
                <div className="packages-grid">
                  <div className="package-card">
                    <span className="package-icon">📅</span>
                    <span className="package-text">{t("dailyPackage")}</span>
                  </div>
                </div>
              </div>

              {/* Subscribe / Unsubscribe Instructions */}
              <div className="info-box unsubscribe">
                <h3>📱 Subscription Instructions</h3>
                <div className="unsubscribe-options">
                  <div className="option">
                    <span className="option-badge subscribe">✓</span>
                    <span>{t("subscribeInstruction")}</span>
                  </div>

                  <div className="option">
                    <span className="option-badge unsubscribe">✕</span>
                    <span>{t("unsubscribeInstruction")}</span>
                  </div>

                  <div className="option">
                    <span className="option-badge shortcode">#</span>
                    <span>{t("shortcodeInfo")}</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Technical */}
          <section className="terms-card">
            <h2 className="card-title">⚙️ {t("technicalRequirementsTitle")}</h2>
            <div className="card-content">
              <p>{t("technicalRequirementsContent1")}</p>
              <p>{t("technicalRequirementsContent2")}</p>
            </div>
          </section>

          {/* Rules change */}
          <section className="terms-card">
            <h2 className="card-title">📢 {t("ruleChangesTitle")}</h2>
            <div className="card-content">
              <p>{t("ruleChangesContent")}</p>
            </div>
          </section>

          {/* Contact */}
          <section className="terms-card">
            <h2 className="card-title">📞 {t("contactInfoTitle")}</h2>
            <div className="card-content">
              <p>{t("contactInfoContent")}</p>
            </div>
          </section>

          {/* Closing */}
          <section className="closing-card">
            <div className="closing-content">
              <div className="closing-icon">🎉</div>
              <h3 className="closing-title">{t("closingMessage")}</h3>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;