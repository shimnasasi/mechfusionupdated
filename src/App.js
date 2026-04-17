import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import SingleService from "./components/Pages/SingleService";
import Contact from "./components/Pages/Contact";
import Career from "./components/Pages/Career";
import Blog from "./components/Pages/Blog";
import SingleBlog from "./components/Layout/SingleBlog";
import PageNotFound from "./components/Pages/PageNotFound";
import ScrollToTop from "./components/Layout/ScrollToTop";

import AdminLogin from "./components/Layout/admin/AdminLogin";
import ProtectedRoute from "./components/Layout/admin/ProtectedRoute";
import AdminDashboard from "./components/Layout/admin/AdminDashboard";

// 🆕 New Admin Pages
import ServiceManager from "./components/Layout/admin/ServiceManager";
import BlogManager from "./components/Layout/admin/BlogManager";
import BlogPage from "./components/Pages/BlogPage";
import BlogDetailPage from "./components/Pages/BlogDetailPage";
import SchemaOrg from "./components/Layout/SchemaOrg";
import MechanicalDesign from "./components/Layout/MechanicalDesign";
import CncProgramming from "./components/Layout/CncProgramming";
import EngineeringDocumentation from "./components/Layout/EngineeringDocumentation";
import OtherServices from "./components/Layout/OtherServices";
import BlogOne from "./components/Layout/BlogOne";
import BlogTwo from "./components/Layout/BlogTwo";
import BlogThree from "./components/Layout/BlogThree";
import Blogfour from "./components/Layout/Blogfour";

// import LocalBusinessSchema from "./components/Layout/LocalBusinessSchema";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <SchemaOrg />
        {/* <LocalBusinessSchema/> */}
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/mechanical-design" element={<MechanicalDesign />} />
          <Route path="/services/cnc-programming" element={<CncProgramming />} />
          <Route path="/services/engineering-documentation" element={<EngineeringDocumentation />} />
          <Route path="/services/other-services" element={<OtherServices />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/services/:servicename" element={<SingleService />} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/jigs-fixture-design-services-canada" element={<BlogOne />} />
          <Route path="/blog/jigs-fixture-design-services-uk-automotive-aerospace" element={<BlogTwo />} />
          <Route path="/blog/injection-mold-design-services-cost-effective-manufacturing" element={<BlogThree />} />
          <Route path="/blog/jigs-and-fixture-design-services" element={<Blogfour />} />
          {/* <Route path="/blog/:blogName" element={<SingleBlog />} /> */}
          {/* <Route path="/blog" element={<BlogPage />} /> */}
          {/* <Route path="/blog/:slug" element={<BlogDetailPage />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/services"
            element={
              <ProtectedRoute>
                <ServiceManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/blogs"
            element={
              <ProtectedRoute>
                <BlogManager />
              </ProtectedRoute>
            }
          />

          {/* Catch All */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;