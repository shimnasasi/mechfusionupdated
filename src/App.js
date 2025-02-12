import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";
import Career from "./components/Pages/Career";
import SingleServices from "./components/Pages/SingleServices";
import ScrollToTop from "./components/Layout/ScrollToTop";
import Blog from "./components/Pages/Blog";
import SingleBlog from "./components/Layout/SingleBlog";
import PageNotFound from "./components/Pages/PageNotFound";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />

          <Route path="/services/:servicename" element={<SingleServices />} />
          {/* <Route path="/services/*" element={<PageNotFound />} /> */}
          <Route path="/blog/:blogName" element={<SingleBlog />} />
          {/* <Route path="/blog/*" element={<PageNotFound />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
