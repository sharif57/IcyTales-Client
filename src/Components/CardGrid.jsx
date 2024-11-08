import React, { useState } from 'react';

const CardGrid = () => {
  // Sample data for cards
  const allCards = Array(20).fill({
    category: 'Advice',
    date: 'Dec 26, 2023',
    title: 'Our Strength, Your Business',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/300x200',
    author: 'John Doe',
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // Calculate the indices of the first and last card on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);

  // Calculate the total number of pages
  const totalPages = Math.ceil(allCards.length / cardsPerPage);

  // Handler for pagination buttons
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Navigation Bar */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-pink-600 font-bold text-xl">Logo</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-pink-600">Advice</a>
            <a href="#" className="text-gray-600 hover:text-pink-600">Announcements</a>
            <a href="#" className="text-gray-600 hover:text-pink-600">News</a>
            <a href="#" className="text-gray-600 hover:text-pink-600">Consultation</a>
            <a href="#" className="text-gray-600 hover:text-pink-600">Development</a>
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
