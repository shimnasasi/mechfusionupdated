import React from "react";
import { useNavigate } from "react-router-dom";
import './BlogCard.css'

const BlogCard = ({ blog }) => {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/blog/${blog.slug}`);
    };
 

    return (
        <div
            className="blogcard-container"

        >
            {blog.imageUrl && (
                <img
                    src={blog.imageUrl}
                    alt={blog.title || "Blog Image"}

                />
            )}
            <h2>{blog.title}</h2>
            <p>{blog.content.slice(0, 150)}...</p>
            <button
                onClick={handleReadMore}

            >
                Read More →
            </button>
        </div>
    );
};

export default BlogCard;