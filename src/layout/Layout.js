import {Footer, Header} from "components/blocks";
import React from "react";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
