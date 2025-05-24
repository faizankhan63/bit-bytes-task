import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Listings from "./pages/listings";
import Layout from "./components/layout/layout";
import Groups from "./pages/groups";
import Leads from "./pages/leads";
import Messages from "./pages/messages-page";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
