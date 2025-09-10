import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ Correct import

const SchemaOrg = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mechfusion",
    "url": "https://www.mechfusion.in",
    "logo": "https://www.mechfusion.in/logo.png"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

export default SchemaOrg;
