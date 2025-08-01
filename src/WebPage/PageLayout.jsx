import Navbar from "./Navbar";
import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Auth, { useAuth } from "./Auth";
import Login from "./Login";

function PageLayout() {
  const location = useLocation();

  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return (
      <>
        <Navbar />
        <main>{location.pathname === "/" ? <Dashboard /> : <Outlet />}</main>
        <Footer />
      </>
    );
  } else {
    return <Login />;
  }
}

export default PageLayout;