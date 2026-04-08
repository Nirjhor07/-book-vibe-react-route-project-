import React, { use } from "react";
import BookCard from "./BookCard/BookCard";

const AllBooks = ({ allBooks }) => {
  //load the api data
  const books = use(allBooks);
  //   console.log(books);
  return (
    <div className="container mx-auto mt-10 ">
      <h2 className="text-3xl font-bold text-center">All Books</h2>
      {/* indivisual book card */}
      <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
