import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Layout from "../Layout/Layout";
import './BlogDetailPage.css'
import PageTop from "../Layout/PageTop";

const BlogDetailPage = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlogBySlug = async () => {
            const snapshot = await getDocs(collection(db, "blogs"));
            const blogData = snapshot.docs
                .map((doc) => ({ id: doc.id, ...doc.data() }))
                .find((b) => b.slug === slug);

            setBlog(blogData);
        };

        fetchBlogBySlug();
    }, [slug]);

    if (!blog) return <p>Loading...</p>;

    return (
        <Layout>
            <PageTop PageName={"Blogs"} />
            <div className="blog-detail-container" >
                <h1>{blog.title}</h1>

                {blog.imageUrl && (
                    <img
                        src={blog.imageUrl}
                        alt={blog.title}
                    />
                )}

                <p
                >{blog.content}
                </p>

                {/* ✅ KEY POINTS SECTION */}
                {blog.keyPoints && blog.keyPoints.length > 0 && (
                    <div className="keypoints-container">
                        <h2>Key Points</h2>
                        <ul  >
                            {blog.keyPoints.map((point, index) => (
                                <li key={index} style={{ marginBottom: "1rem" }}>
                                    <strong>{point.title}:</strong> {point.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default BlogDetailPage;