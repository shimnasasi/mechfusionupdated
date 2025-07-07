import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const ServiceList = ({ onEdit, refreshTrigger }) => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const snapshot = await getDocs(collection(db, "services"));
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setServices(docs);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this service?");
    if (confirm) {
      try {
        await deleteDoc(doc(db, "services", id));
        fetchServices(); // refresh list after deletion
      } catch (error) {
        console.error("Error deleting service:", error);
      }
    }
  };

  useEffect(() => {
    fetchServices();
  }, [refreshTrigger]); // triggers on add/update/delete

  return (
    <div>
      <h2>All Services (Admin)</h2>
      {services.length === 0 ? (
        <p>No services found.</p>
      ) : (
        <ul>
          {services.map((service) => (
            <li key={service.id} style={{ marginBottom: "1.5rem" }}>
              <strong>{service.title}</strong> <br />
              <code>{service.slug}</code> <br />
              <img
                src={service.imageUrl}
                alt={service.title}
                style={{ maxWidth: "200px", margin: "10px 0" }}
              />
              <br />
              <button onClick={() => onEdit(service)}>✏️ Edit</button>
              <button
                style={{ marginLeft: "1rem", color: "red" }}
                onClick={() => handleDelete(service.id)}
              >
                🗑 Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceList;
