import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import BlogCard from "../Layout/BlogCard";
import Layout from "../Layout/Layout";
import './BlogPage.css'
import PageTop from "../Layout/PageTop";
import { Helmet } from "react-helmet";
import HomeContact from "../Layout/HomeContact";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);
            const blogList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setBlogs(blogList);
        };

        fetchBlogs();
    }, []);

    return (
        <Layout>
            <Helmet>
                <title>Design for Manufacturing (DFM) & CNC Programming | Mechfusion</title>
                <link rel="canonical" href={`${window.location.origin}/blog`} />
                <meta
                    name="description"
                    content="Mechfusion provides DFM and CNC programming services to improve part design, reduce production issues, and ensure smooth manufacturing."
                />
                <meta name="keywords" content="Design for Manufacturing (DFM)" />
            </Helmet>
            <PageTop PageName="Blogs" />
            <div className="blog-container">
                <div className="blog-card">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
            <HomeContact/>
        </Layout>
    );
};

export default BlogPage;