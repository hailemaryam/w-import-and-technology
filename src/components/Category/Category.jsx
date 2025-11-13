import './Category.css';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import Posts from '../../components/Posts/Posts';

function Category() {
  const { categoryName } = useParams();
  const { t, language } = useLanguage();

  // Mock data - in real app, this would come from API based on categoryName
  const getCategoryPosts = () => {
    const allPosts = [
      // Health & Beauty Posts
      {
        id: 1,
        title: language === 'am' ? "የሚያማም ቆዳ የሚያገኙት ዕለታዊ 5 የውበት ስልቶች" : "5 Daily Beauty Routines for Glowing Skin",
        excerpt: language === 'am' ? "በአንድ ሳምንት ውስጥ ቆዳዎን የሚቀይሩ መሠረታዊ የውበት ምክሮችን ያግኙ..." : "Discover the essential beauty tips that will transform your skin in just one week...",
        category: "health-tips",
        image: "/images/beauty1.jpg",
        author: language === 'am' ? "ዶ/ር ሳራ ጆንሰን" : "Dr. Sarah Johnson",
        date: "2024-01-15",
        readTime: language === 'am' ? "4 ደቂቃ ንባብ" : "4 min read",
        likes: 234
      },
      {
        id: 2,
        title: language === 'am' ? "ተፈጥሯዊ የቆዳ እንክብካቤ ምክሮች" : "Natural Skin Care Tips",
        excerpt: language === 'am' ? "ያለ ኬሚካል ተፈጥሯዊ የቆዳ እንክብካቤ ምክሮች..." : "Chemical-free natural skin care tips for healthy skin...",
        category: "health-tips",
        image: "/images/health3.jpg",
        author: language === 'am' ? "ዶ/ር ማርያም አባተ" : "Dr. Mariam Abate",
        date: "2024-01-10",
        readTime: language === 'am' ? "5 ደቂቃ ንባብ" : "5 min read",
        likes: 189
      },

      // Sports News Posts
      {
        id: 3,
        title: language === 'am' ? "አካባቢያዊ እግር ኳስ ቡድን ሻምፕዮናት አሸነፈ" : "Local Football Team Wins Championship",
        excerpt: language === 'am' ? "አዳምማ ከመጨረሻ ጨዋታ በኋላ ውስብስብ የዘመን ሽልማት አምጥተዋል..." : "Our local heroes bring home the trophy after an incredible season finale...",
        category: "sport-news",
        image: "/images/sport1.jpg",
        author: language === 'am' ? "ማይክ ቶምፕሰን" : "Mike Thompson",
        date: "2024-01-14",
        readTime: language === 'am' ? "3 ደቂቃ ንባብ" : "3 min read",
        likes: 312
      },
      {
        id: 4,
        title: language === 'am' ? "የኢትዮጵያ ሩጫ አትሌቶች በዓለም ሽልማት" : "Ethiopian Runners Win World Championship",
        excerpt: language === 'am' ? "የኢትዮጵያ ሩጫ አትሌቶች በዓለም አቀፍ ውድድር አሸናፊ ሆነዋል..." : "Ethiopian runners dominate the world championship with outstanding performance...",
        category: "sport-news",
        image: "/images/sport2.jpg",
        author: language === 'am' ? "ሳራ መኮንን" : "Sara Mekonnen",
        date: "2024-01-12",
        readTime: language === 'am' ? "4 ደቂቃ ንባብ" : "4 min read",
        likes: 278
      },

      // Food & Recipes Posts
      {
        id: 5,
        title: language === 'am' ? "ባህላዊ የኢትዮጵያ እንጀራ አሰራር" : "Traditional Ethiopian Injera Recipe",
        excerpt: language === 'am' ? "በደረጃ በደረጃ መመሪያችን በቤት ሙሉ እንጀራ ለመስራት ይማሩ..." : "Learn the authentic way to make perfect injera at home with our step-by-step guide...",
        category: "food-preparation",
        image: "/images/food1.jpg",
        author: language === 'am' ? "ሹፍ ማርያም" : "Chef Mariam",
        date: "2024-01-13",
        readTime: language === 'am' ? "6 ደቂቃ ንባብ" : "6 min read",
        likes: 421
      },
      {
        id: 6,
        title: language === 'am' ? "የዶሮ ወጥ አሰራር" : "How to Make Traditional Doro Wat",
        excerpt: language === 'am' ? "እንግዲህ እንዴት ነው ፍጹም ዶሮ ወጥ የሚሰራው?" : "Learn how to make perfect Doro Wat, Ethiopia's most famous dish...",
        category: "food-preparation",
        image: "/images/food2.jpg",
        author: language === 'am' ? "ሹፍ ዓለማየሁ" : "Chef Alemayehu",
        date: "2024-01-11",
        readTime: language === 'am' ? "7 ደቂቃ ንባብ" : "7 min read",
        likes: 356
      }
    ];

    // Filter posts by category
    return allPosts.filter(post => post.category === categoryName);
  };

  const categoryPosts = getCategoryPosts();

  // Category titles and descriptions
  const getCategoryInfo = () => {
    const categoryInfo = {
      'health-tips': {
        title: language === 'am' ? "ጤና እና ውበት" : "Health & Beauty",
        description: language === 'am' ? "ሁሉም የጤና እና ውበት ጽሑፎች" : "All health and beauty articles",
        icon: "💄"
      },
      'sport-news': {
        title: language === 'am' ? "የስፖርት ዜና" : "Sports News", 
        description: language === 'am' ? "ሁሉም የስፖርት ዜና ጽሑፎች" : "All sports news articles",
        icon: "⚽"
      },
      'food-preparation': {
        title: language === 'am' ? "ምግብ እና አሰራሮች" : "Food & Recipes",
        description: language === 'am' ? "ሁሉም የምግብ አሰራር ጽሑፎች" : "All food and recipe articles",
        icon: "🍴"
      }
    };

    return categoryInfo[categoryName] || { 
      title: 'Category', 
      description: 'All articles in this category',
      icon: '📁'
    };
  };

  const categoryInfo = getCategoryInfo();

  return (
    <div className="category-page">
      {/* Category Header */}
      <section className="category-header">
        <div className="category-icon-large">{categoryInfo.icon}</div>
        <div className="category-info">
          <h1>{categoryInfo.title}</h1>
          <p>{categoryInfo.description}</p>
          <span className="posts-count">
            {categoryPosts.length} {language === 'am' ? 'ጽሑፎች' : 'articles'}
          </span>
        </div>
      </section>

      {/* Posts Component */}
      <Posts 
        posts={categoryPosts}
        title={`${categoryInfo.icon} ${categoryInfo.title}`}
        subtitle={categoryInfo.description}
        showViewAll={false} // No view all button in category page
      />
    </div>
  );
}

export default Category;