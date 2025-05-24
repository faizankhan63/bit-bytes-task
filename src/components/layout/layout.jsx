import React from "react"; 
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      <Navbar />
      <main className="pt-20">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
