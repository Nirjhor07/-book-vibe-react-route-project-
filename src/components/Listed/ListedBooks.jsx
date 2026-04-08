import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListBooks from "../ReadListedBooks/ReadListBooks";
import WishListBooks from "../WishListsBooks/WishListBooks";

const ListedBooks = () => {
  const [sortBy, setSortBy] = useState(null);

  return (
    <>
      <div className="mx-auto container flex justify-center py-9">
        <div className="dropdown dropdown-right dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By {sortBy ? `(${sortBy})` : "➡️"}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => setSortBy("Pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => setSortBy("Rating")}>Rating</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs className="container mx-auto bg-base-200">
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadListBooks sortBy={sortBy}></ReadListBooks>
        </TabPanel>
        <TabPanel>
          <WishListBooks sortBy={sortBy}></WishListBooks>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ListedBooks;
