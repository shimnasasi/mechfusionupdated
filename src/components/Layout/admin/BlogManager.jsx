import React, { useState } from "react";
import AddBlogForm from "./AddBlogForm";
import BlogList from "./BlogList";

const BlogManager = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [refreshFlag, setRefreshFlag] = useState(Date.now());

    const handleSave = () => {
        setRefreshFlag(Date.now()); // force BlogList to re-fetch
        setSelectedBlog(null);      // clear form
    };

    return (
        <div style={{ marginTop: "2rem" }}>
            <h2>📝 Blog Management</h2>

            <section style={{ marginTop: "1.5rem" }}>
                <AddBlogForm
                    blogToEdit={selectedBlog}
                    clearEdit={() => setSelectedBlog(null)}
                    onSaved={handleSave}
                />
            </section>

            <hr style={{ margin: "2rem 0" }} />

            <section>
                <BlogList
                    onEdit={setSelectedBlog}
                    refreshTrigger={refreshFlag}
                />
            </section>
        </div>
    );
};

export default BlogManager;
