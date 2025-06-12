import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Book from "./Book";
import { useSelector } from "react-redux";

function FilteredBooks() {
  const param = useParams();

  const [filteredBooks, setFilteredBooks] = useState([]);

  const [search, setSearch] = useState("");

  const books = useSelector((state) => state.books.books);

  console.log(books);

  useEffect(() => {
    let filtered = [];
    if (param.category == "all") {
      filtered = books;
    } else {
      if (books) {
        filtered = books.filter((item) =>
          item.categories.includes(param.category)
        );
      }
    }
    setFilteredBooks(filtered);
  }, [param]);

  function handleSearch() {
    const filterBooks = books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredBooks(filterBooks);
  }

  return (
    <div className="ml-10">
      <h2 className="m-10 text-2xl  font-bold">
        {param.category !== "all" ? param.category : "All Books"}
      </h2>
      <div className="search">
        <h2 className="text-xl font-semibold">Search Books</h2>
        <div>
          <input
            type="text"
            className="border px-3 py-1"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="px-2 py-1 border font-semibold"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredBooks.map((book) => (
          <Book key={book.id} book={book} category={param.category} />
        ))}
      </div>
    </div>
  );
}

export default FilteredBooks;
