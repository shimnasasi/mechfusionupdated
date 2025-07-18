// // import React, { useState, useEffect } from "react";
// // import { db } from "../../../firebase";
// // import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
// // import "./AddServiceForm.css";

// // const AddServiceForm = ({ selectedService, clearSelected }) => {
// //   const [title, setTitle] = useState("");
// //   const [slug, setSlug] = useState("");
// //   const [intro, setIntro] = useState("");
// //   const [imageUrl, setImageUrl] = useState("");
// //   const [sections, setSections] = useState([{ heading: "", content: "" }]);
// //   const [bullets, setBullets] = useState([""]);
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     if (selectedService) {
// //       setTitle(selectedService.title || "");
// //       setSlug(selectedService.slug || "");
// //       setIntro(selectedService.intro || "");
// //       setImageUrl(selectedService.imageUrl || "");
// //       setSections(selectedService.sections || [{ heading: "", content: "" }]);
// //       setBullets(selectedService.bullets || [""]);
// //     }
// //   }, [selectedService]);

// //   const resetForm = () => {
// //     setTitle("");
// //     setSlug("");
// //     setIntro("");
// //     setImageUrl("");
// //     setSections([{ heading: "", content: "" }]);
// //     setBullets([""]);
// //     clearSelected();
// //   };

// //   const handleSectionChange = (index, key, value) => {
// //     const updated = [...sections];
// //     updated[index][key] = value;
// //     setSections(updated);
// //   };

// //   const handleBulletChange = (index, value) => {
// //     const updated = [...bullets];
// //     updated[index] = value;
// //     setBullets(updated);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     const data = {
// //       title,
// //       slug,
// //       intro,
// //       imageUrl,
// //       sections,
// //       bullets,
// //     };

// //     try {
// //       if (selectedService?.id) {
// //         const docRef = doc(db, "services", selectedService.id);
// //         await updateDoc(docRef, data);
// //         alert("Service updated!");
// //       } else {
// //         await addDoc(collection(db, "services"), data);
// //         alert("Service added!");
// //       }

// //       resetForm();
// //     } catch (error) {
// //       console.error("Error saving service:", error);
// //       alert("Something went wrong");
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="form-container">
// //       <h2>{selectedService ? "Edit Service" : "Add New Service"}</h2>

// //       <input
// //         type="text"
// //         placeholder="Title"
// //         value={title}
// //         onChange={(e) => setTitle(e.target.value)}
// //         required
// //       />

// //       <input
// //         type="text"
// //         placeholder="Slug (e.g. mechanical-design)"
// //         value={slug}
// //         onChange={(e) => setSlug(e.target.value)}
// //         required
// //       />

// //       <textarea
// //         placeholder="Intro paragraph"
// //         value={intro}
// //         onChange={(e) => setIntro(e.target.value)}
// //         required
// //       />

// //       <input
// //         type="text"
// //         placeholder="Image URL"
// //         value={imageUrl}
// //         onChange={(e) => setImageUrl(e.target.value)}
// //         required
// //       />

// //       {imageUrl && (
// //         <div className="image-preview">
// //           <img src={imageUrl} alt="Preview" width="150" />
// //         </div>
// //       )}

// //       <h3>Sections</h3>
// //       {sections.map((section, index) => (
// //         <div key={index} className="section-group">
// //           <input
// //             placeholder="Section Heading"
// //             value={section.heading}
// //             onChange={(e) =>
// //               handleSectionChange(index, "heading", e.target.value)
// //             }
// //           />
// //           <textarea
// //             placeholder="Section Content"
// //             value={section.content}
// //             onChange={(e) =>
// //               handleSectionChange(index, "content", e.target.value)
// //             }
// //           />
// //         </div>
// //       ))}
// //       <button
// //         type="button"
// //         onClick={() => setSections([...sections, { heading: "", content: "" }])}
// //       >
// //         + Add Section
// //       </button>

// //       <h3>Bullet Points</h3>
// //       <div className="bullet-group">
// //         {bullets.map((item, i) => (
// //           <input
// //             key={i}
// //             placeholder={`Bullet ${i + 1}`}
// //             value={item}
// //             onChange={(e) => handleBulletChange(i, e.target.value)}
// //           />
// //         ))}
// //       </div>
// //       <button type="button" onClick={() => setBullets([...bullets, ""])}>
// //         + Add Point
// //       </button>

// //       <div className="button-group">
// //         <button type="submit" disabled={loading}>
// //           {loading
// //             ? "Saving..."
// //             : selectedService
// //             ? "Update Service"
// //             : "Add Service"}
// //         </button>

// //         {selectedService && (
// //           <button type="button" onClick={resetForm} className="cancel-btn">
// //             Cancel Edit
// //           </button>
// //         )}
// //       </div>
// //     </form>
// //   );
// // };

// // export default AddServiceForm;

// import React, { useState, useEffect } from "react";
// import { db } from "../../../firebase";
// import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

// const AddServiceForm = ({ serviceToEdit, clearEdit, onSaved }) => {
//   const [title, setTitle] = useState("");
//   const [slug, setSlug] = useState("");
//   const [intro, setIntro] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [sections, setSections] = useState([]);
//   const [bullets, setBullets] = useState([]);

//   useEffect(() => {
//     if (serviceToEdit) {
//       setTitle(serviceToEdit.title || "");
//       setSlug(serviceToEdit.slug || "");
//       setIntro(serviceToEdit.intro || "");
//       setImageUrl(serviceToEdit.imageUrl || "");
//       setSections(serviceToEdit.sections || []);
//       setBullets(serviceToEdit.bullets || []);
//     } else {
//       setTitle("");
//       setSlug("");
//       setIntro("");
//       setImageUrl("");
//       setSections([]);
//       setBullets([]);
//     }
//   }, [serviceToEdit]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!title || !slug || !intro || !imageUrl) {
//       alert("Please fill in all required fields");
//       return;
//     }

//     const data = {
//       title,
//       slug,
//       intro,
//       imageUrl,
//       sections,
//       bullets,
//     };

//     try {
//       if (serviceToEdit?.id) {
//         await updateDoc(doc(db, "services", serviceToEdit.id), data);
//       } else {
//         await addDoc(collection(db, "services"), data);
//       }

//       onSaved();
//       clearEdit();
//       setTitle("");
//       setSlug("");
//       setIntro("");
//       setImageUrl("");
//       setSections([]);
//       setBullets([]);
//     } catch (error) {
//       console.error("Error saving service:", error);
//       alert("Failed to save service");
//     }
//   };

//   const handleSectionChange = (index, field, value) => {
//     const updatedSections = [...sections];
//     updatedSections[index][field] = value;
//     setSections(updatedSections);
//   };

//   const handleRemoveSection = (index) => {
//     const updated = [...sections];
//     updated.splice(index, 1);
//     setSections(updated);
//   };

//   const handleRemoveBullet = (index) => {
//     const updated = [...bullets];
//     updated.splice(index, 1);
//     setBullets(updated);
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
//       <h2>{serviceToEdit ? "✏️ Edit Service" : "➕ Add New Service"}</h2>
//       <ul style={{ listStyleType: "circle", paddingLeft: "1.5rem" }}>
//         <li style={{ marginBottom: "1rem" }}>
//           <label>Title:</label>
//           <br />
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             style={{ width: "100%", padding: "0.5rem" }}
//           />
//         </li>

//         <li style={{ marginBottom: "1rem" }}>
//           <label>Slug:</label>
//           <br />
//           <input
//             type="text"
//             value={slug}
//             onChange={(e) => setSlug(e.target.value)}
//             required
//             style={{ width: "100%", padding: "0.5rem" }}
//           />
//         </li>

//         <li style={{ marginBottom: "1rem" }}>
//           <label>Intro:</label>
//           <br />
//           <textarea
//             value={intro}
//             onChange={(e) => setIntro(e.target.value)}
//             required
//             rows={3}
//             style={{ width: "100%", padding: "0.5rem" }}
//           />
//         </li>

//         <li style={{ marginBottom: "1rem" }}>
//           <label>Image URL:</label>
//           <br />
//           <input
//             type="text"
//             value={imageUrl}
//             onChange={(e) => setImageUrl(e.target.value)}
//             required
//             style={{ width: "100%", padding: "0.5rem" }}
//           />
//         </li>

//         {imageUrl && (
//           <li className="image-preview" style={{ marginBottom: "1rem" }}>
//             <img
//               src={imageUrl}
//               alt="Preview"
//               style={{ maxWidth: "300px", display: "block", marginTop: "10px" }}
//             />
//           </li>
//         )}

//         {/* Sections */}
//         <li style={{ marginBottom: "1rem" }}>
//           <label>Sections:</label>
//           {sections.map((section, index) => (
//             <div
//               key={index}
//               style={{
//                 marginBottom: "1rem",
//                 padding: "0.5rem",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//               }}
//             >
//               <input
//                 type="text"
//                 placeholder="Heading"
//                 value={section.heading}
//                 onChange={(e) =>
//                   handleSectionChange(index, "heading", e.target.value)
//                 }
//                 style={{
//                   width: "100%",
//                   padding: "0.5rem",
//                   marginBottom: "0.5rem",
//                 }}
//               />
//               <textarea
//                 placeholder="Content"
//                 value={section.content}
//                 onChange={(e) =>
//                   handleSectionChange(index, "content", e.target.value)
//                 }
//                 rows={3}
//                 style={{ width: "100%", padding: "0.5rem" }}
//               />
//               <button
//                 type="button"
//                 onClick={() => handleRemoveSection(index)}
//                 style={{ marginTop: "0.5rem", color: "red" }}
//               >
//                 Remove Section
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() =>
//               setSections([...sections, { heading: "", content: "" }])
//             }
//             style={{ marginTop: "0.5rem" }}
//           >
//             + Add Section
//           </button>
//         </li>

//         {/* Bullets */}
//         <li style={{ marginBottom: "1rem" }}>
//           <label>Bullet Points:</label>
//           {bullets.map((bullet, index) => (
//             <div
//               key={index}
//               style={{ display: "flex", marginBottom: "0.5rem" }}
//             >
//               <input
//                 type="text"
//                 value={bullet}
//                 onChange={(e) => {
//                   const newBullets = [...bullets];
//                   newBullets[index] = e.target.value;
//                   setBullets(newBullets);
//                 }}
//                 style={{ flexGrow: 1, padding: "0.5rem" }}
//               />
//               <button
//                 type="button"
//                 onClick={() => handleRemoveBullet(index)}
//                 style={{ marginLeft: "0.5rem", color: "red" }}
//               >
//                 ❌
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => setBullets([...bullets, ""])}
//             style={{ marginTop: "0.5rem" }}
//           >
//             + Add Point
//           </button>
//         </li>
//       </ul>

