import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();

  const clickedBook = books.find((book) => book.bookId == id);

  const {
    bookName,
    tags,
    category,
    rating,
    image,
    author,
    totalPages,
    publisher,
    yearOfPublishing,
    review
  } = clickedBook;

  return (
    <div className="max-w-6xl mx-auto mt-20 p-6 bg-base-200 rounded-2xl shadow-lg">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE IMAGE */}
        <div className="bg-base-100 rounded-2xl p-6 flex justify-center">
          <img
            src={image}
            alt={bookName}
            className="h-[420px] object-contain"
          />
        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{bookName}</h1>
          <p className="text-gray-500">By : {author}</p>

          <hr />

          <p className="font-medium">{category}</p>

          <hr />

          {/* Review (dummy text like UI) */}
          <p>
            <span className="font-semibold">Review :</span>{" "}
           {review}
          </p>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span key={index} className="badge badge-success badge-outline">
                {tag}
              </span>
            ))}
          </div>

          <hr />

          {/* Book Info */}
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-gray-500">Number of Pages:</span>{" "}
              <span className="font-semibold">{totalPages}</span>
            </p>
            <p>
              <span className="text-gray-500">Publisher:</span>{" "}
              <span className="font-semibold">{publisher}</span>
            </p>
            <p>
              <span className="text-gray-500">Year of Publishing:</span>{" "}
              <span className="font-semibold">{yearOfPublishing}</span>
            </p>
            <p>
              <span className="text-gray-500">Rating:</span>{" "}
              <span className="font-semibold">{rating}</span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="btn btn-outline">Read</button>
            <button className="btn btn-info text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;