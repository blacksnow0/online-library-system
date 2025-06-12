import { Link } from "react-router-dom";

function Book(props) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition duration-300 bg-white p-4 flex flex-col items-center text-center">
      <img
        src={props.book.image}
        alt={props.book.title}
        className="w-40 h-60 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{props.book.title}</h3>
      <p className="text-gray-600">{props.book.author}</p>
      <p className=" font-medium">⭐ {props.book.rating}</p>
      <button className="py-1 px-2 cursor-pointer mt-2 border ">
        <Link to={`/bookDetail/${props.book.id}`}>More details</Link>
      </button>
    </div>
  );
}

export default Book;
