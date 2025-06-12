import { createSlice } from "@reduxjs/toolkit";
import { loadBooks, saveBooks } from "../utils/localStorage";

const initialState = {
  books: loadBooks(),
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
      saveBooks(state.books);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
