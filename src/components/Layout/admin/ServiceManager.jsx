import React, { useState } from "react";
import AddServiceForm from "./AddServiceForm";
import ServiceList from "./ServiceList";

const ServiceManager = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [refreshFlag, setRefreshFlag] = useState(Date.now());

    const handleSave = () => {
        setRefreshFlag(Date.now());
        setSelectedService(null);
    };

    return (
        <div style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
            <h2>Manage Services</h2>
            <AddServiceForm
                serviceToEdit={selectedService}
                clearEdit={() => setSelectedService(null)}
                onSaved={handleSave}
            />
            <hr style={{ margin: "2rem 0" }} />
            <ServiceList onEdit={setSelectedService} refreshTrigger={refreshFlag} />
        </div>
    );
};

export default ServiceManager;
