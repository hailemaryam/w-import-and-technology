import './Category.css';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useFrappeGetDocList } from 'frappe-react-sdk';
import Posts from '../../components/Posts/Posts';
import { useEffect, useState } from 'react';

function Category() {
  const { categoryName } = useParams();
  const { t, currentLang } = useLanguage(); // Add currentLang
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryName]);

  // Fetch posts from Frappe
  const { data: posts, isLoading, error } = useFrappeGetDocList('Post', {
    fields: ['name', 'title', 'titleam', 'description', 'descriptionam', 'image', 'postcategory'],
    filters: [['postcategory', '=', categoryName]],
    limit: 1000
  });

  // Format posts for display - Use currentLang for Frappe data
  const formattedPosts = (posts || []).map(post => ({
    id: post?.name || `post-${Math.random()}`,
    title: currentLang === 'am' ? (post?.titleam || post?.title || 'No title') : (post?.title || 'No title'),
    excerpt: currentLang === 'am' ? (post?.descriptionam || post?.description || 'No description') : (post?.description || 'No description'),
    category: categoryName,
    image: post?.image || '/default-image.jpg'
  }));

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = formattedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(formattedPosts.length / postsPerPage);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  // Category info - Use currentLang for category titles/descriptions (like Frappe data)
  const categoryInfo = {
    "food-preparation": {
      title: currentLang === 'am' ? "ምግብ እና አሰራሮች" : "Food & Recipes",
      description: currentLang === 'am' ? "ሁሉም የምግብ አሰራር ጽሑፎች" : "All food and recipe articles",
      icon: "🍴"
    },
    "sport-news": {
      title: currentLang === 'am' ? "የስፖርት ዜና" : "Sports News",
      description: currentLang === 'am' ? "ሁሉም የስፖርት ዜና ጽሑፎች" : "All sports news articles", 
      icon: "⚽"
    },
    "health-tips": {
      title: currentLang === 'am' ? "ጤና እና ውበት" : "Health & Beauty",
      description: currentLang === 'am' ? "ሁሉም የጤና እና ውበት ጽሑፎች" : "All health and beauty articles",
      icon: "💊"
    }
  }[categoryName] || {
    title: currentLang === 'am' ? "ምድብ" : "Category",
    description: currentLang === 'am' ? "ሁሉም የዚህ ምድብ ጽሑፎች" : "All articles in this category", 
    icon: "📁"
  };

  if (error) {
    return (
      <div className="category-page">
        <div className="error-message">
          <h2>{t('errorOccurred')}</h2> {/* Use t() for UI text */}
          <p>{t('failedToLoadPosts')}</p> {/* Use t() for UI text */}
          <p>{error?.message || t('unknownError')}</p> {/* Use t() for UI text */}
        </div>
      </div>
    );
  }

  return (
    <div className="category-page">
      {/* Category Header */}
      <section className="category-header">
        <div className="category-icon-large">{categoryInfo.icon}</div>
        <div className="category-info">
          <h1>{categoryInfo.title}</h1>
          <p>{categoryInfo.description}</p>
          <span className="posts-count">
            {formattedPosts.length} {t('articles')} {/* Use t() for UI text */}
            {totalPages > 1 && ` • ${t('page')} ${currentPage} ${t('of')} ${totalPages}`} {/* Use t() for UI text */}
          </span>
        </div>
      </section>

      {/* Posts Component */}
      {isLoading ? (
        <div className="loading-container">
          <p>{t('loadingPosts')}</p> {/* Use t() for UI text */}
        </div>
      ) : (
        <>
          <Posts
            posts={currentPosts}
            title={`${categoryInfo.icon} ${categoryInfo.title}`}
            subtitle={categoryInfo.description}
            showViewAll={false}
          />
          
          {/* Pagination Controls - Use t() for UI text */}
          {totalPages > 1 && (
            <div className="pagination-container">
              <div className="pagination">
                <button 
                  onClick={prevPage} 
                  disabled={currentPage === 1}
                  className={`pagination-btn pagination-prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                  <span className="pagination-arrow">←</span>
                  {t('previous')}
                </button>
                
                <div className="pagination-numbers">
                  {getPageNumbers().map((number, index) => (
                    number === '...' ? (
                      <span key={`ellipsis-${index}`} className="pagination-ellipsis">
                        ...
                      </span>
                    ) : (
                      <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`pagination-number ${currentPage === number ? 'active' : ''}`}
                      >
                        {number}
                      </button>
                    )
                  ))}
                </div>
                
                <button 
                  onClick={nextPage} 
                  disabled={currentPage === totalPages}
                  className={`pagination-btn pagination-next ${currentPage === totalPages ? 'disabled' : ''}`}
                >
                  {t('next')}
                  <span className="pagination-arrow">→</span>
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Category;