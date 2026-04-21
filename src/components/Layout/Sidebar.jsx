import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MdOutlineArrowRight } from "react-icons/md";
import { serviceData } from "../../utils/singleServiceList";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="sidebar-container">
      {serviceData.map((service) => {
        const isActive = location.pathname === service.path;

        return (
          <div key={service.id}>
            {/* Main Service */}
            <div
              className={`mainservice-name ${isActive ? "active" : ""}`}
              onClick={() => navigate(service.path)}
            >
              {service.name}
            </div>

            {/* Sub Services */}
            {isActive && (
              <div className="service-list-container">
                {service.services?.map((sub, index) => (
                  <div key={index} className="servicename">
                    <MdOutlineArrowRight />

                    {sub.slug ? (
                      <span
                        className="clickable"
                        onClick={() => navigate(`/services/${sub.slug}`)}
                      >
                        {sub.service}
                      </span>
                    ) : (
                      sub.service
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;