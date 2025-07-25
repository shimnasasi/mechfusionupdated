// // import React from "react";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import { HelmetProvider } from "react-helmet-async";
// // import Home from "./components/Pages/Home";
// // import About from "./components/Pages/About";
// // import Services from "./components/Pages/Services";
// // import Contact from "./components/Pages/Contact";
// // import Career from "./components/Pages/Career";
// // import SingleServices from "./components/Pages/SingleServices";
// // import ScrollToTop from "./components/Layout/ScrollToTop";
// // import Blog from "./components/Pages/Blog";
// // import SingleBlog from "./components/Layout/SingleBlog";
// // import PageNotFound from "./components/Pages/PageNotFound";
// // import AdminLogin from "./components/Layout/admin/AdminLogin";
// // import ProtectedRoute from "./components/Layout/admin/ProtectedRoute";
// // import AdminDashboard from "./components/Layout/admin/AdminDashboard";

// // const App = () => {
// //   return (
// //     <HelmetProvider>
// //       <BrowserRouter>
// //         <ScrollToTop />
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/services" element={<Services />} />
// //           <Route path="/blog" element={<Blog />} />
// //           <Route path="/contact" element={<Contact />} />
// //           <Route path="/career" element={<Career />} />
// //           <Route path="/services/:servicename" element={<SingleServices />} />
// //           {/* <Route path="/services/*" element={<PageNotFound />} /> */}
// //           <Route path="/blog/:blogName" element={<SingleBlog />} />
// //           {/* <Route path="/blog/*" element={<PageNotFound />} /> */}
// //           <Route path="/admin/login" element={<AdminLogin />} />
// //           <Route
// //             path="/admin/dashboard"
// //             element={
// //               <ProtectedRoute>
// //                 <AdminDashboard />
// //               </ProtectedRoute>
// //             }
// //           />
// //           []
// //           <Route path="*" element={<PageNotFound />} />
// //         </Routes>
// //       </BrowserRouter>
// //     </HelmetProvider>
// //   );
// // };

// // export default App;

// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
// import Home from "./components/Pages/Home";
// import About from "./components/Pages/About";
// import Services from "./components/Pages/Services";
// import Contact from "./components/Pages/Contact";
// import Career from "./components/Pages/Career";
// import SingleServices from "./components/Pages/SingleServices";
// import ScrollToTop from "./components/Layout/ScrollToTop";
// import Blog from "./components/Pages/Blog";
// import SingleBlog from "./components/Layout/SingleBlog";
// import PageNotFound from "./components/Pages/PageNotFound";
// import AdminLogin from "./components/Layout/admin/AdminLogin";
// import ProtectedRoute from "./components/Layout/admin/ProtectedRoute";
// import AdminDashboard from "./components/Layout/admin/AdminDashboard";

// const App = () => {
//   return (
//     <HelmetProvider>
//       <BrowserRouter>
//         <ScrollToTop />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/services/:servicename" element={<SingleServices />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/blog/:blogName" element={<SingleBlog />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/career" element={<Career />} />

//           {/* Admin Routes */}
//           <Route path="/admin/login" element={<AdminLogin />} />
//           <Route
//             path="/admin/dashboard"
//             element={
//               <ProtectedRoute>
//                 <AdminDashboard />
//               </ProtectedRoute>
//             }
//           />

//           {/* Fallback */}
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </HelmetProvider>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import SingleServices from "./components/Pages/SingleServices";
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

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:servicename" element={<SingleServices />} />
          {/* <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogName" element={<SingleBlog />} /> */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
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