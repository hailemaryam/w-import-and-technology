import './Home.css';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

function Home() {
  const { t, language } = useLanguage();

  // Mock data - replace with actual API data
  const popularPosts = [
    {
      id: 1,
      title: language === 'am' ? "የሚያማም ቆዳ የሚያገኙት ዕለታዊ 5 የውበት ስልቶች" : "5 Daily Beauty Routines for Glowing Skin",
      excerpt: language === 'am' ? "በአንድ ሳምንት ውስጥ ቆዳዎን የሚቀይሩ መሠረታዊ የውበት ምክሮችን ያግኙ..." : "Discover the essential beauty tips that will transform your skin in just one week...",
      category: "health-tips",
      subcategory: "beauty",
      image: "/images/beauty1.jpg",
      author: language === 'am' ? "ዶ/ር ሳራ ጆንሰን" : "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: language === 'am' ? "4 ደቂቃ ንባብ" : "4 min read",
      likes: 234
    },
    {
      id: 2,
      title: language === 'am' ? "አካባቢያዊ እግር ኳስ ቡድን ሻምፕዮናት አሸነፈ" : "Local Football Team Wins Championship",
      excerpt: language === 'am' ? "አዳምማ ከመጨረሻ ጨዋታ በኋላ ውስብስብ የዘመን ሽልማት አምጥተዋል..." : "Our local heroes bring home the trophy after an incredible season finale...",
      category: "sport-news", 
      subcategory: "local-sports",
      image: "/images/sport1.jpg",
      author: language === 'am' ? "ማይክ ቶምፕሰን" : "Mike Thompson",
      date: "2024-01-14",
      readTime: language === 'am' ? "3 ደቂቃ ንባብ" : "3 min read",
      likes: 189
    },
    {
      id: 3,
      title: language === 'am' ? "ባህላዊ የኢትዮጵያ እንጀራ አሰራር" : "Traditional Ethiopian Injera Recipe",
      excerpt: language === 'am' ? "በደረጃ በደረጃ መመሪያችን በቤት ሙሉ እንጀራ ለመስራት ይማሩ..." : "Learn the authentic way to make perfect injera at home with our step-by-step guide...",
      category: "food-preparation",
      subcategory: "ethiopian-food",
      image: "/images/food1.jpg",
      author: language === 'am' ? "ሹፍ ማርያም" : "Chef Mariam",
      date: "2024-01-13",
      readTime: language === 'am' ? "6 ደቂቃ ንባብ" : "6 min read",
      likes: 312
    },
    {
      id: 4,
      title: language === 'am' ? "ለተሻለ ጤና የጠዋት የዮጋ ልምምድ" : "Morning Yoga for Better Health",
      excerpt: language === 'am' ? "ኃይልና ትኩረት የሚጨምሩ 10-ደቂቃ የዮጋ ስልቶች በመስራት ቀንዎን በትክክል ይጀምሩ..." : "Start your day right with these 10-minute yoga routines that boost energy and focus...",
      category: "health-tips",
      subcategory: "health",
      image: "/images/health1.jpg",
      author: language === 'am' ? "የዮጋ አለቃ አሌክስ" : "Yoga Master Alex",
      date: "2024-01-12",
      readTime: language === 'am' ? "5 ደቂቃ ንባብ" : "5 min read",
      likes: 167
    },
    {
      id: 5,
      title: language === 'am' ? "ለተሻለ ጤና የጠዋት የዮጋ ልምምድ" : "Morning Yoga for Better Health",
      excerpt: language === 'am' ? "ኃይልና ትኩረት የሚጨምሩ 10-ደቂቃ የዮጋ ስልቶች በመስራት ቀንዎን በትክክል ይጀምሩ..." : "Start your day right with these 10-minute yoga routines that boost energy and focus...",
      category: "health-tips",
      subcategory: "health",
      image: "/images/health3.jpg",
      author: language === 'am' ? "የዮጋ አለቃ አሌክስ" : "Yoga Master Alex",
      date: "2024-01-12",
      readTime: language === 'am' ? "5 ደቂቃ ንባብ" : "5 min read",
      likes: 300
    }
  ];

  const categories = [
    {
      name: "health-tips",
      title: language === 'am' ? "ጤና እና ውበት" : "Health & Beauty",
      description: language === 'am' ? "ለጤና እና ውበት ምክሮች" : "Tips for wellness and beauty",
      icon: "💄",
      color: "#811114",
      count: 24
    },
    {
      name: "sport-news", 
      title: language === 'am' ? "የስፖርት ዜና" : "Sports News",
      description: language === 'am' ? "አካባቢያዊ እና ዓለም አቀፍ ስፖርቶች" : "Local and international sports",
      icon: "⚽",
      color: "#2E7D32",
      count: 18
    },
    {
      name: "food-preparation",
      title: language === 'am' ? "ምግብ እና አሰራሮች" : "Food & Recipes", 
      description: language === 'am' ? "ባህላዊ እና ዓለም አቀፍ ምግቦች" : "Traditional and international cuisine",
      icon: "🍴",
      color: "#FF6B35",
      count: 32
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            {language === 'am' ? 'ወደ ' : 'Welcome to '}
            <span className="brand-highlight">W-Import and Technology</span>
            {language === 'am' ? ' ብሎግ በደህና መጡ' : ' Blog'}
          </h1>
          <p className="hero-subtitle">
            {language === 'am' 
              ? 'የጤና ምክሮች፣ የስፖርት ዜና እና ጣፋጭ አሰራሮች ዕለታዊ ዝግጅትዎ'
              : 'Your daily dose of health tips, sports news, and delicious recipes'
            }
          </p>
          <div className="hero-search">
            <input 
              type="text" 
              placeholder={t('searchPlaceholder')} 
              className="search-input"
            />
            <button className="search-btn">{t('search')}</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-images-grid">
            <div className="hero-image-item">
              <img src="/images/health3.jpg" alt={t('health')} />
              <div className="image-overlay">
                <span className="image-icon">💄</span>
                <span className="image-text">{t('health')}</span>
              </div>
            </div>
            <div className="hero-image-item">
              <img src="/images/sport3.jpg" alt={t('sports')} />
              <div className="image-overlay">
                <span className="image-icon">⚽</span>
                <span className="image-text">{t('sports')}</span>
              </div>
            </div>
            <div className="hero-image-item">
              <img src="/images/food2.jpg" alt={t('food')} />
              <div className="image-overlay">
                <span className="image-icon">🍴</span>
                <span className="image-text">{t('food')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Posts Section */}
      <section className="popular-section">
        <div className="section-header">
          <h2>🔥 {t('popularPosts')}</h2>
          <p>{t('mostRead')}</p>
        </div>
        
        <div className="popular-grid">
          {popularPosts.map((post, index) => (
            <article key={post.id} className={`popular-card featured-${index + 1}`}>
              <div className="card-image">
                <img src={post.image} alt={post.title} />
                <div className="category-badge" style={{ backgroundColor: categories.find(c => c.name === post.category)?.color }}>
                  {categories.find(c => c.name === post.category)?.icon}
                  {post.category === 'health-tips' ? t('health') : 
                   post.category === 'sport-news' ? t('sports') : t('food')}
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="card-excerpt">{post.excerpt}</p>
                
                <div className="card-meta">
                  <div className="author-info">
                    <span className="author-name">{post.author}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                  <div className="post-stats">
                    <span className="read-time">{post.readTime}</span>
                    <span className="likes">❤️ {post.likes} {t('likes')}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="section-footer">
          <Link to="/posts" className="view-all-btn">
            {t('viewAllPosts')}
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2>📚 {t('categories')}</h2>
          <p>{t('exploreTopics')}</p>
        </div>
        
        <div className="categories-grid">
          {categories.map(category => (
            <Link 
              key={category.name} 
              to={`/category/${category.name}`}
              className="category-card"
              style={{ '--category-color': category.color }}
            >
              <div className="category-icon">{category.icon}</div>
              <div className="category-info">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span className="post-count">
                  {category.count} {t('articles')}
                </span>
              </div>
              <div className="category-arrow">→</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;