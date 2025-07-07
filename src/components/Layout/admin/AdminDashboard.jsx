import React, { useState } from "react";
import AddServiceForm from "./AddServiceForm";
import ServiceList from "../admin/ServiceList";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(Date.now()); // for forcing refresh

  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };

  const handleSave = () => {
    setRefreshFlag(Date.now()); // trigger refresh of service list
    setSelectedService(null); // clear form after save
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <h1>🛠️ Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          style={{
            background: "#dc3545",
            color: "#fff",
            padding: "0.5rem 1rem",
          }}
        >
          Logout
        </button>
      </header>

      <section>
        <AddServiceForm
          serviceToEdit={selectedService}
          clearEdit={() => setSelectedService(null)}
          onSaved={handleSave}
        />
      </section>

      <hr style={{ margin: "2rem 0" }} />

      <section>
        <ServiceList onEdit={setSelectedService} refreshTrigger={refreshFlag} />
      </section>
    </div>
  );
};

export default AdminDashboard;
