import './MyAccount.css';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';

function MyAccount() {
  const { t, currentLang } = useLanguage();
  const { currentUser, logout } = useAuth();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(currentLang === 'am' ? 'am-ET' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleUnsubscribe = async (type) => {
    // This would integrate with your backend
    alert(`${t('unsubscribe')} ${type}`);
  };

  return (
    <div className="my-account-page">
      <div className="account-container">
        {/* Header */}
        <div className="account-header">
          <h1>👤 {t('myAccount_header')}</h1>
          <p>{t('myAccount_description')}</p>
        </div>

        {/* Account Info Card */}
        <div className="account-card">
          <div className="card-header">
            <h2>{t('accountInformation')}</h2>
          </div>
          
          <div className="account-details">
            <div className="detail-item">
              <span className="detail-label">📱 {t('phone_number')}</span>
              <span className="detail-value">{currentUser?.phone || 'N/A'}</span>
            </div>
            
            <div className="detail-item">
              <span className="detail-label">📅 {t('registration_date')}</span>
              <span className="detail-value">
                {currentUser?.registrationDate ? formatDate(currentUser.registrationDate) : 'N/A'}
              </span>
            </div>
            
            <div className="detail-item">
              <span className="detail-label">🟢 {t('status')}</span>
              <span className={`status-badge ${currentUser?.status === 'active' ? 'active' : 'inactive'}`}>
                {currentUser?.status === 'active' ? t('active') : t('inactive')}
              </span>
            </div>
            
            <div className="detail-item">
              <span className="detail-label">💳 {t('subscription_type')}</span>
              <span className="detail-value">{currentUser?.subscriptionType || t('dailySubscription')}</span>
            </div>
          </div>
        </div>

        {/* Subscription Management */}
        <div className="account-card">
          <div className="card-header">
            <h2>🔄 {t('subscriptionManagement')}</h2>
          </div>
          
          <div className="subscription-actions">
            <div className="action-item">
              <span className="action-text">{t('manageSubscription')}</span>
              <button 
                className="action-btn secondary"
                onClick={() => handleUnsubscribe('all')}
              >
                {t('unsubscribe')}
              </button>
            </div>
            
            <div className="subscription-info">
              <h4>{t('currentPlan')}</h4>
              <div className="plan-details">
                <span className="plan-name">📦 {t('dailySubscription')}</span>
                <span className="plan-price">3 ETB / {t('day')}</span>
              </div>
            </div>
          </div>
        </div>


        {/* Support Section */}
        <div className="support-section">
          <h3>💬 {t('needHelp')}</h3>
          <p>{t('contactSupport')}: <strong>251 976 957 649</strong></p>
          <div className="support-actions">
            <button className="support-btn">
              📧 {t('emailSupport')}
            </button>
            <button className="support-btn">
              📞 {t('callSupport')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;