//       <div style={{ marginTop: "1rem" }}>
//         <button type="submit" style={{ padding: "0.5rem 1rem" }}>
//           {serviceToEdit ? "Update Service" : "Add Service"}
//         </button>

//         {serviceToEdit && (
//           <button
//             type="button"
//             onClick={clearEdit}
//             style={{
//               marginLeft: "1rem",
//               background: "lightgray",
//               padding: "0.5rem 1rem",
//             }}
//           >
//             Cancel Edit
//           </button>
//         )}
//       </div>
//     </form>
//   );
// };

// export default AddServiceForm;

import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

const AddServiceForm = ({ serviceToEdit, clearEdit, onSaved }) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [intro, setIntro] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [sections, setSections] = useState([]);
  const [bullets, setBullets] = useState([]);

  // SEO Fields
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [focusKeyword, setFocusKeyword] = useState("");
  const [altText, setAltText] = useState("");

  useEffect(() => {
    if (serviceToEdit) {
      setTitle(serviceToEdit.title || "");
      setSlug(serviceToEdit.slug || "");
      setIntro(serviceToEdit.intro || "");
      setImageUrl(serviceToEdit.imageUrl || "");
      setSections(serviceToEdit.sections || []);
      setBullets(serviceToEdit.bullets || []);
      setMetaTitle(serviceToEdit.metaTitle || "");
      setMetaDescription(serviceToEdit.metaDescription || "");
      setFocusKeyword(serviceToEdit.focusKeyword || "");
      setAltText(serviceToEdit.altText || "");
    } else {
      setTitle("");
      setSlug("");
      setIntro("");
      setImageUrl("");
      setSections([]);
      setBullets([]);
      setMetaTitle("");
      setMetaDescription("");
      setFocusKeyword("");
      setAltText("");
    }
  }, [serviceToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !slug || !intro || !imageUrl) {
      alert("Please fill in all required fields");
      return;
    }

    const data = {
      title,
      slug,
      intro,
      imageUrl,
      sections,
      bullets,
      metaTitle,
      metaDescription,
      focusKeyword,
      altText,
    };

    try {
      if (serviceToEdit?.id) {
        await updateDoc(doc(db, "services", serviceToEdit.id), data);
      } else {
        await addDoc(collection(db, "services"), data);
      }

      onSaved();
      clearEdit();
    } catch (error) {
      console.error("Error saving service:", error);
      alert("Failed to save service");
    }
  };

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  const handleRemoveSection = (index) => {
    const updated = [...sections];
    updated.splice(index, 1);
    setSections(updated);
  };

  const handleRemoveBullet = (index) => {
    const updated = [...bullets];
    updated.splice(index, 1);
    setBullets(updated);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>{serviceToEdit ? "✏️ Edit Service" : "➕ Add New Service"}</h2>
      <ul style={{ listStyleType: "circle", paddingLeft: "1.5rem" }}>
        <li style={{ marginBottom: "1rem" }}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </li>

        <li style={{ marginBottom: "1rem" }}>
          <label>Slug:</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </li>

        <li style={{ marginBottom: "1rem" }}>
          <label>Intro:</label>
          <textarea
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
            required
            rows={3}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </li>

        <li style={{ marginBottom: "1rem" }}>
          <label>Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </li>

        {imageUrl && (
          <li className="image-preview" style={{ marginBottom: "1rem" }}>
            <img
              src={imageUrl}
              alt={altText || "Preview"}
              style={{ maxWidth: "300px", display: "block", marginTop: "10px" }}
            />
          </li>
        )}

        {/* SEO Fields */}
        <li style={{ marginBottom: "1rem" }}>
          <label>Meta Title:</label>
          <input
            type="text"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            maxLength={70}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </li>

        <li style={{ marginBottom: "1rem" }}>
          <label>Meta Description:</label>
          <textarea
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            maxLength={160}
            rows={3}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </li>

        <li style={{ marginBottom: "1rem" }}>
          <label>Focus Keyword:</label>
          <input
            type="text"
            value={focusKeyword}
            onChange={(e) => setFocusKeyword(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </li>

        <li style={{ marginBottom: "1rem" }}>
          <label>Alt Text (Image):</label>
          <input
            type="text"
            value={altText}
            onChange={(e) => setAltText(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </li>

        {/* Sections */}
        <li style={{ marginBottom: "1rem" }}>
          <label>Sections:</label>
          {sections.map((section, index) => (
            <div
              key={index}
              style={{
                marginBottom: "1rem",
                padding: "0.5rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <input
                type="text"
                placeholder="Heading"
                value={section.heading}
                onChange={(e) =>
                  handleSectionChange(index, "heading", e.target.value)
                }
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              />
              <textarea
                placeholder="Content"
                value={section.content}
                onChange={(e) =>
                  handleSectionChange(index, "content", e.target.value)
                }
                rows={3}
                style={{ width: "100%", padding: "0.5rem" }}
              />
              <button
                type="button"
                onClick={() => handleRemoveSection(index)}
                style={{ marginTop: "0.5rem", color: "red" }}
              >
                Remove Section
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setSections([...sections, { heading: "", content: "" }])
            }
            style={{ marginTop: "0.5rem" }}
          >
            + Add Section
          </button>
        </li>

        {/* Bullets */}
        <li style={{ marginBottom: "1rem" }}>
          <label>Bullet Points:</label>
          {bullets.map((bullet, index) => (
            <div key={index} style={{ display: "flex", marginBottom: "0.5rem" }}>
              <input
                type="text"
                value={bullet}
                onChange={(e) => {
                  const newBullets = [...bullets];
                  newBullets[index] = e.target.value;
                  setBullets(newBullets);
                }}
                style={{ flexGrow: 1, padding: "0.5rem" }}
              />
              <button
                type="button"
                onClick={() => handleRemoveBullet(index)}
                style={{ marginLeft: "0.5rem", color: "red" }}
              >
                ❌
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setBullets([...bullets, ""])}
            style={{ marginTop: "0.5rem" }}
          >
            + Add Point
          </button>
        </li>
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          {serviceToEdit ? "Update Service" : "Add Service"}
        </button>
        {serviceToEdit && (
          <button
            type="button"
            onClick={clearEdit}
            style={{
              marginLeft: "1rem",
              background: "lightgray",
              padding: "0.5rem 1rem",
            }}
          >
            Cancel Edit
          </button>
        )}
      </div>
    </form>
  );
};

export default AddServiceForm;
