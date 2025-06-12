# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# online-library-system

Home Page: Displays all the popular books.

Filtered View: Filter books by categories like "Fiction", "Dark Academia", etc.

Book Details: Click any book to see detailed info (title, author, rating, description).

Add Book Form:

Add new books to the collection.

Categories handled as an array from a comma-separated input.

Form validation for all fields.

Redux used for global book state management.
Data Persistence:

All book data is saved to and loaded from localStorage.

Page Not Found: Graceful fallback with a link back to Home for undefined routes.
React Router used for page routing.
TailwindCSS styled UI.

## Git repo :- https://github.com/blacksnow0/online-library-system
