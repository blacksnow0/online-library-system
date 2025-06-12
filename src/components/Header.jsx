import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="flex justify-around py-4 text-md font-semibold bg-gray-300">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/books/all">
        <li>Browse Books</li>
      </Link>
      <Link to="/addBook">
        <li>Add Books</li>
      </Link>
    </ul>
  );
};
export default Header;
