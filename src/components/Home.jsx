import { books, categories } from "../utils/dummydata";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Book from "./Book";

function Home() {
  const [popular, setPopular] = useState(books);

  useEffect(() => {
    const filtered = popular.filter((book) => book.rating > 4.5);
    setPopular(filtered);
  }, []);

  return (
    <div className="px-8 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-center ">
        Welcome to the Online Library
      </h1>
      <p className="text-center text-gray-500 mb-10 text-lg">
        Your one stop for every book lover’s quest.
      </p>

      <div className="my-10 space-y-3">
        <h3 className="text-xl font-semibold">Book Categoies</h3>
        {categories.map((category, index) => {
          return (
            <Link
              key={index}
              className="mr-2 border py-2 px-3"
              to={`books/${category}`}
            >
              {category}
            </Link>
          );
        })}
      </div>

      <h2 className="text-xl font-semibold mb-5">Popular Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {popular.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
