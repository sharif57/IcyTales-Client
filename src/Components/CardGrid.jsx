import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CardGrid = () => {
  // Sample data for cards

  const [blogs, setBlogs] = useState([])
  

  useEffect(() => {
    fetch('http://localhost:3000/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, []);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // Calculate the indices of the first and last card on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = blogs.slice(indexOfFirstCard, indexOfLastCard);

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogs.length / cardsPerPage);

  // Handler for pagination buttons
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gray-100">
      <div className="bg-gradient-to-b from-pink-100 to-pink-50 py-16 sm:py-28 md:py-56">
        <div>
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold">
            Blog
          </h1>
          <div className="text-center mt-6 bg-white p-4 sm:p-5 w-full sm:w-3/4 md:w-1/4 shadow-lg rounded-full mx-auto flex flex-wrap gap-4 items-center justify-center">
            <Link to={'/'} className="text-gray-700 hover:text-pink-500">Home</Link>
            <span>/</span>
            <Link to={''} className="text-gray-700 hover:text-pink-500">Blog</Link>
          </div>
        </div>
      </div>
      {/* Navigation Bar */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-center lg:justify-start items-center">
          <nav className="space-x-6 sm:space-x-8 lg:space-x-11 flex flex-wrap justify-center lg:justify-start">
            <a href="#" className="text-gray-600 hover:text-pink-600 text-sm sm:text-base lg:text-lg">Advice</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 text-sm sm:text-base lg:text-lg">Announcements</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 text-sm sm:text-base lg:text-lg">News</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 text-sm sm:text-base lg:text-lg">Consultation</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 text-sm sm:text-base lg:text-lg">Development</a>
          </nav>
        </div>
      </header>


      {/* Card Grid */}
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCards.map((card, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={card.image}
                alt={card.title}
              />
              <div className="p-4">
                <div className="flex items-center text-gray-500 text-xs mb-2">
                  <span className="mr-2">{card.category}</span>
                  <span className="mr-2">•</span>
                  <span>{card.date}</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {card.description}
                </p>
                <p className="text-gray-500 text-xs">By {card.author}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-1">
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page + 1)}
              className={`px-3 py-1 rounded-full ${currentPage === page + 1 ? 'bg-pink-600 text-white' : 'bg-gray-300 text-gray-600'}`}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CardGrid;
