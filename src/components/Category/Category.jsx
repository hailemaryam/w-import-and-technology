import './Category.css';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useFrappeGetDocList } from 'frappe-react-sdk';
import Posts from '../../components/Posts/Posts';
import { useEffect, useState } from 'react';

function Category() {
  const { categoryName } = useParams();
  const { currentLang } = useLanguage();
  
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10); // Number of posts per page

  useEffect(() => {
    if (currentLang) {
      setCurrentLanguage(currentLang);
    }
  }, [currentLang]);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryName]);

  // Fetch posts from Frappe with better error handling
  const { data: posts, isLoading, error } = useFrappeGetDocList('Post', {
    fields: ['name', 'title', 'titleam', 'description', 'descriptionam', 'image', 'postcategory'],
    filters: [['postcategory', '=', categoryName]],
    limit: 1000
  });

  console.log('Posts from Frappe:', posts);
  console.log('Error:', error);

  // Safe formatting with fallbacks
  const formattedPosts = (posts || []).map(post => ({
    id: post?.name || `post-${Math.random()}`,
    title: currentLanguage === 'am' ? (post?.titleam || post?.title || 'No title') : (post?.title || 'No title'),
    excerpt: currentLanguage === 'am' ? (post?.descriptionam || post?.description || 'No description') : (post?.description || 'No description'),
    category: categoryName,
    image: post?.image || '/default-image.jpg'
  }));

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = formattedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(formattedPosts.length / postsPerPage);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Change page with scroll to top
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  // Next page with scroll to top
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  // Previous page with scroll to top
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Maximum page numbers to display
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if total pages are less than maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Show limited pages with ellipsis
      if (currentPage <= 3) {
        // Near the start
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // In the middle
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

  // Category info
  const categoryInfo = {
    "food-preparation": {
      title: currentLanguage === 'am' ? "ምግብ እና አሰራሮች" : "Food & Recipes",
      description: currentLanguage === 'am' ? "ሁሉም የምግብ አሰራር ጽሑፎች" : "All food and recipe articles",
      icon: "🍴"
    },
    "sport-news": {
      title: currentLanguage === 'am' ? "የስፖርት ዜና" : "Sports News",
      description: currentLanguage === 'am' ? "ሁሉም የስፖርት ዜና ጽሑፎች" : "All sports news articles", 
      icon: "⚽"
    },
    "health-tips": {
      title: currentLanguage === 'am' ? "ጤና እና ውበት" : "Health & Beauty",
      description: currentLanguage === 'am' ? "ሁሉም የጤና እና ውበት ጽሑፎች" : "All health and beauty articles",
      icon: "💊"
    }
  }[categoryName] || {
    title: currentLanguage === 'am' ? "ምድብ" : "Category",
    description: currentLanguage === 'am' ? "ሁሉም የዚህ ምድብ ጽሑፎች" : "All articles in this category", 
    icon: "📁"
  };

  // Check if we have a network or SDK error
  if (error) {
    return (
      <div className="category-page">
        <div className="error-message">
          <h2>{currentLanguage === 'am' ? "ስህተት ተፈጥሯል" : "An error occurred"}</h2>
          <p>{currentLanguage === 'am' ? "ጽሑፎችን ማምጣት አልተሳካም" : "Failed to load posts"}</p>
          <p>{error?.message || 'Unknown error'}</p>
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
            {formattedPosts.length} {currentLanguage === 'am' ? 'ጽሑፎች' : 'articles'}
            {totalPages > 1 && ` • ${currentLanguage === 'am' ? 'ገጽ' : 'Page'} ${currentPage} ${currentLanguage === 'am' ? 'ከ' : 'of'} ${totalPages}`}
          </span>
        </div>
      </section>

      {/* Posts Component */}
      {isLoading ? (
        <div className="loading-container">
          <p>{currentLanguage === 'am' ? "በመጫን ላይ..." : "Loading posts..."}</p>
        </div>
      ) : (
        <>
          <Posts
            posts={currentPosts}
            title={`${categoryInfo.icon} ${categoryInfo.title}`}
            subtitle={categoryInfo.description}
            showViewAll={false}
          />
          
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="pagination-container">
              <div className="pagination">
                {/* Previous Button */}
                <button 
                  onClick={prevPage} 
                  disabled={currentPage === 1}
                  className={`pagination-btn pagination-prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                  <span className="pagination-arrow">←</span>
                  {currentLanguage === 'am' ? 'ያለፈ' : 'Previous'}
                </button>
                
                {/* Page Numbers */}
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
                
                {/* Next Button */}
                <button 
                  onClick={nextPage} 
                  disabled={currentPage === totalPages}
                  className={`pagination-btn pagination-next ${currentPage === totalPages ? 'disabled' : ''}`}
                >
                  {currentLanguage === 'am' ? 'ቀጣይ' : 'Next'}
                  <span className="pagination-arrow">→</span>
                </button>
              </div>
              
              {/* Page Info */}
              <div className="pagination-info">
                {currentLanguage === 'am' 
                  ? `ከ${indexOfFirstPost + 1}-${Math.min(indexOfLastPost, formattedPosts.length)} ከ${formattedPosts.length} ጽሑፎች`
                  : `Showing ${indexOfFirstPost + 1}-${Math.min(indexOfLastPost, formattedPosts.length)} of ${formattedPosts.length} posts`
                }
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Category;