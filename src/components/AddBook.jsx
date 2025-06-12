import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../utils/bookSlice";

export default function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    rating: "",
    image: "",
    categories: [],
  });

  const [categoryInput, setCategoryInput] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    const input = e.target.value;
    setCategoryInput(input);
    const array = input
      .split(",")
      .map((c) => c.trim())
      .filter((c) => c.length > 0);
    setBook((prev) => ({ ...prev, categories: array }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, author, description, rating, image, categories } = book;

    if (
      !title ||
      !author ||
      !description ||
      !rating ||
      !image ||
      categories.length === 0
    ) {
      setError("All fields are required");
      return;
    }

    const newBook = {
      ...book,
      id: crypto.randomUUID(),
      rating: parseFloat(rating),
    };

    dispatch(addBook(newBook));
    navigate("/books/all");
  };

  return (
    <form className="max-w-md mx-auto p-4 space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold">Add New Book</h2>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      {["title", "author", "description", "rating", "image"].map((field) => (
        <input
          key={field}
          className="w-full border p-2 rounded"
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          name={field}
          value={book[field]}
          onChange={handleChange}
        />
      ))}

      <input
        className="w-full border p-2 rounded"
        placeholder="Categories (comma separated)"
        name="categories"
        value={categoryInput}
        onChange={handleCategoryChange}
      />

      <button className=" px-4 py-2 border">Add Book</button>
    </form>
  );
}
