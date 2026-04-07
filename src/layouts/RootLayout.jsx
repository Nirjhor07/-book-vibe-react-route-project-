import React from "react";
import Nav from "../components/Navbar/Nav";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      {/* This is root layout from here the rest component will be shown */}
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
