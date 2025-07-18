import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    query,
    orderBy,
} from "firebase/firestore";

const BlogList = ({ onEdit, refreshTrigger }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const blogRef = collection(db, "blogs");
            const q = query(blogRef, orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);

            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setBlogs(data);
        };

        fetchBlogs();
    }, [refreshTrigger]);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog post?")) {
            await deleteDoc(doc(db, "blogs", id));
            setBlogs((prev) => prev.filter((blog) => blog.id !== id));
        }
    };

    return (
        <div>
            <h3>📝 Blog Posts</h3>
            {blogs.length === 0 ? (
                <p>No blog posts found.</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {blogs.map((blog) => (
                        <li
                            key={blog.id}
                            style={{
                                marginBottom: "1rem",
                                padding: "1rem",
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                            }}
                        >
                            <h4>{blog.title}</h4>
                            <p>{blog.slug}</p>
                            <div style={{ display: "flex", gap: "1rem" }}>
                                <button
                                    onClick={() => onEdit(blog)}
                                    style={{ background: "#007bff", color: "#fff", padding: "0.3rem 0.8rem" }}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(blog.id)}
                                    style={{ background: "#dc3545", color: "#fff", padding: "0.3rem 0.8rem" }}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BlogList;
