import { FaCalendarAlt, FaTag, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoadMore = () => {
    const articles = [
        {
            image: 'https://i.ibb.co.com/LZyFth8/standard-post-img03-jpg.png',
            author: 'Admin',
            category: 'Virtual Assistant',
            title: 'Why You Need Virtual Assistant for Your Company',
            date: 'Dec 20, 2022',
        },
        {
            image: 'https://i.ibb.co.com/L0THrtB/standard-post-img06-jpg.png',
            author: 'Admin',
            category: 'Virtual Assistant',
            title: 'Why You Need Virtual Assistant for Your Company',
            date: 'Dec 20, 2022',
        },
        {
            image: 'https://i.ibb.co.com/vdQgfsG/standard-post-img01-jpg.png',
            author: 'Admin',
            category: 'Virtual Assistant',
            title: 'Why You Need Virtual Assistant for Your Company',
            date: 'Dec 20, 2022',
        },
    ];

    return <div>
        <div className="bg-gradient-to-b from-pink-100 to-pink-50 py-56">
            <div>
                <h1 className="text-center text-6xl font-bold">Load More</h1>
                <div className="text-center mt-6 bg-white p-5 w-1/4 shadow-lg rounded-full mx-auto flex-row gap-8 items-center">
                    <Link to={'/'}>Home</Link>/
                    <Link to={'/loadMore'}>Load More</Link>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap justify-center">
            {articles.map((article, index) => (
                <div key={index} className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden m-4">
                    <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <div className="flex items-center gap-2 text-gray-500 mb-2">
                            <FaUser className="text-pink-500" />
                            <span>{`By : ${article.author}`}</span>
                            <FaTag className="text-pink-500" />
                            <span>{article.category}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center text-gray-500">
                                <FaCalendarAlt className="text-pink-500 mr-1" />
                                <span>{article.date}</span>
                            </div>
                            <button className="text-white bg-pink-500 px-4 py-2 rounded-lg">Read More</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>;
};
export default LoadMore;