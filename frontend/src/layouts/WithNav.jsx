// WithNav.js (Stand-alone Functional Component)
import React from "react";
import NavBar from "@components/NavBar";
import { Outlet } from "react-router-dom";

export default function WithNav() {
  return (
    <>
      <NavBar />
      {/* <Home /> */}
      <Outlet />
    </>
  );
}
