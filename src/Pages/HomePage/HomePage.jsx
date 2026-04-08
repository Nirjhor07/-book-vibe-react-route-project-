import React, { Suspense } from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import AllBooks from "../../components/All Books/AllBooks";

// importing or fetching books api data
const allBookss = async () => {
  const res = await fetch("/booksData.json");
  return res.json();
};

const HomePage = () => {
  const allBooks = allBookss();
  return (
    <>
      <HomeBanner></HomeBanner>
      <Suspense fallback={<p>Loading....</p>}>
        <AllBooks allBooks={allBooks}></AllBooks>
      </Suspense>
    </>
  );
};

export default HomePage;
