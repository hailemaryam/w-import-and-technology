import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import "./MyAccount.css";

export default function MyAccount({ user }) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const account = user || {
    phone: "+251912345678",
    registrationDate: "2025-01-10",
    status: "Active",
    subscription: "Monthly",
  };

  const handleBack = () => navigate(-1);
  const handleUnsubscribe = () => alert(t("unsubscribe") + " successful");

  return (
    <div className="account-page">
      <div className="account-card">
        <h1 className="account-header">{t("myAccount_header")}</h1>

        <div className="account-info">
          <div className="account-row">
            <span className="label">{t("phone_number")}:</span>
            <span className="value">{account.phone}</span>
          </div>

          <div className="account-row">
            <span className="label">{t("registration_date")}:</span>
            <span className="value">{account.registrationDate}</span>
          </div>

          <div className="account-row">
            <span className="label">{t("status")}:</span>
            <span className={`value status ${account.status.toLowerCase()}`}>
              {t(account.status.toLowerCase())}
            </span>
          </div>

          <div className="account-row">
            <span className="label">{t("subscription_type")}:</span>
            <span className="value">{account.subscription}</span>
          </div>
        </div>

        <div className="account-buttons">
          <button className="btn back" onClick={handleBack}>
            {t("back")}
          </button>
          <button className="btn unsubscribe" onClick={handleUnsubscribe}>
            {t("unsubscribe")}
          </button>
        </div>
      </div>
    </div>
  );
}
