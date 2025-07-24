// import React, { useState, useEffect } from "react";
// import { db } from "../../../firebase";
// import {
//   collection,
//   addDoc,
//   updateDoc,
//   doc,
//   serverTimestamp,
// } from "firebase/firestore";

// const AddBlogForm = ({ blogToEdit, clearEdit, onSaved }) => {
//   const [title, setTitle] = useState("");
//   const [slug, setSlug] = useState("");
//   const [content, setContent] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [keyPoints, setKeyPoints] = useState([{ title: "", description: "" }]);

//   useEffect(() => {
//     if (blogToEdit) {
//       setTitle(blogToEdit.title || "");
//       setSlug(blogToEdit.slug || "");
//       setContent(blogToEdit.content || "");
//       setImageUrl(blogToEdit.imageUrl || "");
//       setKeyPoints(blogToEdit.keyPoints || [{ title: "", description: "" }]);
//     } else {
//       setTitle("");
//       setSlug("");
//       setContent("");
//       setImageUrl("");
//       setKeyPoints([{ title: "", description: "" }]);
//     }
//   }, [blogToEdit]);

//   const handleKeyPointChange = (index, field, value) => {
//     const updated = [...keyPoints];
//     updated[index][field] = value;
//     setKeyPoints(updated);
//   };

//   const addKeyPoint = () => {
//     setKeyPoints([...keyPoints, { title: "", description: "" }]);
//   };

//   const removeKeyPoint = (index) => {
//     const updated = [...keyPoints];
//     updated.splice(index, 1);
//     setKeyPoints(updated);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const blogData = {
//       title,
//       slug,
//       content,
//       imageUrl,
//       keyPoints,
//       createdAt: serverTimestamp(),
//     };

//     try {
//       if (blogToEdit?.id) {
//         const blogRef = doc(db, "blogs", blogToEdit.id);
//         await updateDoc(blogRef, blogData);
//       } else {
//         const blogRef = collection(db, "blogs");
//         await addDoc(blogRef, blogData);
//       }

//       onSaved();
//     } catch (error) {
//       console.error("Error saving blog:", error);
//     }
//   };

//   return (
//     <div>
//       <h3>{blogToEdit ? "✏️ Edit Blog Post" : "➕ Add Blog Post"}</h3>
//       <form
//         onSubmit={handleSubmit}
//         style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
//       >
//         <input
//           type="text"
//           placeholder="Blog Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Slug (example-blog-post)"
//           value={slug}
//           onChange={(e) => setSlug(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Blog Content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           rows={6}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={imageUrl}
//           onChange={(e) => setImageUrl(e.target.value)}
//         />
//         {imageUrl && (
//           <img
//             src={imageUrl}
//             alt="Preview"
//             style={{ maxWidth: "200px", marginTop: "10px" }}
//           />
//         )}

//         {/* Key Points Section */}
//         <h4>Key Points</h4>
//         {keyPoints.map((point, index) => (
//           <div
//             key={index}
//             style={{
//               marginBottom: "1rem",
//               padding: "1rem",
//               border: "1px solid #ddd",
//               borderRadius: "8px",
//             }}
//           >
//             <input
//               type="text"
//               placeholder={`Key Point Title #${index + 1}`}
//               value={point.title}
//               onChange={(e) =>
//                 handleKeyPointChange(index, "title", e.target.value)
//               }
//               required
//               style={{ marginBottom: "0.5rem", width: "100%" }}
//             />
//             <textarea
//               placeholder="Description"
//               value={point.description}
//               onChange={(e) =>
//                 handleKeyPointChange(index, "description", e.target.value)
//               }
//               rows={2}
//               required
//               style={{ width: "100%" }}
//             />
//             <button
//               type="button"
//               onClick={() => removeKeyPoint(index)}
//               style={{
//                 background: "#dc3545",
//                 color: "#fff",
//                 padding: "0.3rem 0.6rem",
//                 marginTop: "0.5rem",
//               }}
//               disabled={keyPoints.length === 1}
//             >
//               🗑️ Remove
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={addKeyPoint}
//           style={{
//             background: "#007bff",
//             color: "#fff",
//             padding: "0.5rem",
//             width: "fit-content",
//           }}
//         >
//           ➕ Add Key Point
//         </button>

//         {/* Submit Buttons */}
//         <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
//           <button
//             type="submit"
//             style={{
//               background: "#28a745",
//               color: "#fff",
//               padding: "0.5rem 1rem",
//             }}
//           >
//             {blogToEdit ? "Update Blog" : "Add Blog"}
//           </button>
//           {blogToEdit && (
//             <button
//               type="button"
//               onClick={clearEdit}
//               style={{
//                 background: "#6c757d",
//                 color: "#fff",
//                 padding: "0.5rem 1rem",
//               }}
//             >
//               Cancel
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddBlogForm;
import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

