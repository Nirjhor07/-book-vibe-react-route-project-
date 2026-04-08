import React, { useContext } from "react";
import { ReadlistContext } from "../ContextApi/ReadListProvider";
import { Link } from "react-router";
import { SlCalender } from "react-icons/sl";
import { FaBookOpen } from "react-icons/fa6";
import "react-tabs/style/react-tabs.css";

const WishListBooks = () => {
  const { wishList } = useContext(ReadlistContext);

  return (
    <>
      <div className="container mx-auto mt-10 mb-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Wish List</h2>
        {wishList.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No books in your wish list yet!
          </p>
        ) : (
          <div className="space-y-4">
            {wishList.map((book) => (
              <div
                key={book.bookId}
                className="card bg-base-100 shadow-md rounded-lg overflow-hidden border border-gray-200 flex flex-row"
              >
                {/* Book Image - Left Side */}
                <div className="bg-gray-100 p-4 flex justify-center items-center w-40 flex-shrink-0">
                  <img
                    src={book.image}
                    alt={book.bookName}
                    className="h-32 object-cover rounded"
                  />
                </div>

                {/* Card Body - Right Side */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  {/* Top Section */}
                  <div>
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-1">{book.bookName}</h3>

                    {/* Author */}
                    <p className="text-sm text-gray-600 mb-2">
                      By: {book.author}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap mb-3">
                      {book.tags?.map((tag, idx) => (
                        <span
                          key={idx}
                          className="badge badge-sm bg-green-100 text-green-700 border-0 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Book Info */}
                    <div className="text-xs text-gray-500 space-y-1 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">
                          <SlCalender></SlCalender>
                        </span>
                        <p>Year of Publishing: {book.yearOfPublishing}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">
                          <FaBookOpen></FaBookOpen>
                        </span>
                        <p>
                          Publisher: {book.publisher}, Page: {book.totalPages}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section - Badges and Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="badge badge-outline text-xs">
                        Category: {book.category}
                      </span>
                      <span className="badge badge-outline text-xs">
                        Rating {book.rating}
                      </span>
                    </div>
                    <Link
                      to={`/bookdetails/${book.bookId}`}
                      className="btn btn-success btn-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default WishListBooks;
