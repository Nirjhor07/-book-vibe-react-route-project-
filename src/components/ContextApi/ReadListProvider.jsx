import React, { useState } from "react";
import { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
export const ReadlistContext = createContext();

const ReadListProvider = ({ children }) => {
  // useState for book object add readList - load from localStorage
  const [storedBooks, setStoredBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  // function for handle add to readlist
  const handleReadList = (book) => {
    // agei check diya nibo je read list e ase kina
    const isWExist = wishList.find((b) => b.bookId === book.bookId);
    if (isWExist) {
      toast(`${book.bookName} already in Wish-list!`, { type: "warning" });
      return;
    }

    const isExist = storedBooks.find((b) => b.bookId === book.bookId);
    if (isExist) {
      toast(`${book.bookName} already in read-List!`, { type: "warning" });
      return;
    } else {
      const updateBooks = [...storedBooks, book];
      setStoredBooks(updateBooks);
      toast(`${book.bookName} added to readlist successfully!`);
    }
    // console.log(clickedBook, storedBooks);
  };
  // function for handle add to Wishlist
  const handleWishList = (book) => {
    // agei check diya nibo je read list e ase kina
    const isExist = storedBooks.find((b) => b.bookId === book.bookId);
    if (isExist) {
      toast(`${book.bookName} already in read-List!`, { type: "warning" });
      return;
    }

    const isWExist = wishList.find((b) => b.bookId === book.bookId);
    if (isWExist) {
      toast(`${book.bookName} already in Wish-list!`, { type: "warning" });
      return;
    } else {
      const updateBooks = [...wishList, book];
      setWishList(updateBooks);
      toast(`${book.bookName} added to readlist successfully!`);
    }
  };

  const data = {
    handleReadList,
    storedBooks,
    setStoredBooks,
    handleWishList,
    wishList,
    setWishList,
  };
  return (
    <ReadlistContext.Provider value={data}>{children}</ReadlistContext.Provider>
  );
};

export default ReadListProvider;
