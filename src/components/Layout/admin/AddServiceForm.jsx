import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

const AddServiceForm = ({ selectedService, clearSelected }) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [intro, setIntro] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [sections, setSections] = useState([{ heading: "", content: "" }]);
  const [bullets, setBullets] = useState([""]);
  const [loading, setLoading] = useState(false);

  // When Edit is clicked, populate form
  useEffect(() => {
    if (selectedService) {
      setTitle(selectedService.title || "");
      setSlug(selectedService.slug || "");
      setIntro(selectedService.intro || "");
      setImageUrl(selectedService.imageUrl || "");
      setSections(selectedService.sections || [{ heading: "", content: "" }]);
      setBullets(selectedService.bullets || [""]);
    }
  }, [selectedService]);

  const resetForm = () => {
    setTitle("");
    setSlug("");
    setIntro("");
    setImageUrl("");
    setSections([{ heading: "", content: "" }]);
    setBullets([""]);
    clearSelected(); // clears selectedService in parent
  };

  const handleSectionChange = (index, key, value) => {
    const updated = [...sections];
    updated[index][key] = value;
    setSections(updated);
  };

  const handleBulletChange = (index, value) => {
    const updated = [...bullets];
    updated[index] = value;
    setBullets(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      title,
      slug,
      intro,
      imageUrl,
      sections,
      bullets,
    };

    try {
      if (selectedService?.id) {
        const docRef = doc(db, "services", selectedService.id);
        await updateDoc(docRef, data);
        alert("Service updated!");
      } else {
        await addDoc(collection(db, "services"), data);
        alert("Service added!");
      }

      resetForm();
    } catch (error) {
      console.error("Error saving service:", error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "2rem" }}>
      <h2>{selectedService ? "Edit Service" : "Add New Service"}</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />

      <input
        type="text"
        placeholder="Slug (e.g. mechanical-design)"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        required
      />
      <br />

      <textarea
        placeholder="Intro paragraph"
        value={intro}
        onChange={(e) => setIntro(e.target.value)}
        required
      />
      <br />

      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Preview" width="150" style={{ marginTop: "10px" }} />
        </div>
      )}
      <br />

      <h3>Sections</h3>
      {sections.map((section, index) => (
        <div key={index}>
          <input
            placeholder="Section Heading"
            value={section.heading}
            onChange={(e) =>
              handleSectionChange(index, "heading", e.target.value)
            }
          />
          <textarea
            placeholder="Section Content"
            value={section.content}
            onChange={(e) =>
              handleSectionChange(index, "content", e.target.value)
            }
          />
        </div>
      ))}
      <button type="button" onClick={() => setSections([...sections, { heading: "", content: "" }])}>
        + Add Section
      </button>

      <h3>Bullet Points</h3>
      {bullets.map((item, i) => (
        <input
          key={i}
          placeholder={`Bullet ${i + 1}`}
          value={item}
          onChange={(e) => handleBulletChange(i, e.target.value)}
        />
      ))}
      <button type="button" onClick={() => setBullets([...bullets, ""])}>
        + Add Point
      </button>

      <br /><br />
      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : selectedService ? "Update Service" : "Add Service"}
      </button>

      {selectedService && (
        <button type="button" onClick={resetForm} style={{ marginLeft: "1rem" }}>
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default AddServiceForm;