const AddBlogForm = ({ blogToEdit, clearEdit, onSaved }) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [keyPoints, setKeyPoints] = useState([{ title: "", description: "" }]);

  useEffect(() => {
    if (blogToEdit) {
      setTitle(blogToEdit.title || "");
      setSlug(blogToEdit.slug || "");
      setContent(blogToEdit.content || "");
      setImageUrl(blogToEdit.imageUrl || "");
      setMetaTitle(blogToEdit.metaTitle || "");
      setMetaDescription(blogToEdit.metaDescription || "");
      setMetaKeywords(blogToEdit.metaKeywords || "");
      setKeyPoints(blogToEdit.keyPoints || [{ title: "", description: "" }]);
    } else {
      setTitle("");
      setSlug("");
      setContent("");
      setImageUrl("");
      setMetaTitle("");
      setMetaDescription("");
      setMetaKeywords("");
      setKeyPoints([{ title: "", description: "" }]);
    }
  }, [blogToEdit]);

  const handleKeyPointChange = (index, field, value) => {
    const updated = [...keyPoints];
    updated[index][field] = value;
    setKeyPoints(updated);
  };

  const addKeyPoint = () => {
    setKeyPoints([...keyPoints, { title: "", description: "" }]);
  };

  const removeKeyPoint = (index) => {
    const updated = [...keyPoints];
    updated.splice(index, 1);
    setKeyPoints(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      title,
      slug,
      content,
      imageUrl,
      metaTitle,
      metaDescription,
      metaKeywords,
      keyPoints,
      createdAt: serverTimestamp(),
    };

    try {
      if (blogToEdit?.id) {
        const blogRef = doc(db, "blogs", blogToEdit.id);
        await updateDoc(blogRef, blogData);
      } else {
        const blogRef = collection(db, "blogs");
        await addDoc(blogRef, blogData);
      }

      onSaved();
    } catch (error) {
      console.error("Error saving blog:", error);
    }
  };

  return (
    <div>
      <h3>{blogToEdit ? "✏️ Edit Blog Post" : "➕ Add Blog Post"}</h3>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Slug (example-blog-post)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Preview"
            style={{ maxWidth: "200px", marginTop: "10px" }}
          />
        )}

        {/* Meta Fields */}
        <h4>SEO Meta Details</h4>
        <input
          type="text"
          placeholder="Meta Title"
          value={metaTitle}
          onChange={(e) => setMetaTitle(e.target.value)}
        />
        <textarea
          placeholder="Meta Description"
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          rows={3}
        />
        <input
          type="text"
          placeholder="Meta Keywords (comma separated)"
          value={metaKeywords}
          onChange={(e) => setMetaKeywords(e.target.value)}
        />

        {/* Key Points Section */}
        <h4>Key Points</h4>
        {keyPoints.map((point, index) => (
          <div
            key={index}
            style={{
              marginBottom: "1rem",
              padding: "1rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <input
              type="text"
              placeholder={`Key Point Title #${index + 1}`}
              value={point.title}
              onChange={(e) =>
                handleKeyPointChange(index, "title", e.target.value)
              }
              required
              style={{ marginBottom: "0.5rem", width: "100%" }}
            />
            <textarea
              placeholder="Description"
              value={point.description}
              onChange={(e) =>
                handleKeyPointChange(index, "description", e.target.value)
              }
              rows={2}
              required
              style={{ width: "100%" }}
            />
            <button
              type="button"
              onClick={() => removeKeyPoint(index)}
              style={{
                background: "#dc3545",
                color: "#fff",
                padding: "0.3rem 0.6rem",
                marginTop: "0.5rem",
              }}
              disabled={keyPoints.length === 1}
            >
              🗑️ Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addKeyPoint}
          style={{
            background: "#007bff",
            color: "#fff",
            padding: "0.5rem",
            width: "fit-content",
          }}
        >
          ➕ Add Key Point
        </button>

        {/* Submit Buttons */}
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <button
            type="submit"
            style={{
              background: "#28a745",
              color: "#fff",
              padding: "0.5rem 1rem",
            }}
          >
            {blogToEdit ? "Update Blog" : "Add Blog"}
          </button>
          {blogToEdit && (
            <button
              type="button"
              onClick={clearEdit}
              style={{
                background: "#6c757d",
                color: "#fff",
                padding: "0.5rem 1rem",
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddBlogForm;