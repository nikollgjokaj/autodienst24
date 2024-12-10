export const LocalBusinessSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          "name": "AUTODIENST24",
          "image": "https://autodienst24.at/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Am Berg 3",
            "addressLocality": "Wilhelmsburg",
            "postalCode": "3150",
            "addressCountry": "AT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "YOUR_LATITUDE",
            "longitude": "YOUR_LONGITUDE"
          },
          "url": "https://autodienst24.at",
          "telephone": "+43-664-5171020",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "17:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "15:00"
            }
          ]
        })
      }}
    />
  );
}; 