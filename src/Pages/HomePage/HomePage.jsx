import React, { Suspense } from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import AllBooks from "../../components/All Books/AllBooks";

// importing or fetching books api data with delay for testing
const allBookss = async () => {
  const res = await fetch("/booksData.json");
  return res.json();
};

const HomePage = () => {
  const allBooks = allBookss();
  return (
    <>
      <HomeBanner></HomeBanner>
      <Suspense
        fallback={
          <div className="flex justify-center items-center my-4">
            <div className="flex gap-2">
              <span className="loading loading-bars loading-xs"></span>
              <span className="loading loading-bars loading-sm"></span>
              <span className="loading loading-bars loading-md"></span>
              <span className="loading loading-bars loading-lg"></span>
              <span className="loading loading-bars loading-xl"></span>
            </div>
          </div>
        }
      >
        <AllBooks allBooks={allBooks}></AllBooks>
      </Suspense>
    </>
  );
};

export default HomePage;
