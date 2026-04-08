import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  //destructuring the book keys
  const { bookName, tags, category, rating, image, author, bookId } = book;

  //   console.log(book);
  return (
    <Link
      to={`/bookdetails/${bookId}`}
      className="card bg-base-100  shadow-sm mt-10"
    >
      <figure className="flex items-center justify-center py-10 bg-base-200">
        <img className="h-[220px]" src={image} />
      </figure>

      <div className="flex">
        {tags.map((tag, index) => (
          <div
            key={index}
            tag={tag}
            className="badge text-green-500 font-bold mt-4 ml-4"
          >
            {tag}
          </div>
        ))}
      </div>

      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <div className="card-actions justify-between  border-t border-dashed border-gray-300 mt-4 ">
          <div className="mt-2">{category}</div>
          <div className="mt-2 flex gap-1 justify-center items-center">
            {rating} <FaRegStar></FaRegStar>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
