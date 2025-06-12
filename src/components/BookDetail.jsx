import { useParams, useNavigate } from "react-router-dom";
import { books } from "../utils/dummydata";

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="h-screen flex items-center justify-center text-center">
        <p className="text-lg font-semibold text-red-600">Book not found 📚</p>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center  justify-center bg-gray-50 px-6 py-12">
      <div className="max-w-3xl w-full bg-white shadow-md border rounded-lg p-6 space-y-6">
        <img
          src={book.image}
          alt={book.title}
          className="w-48 h-72 object-cover rounded-md mx-auto"
        />
        <h1 className="text-3xl font-bold text-center">{book.title}</h1>
        <h2 className="text-xl text-gray-700 text-center">by {book.author}</h2>
        <p className="text-gray-600 text-center">{book.description}</p>
        <p className="text-center font-semibold text-yellow-600">
          ⭐ Rating: {book.rating}
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="mt-4 font-semibold px-4 py-2 border cursor-pointer"
          >
            Back to Browse
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
