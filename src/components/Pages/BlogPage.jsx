import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import BlogCard from "../Layout/BlogCard";
import Layout from "../Layout/Layout";
import './BlogPage.css'
import PageTop from "../Layout/PageTop";

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
            <PageTop PageName="Blogs" />
            <div className="blog-container">
                <div className="blog-card">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default BlogPage;