import { books as dummyBooks } from "./dummydata";

const BOOKS_KEY = "books";

export const loadBooks = () => {
  try {
    const data = localStorage.getItem(BOOKS_KEY);
    return data ? JSON.parse(data) : dummyBooks;
  } catch (err) {
    console.error("Failed to load books:", err);
    return dummyBooks;
  }
};

export const saveBooks = (books) => {
  try {
    localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
  } catch (err) {
    console.error("Failed to save books:", err);
  }
};
