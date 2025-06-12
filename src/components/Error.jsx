import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-red-500">404</h1>
      <p className="text-xl mb-6">Oops! Page Not Found</p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default Error;
