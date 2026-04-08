import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListBooks from "../ReadListedBooks/ReadListBooks";
import WishListBooks from "../WishListsBooks/WishListBooks";

const ListedBooks = () => {
  return (
    <Tabs className="container mx-auto bg-base-200">
      <TabList>
        <Tab>Read List</Tab>
        <Tab>Wish List</Tab>
      </TabList>

      <TabPanel>
        <ReadListBooks></ReadListBooks>
      </TabPanel>
      <TabPanel>
        <WishListBooks></WishListBooks>
      </TabPanel>
    </Tabs>
  );
};

export default ListedBooks;
