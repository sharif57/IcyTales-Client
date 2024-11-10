import { useEffect, useState } from "react";

const AllComments = ({ productId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/reviews/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setComments(data);
      });
  }, [productId]);

  return (
    <div className="space-y-4">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div
            key={comment._id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{comment.reviewer}</h3>
              <span className="text-sm text-gray-500">{comment.date}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 mr-2">
                {"⭐".repeat(comment.rating)}
              </span>
              <span className="text-gray-500">{`(${comment.rating}/5)`}</span>
            </div>
            <p className="text-gray-700">{comment.comment}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No comments available for this product.</p>
      )}
    </div>
  );
};

export default AllComments;
