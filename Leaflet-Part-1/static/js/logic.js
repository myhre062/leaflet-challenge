// This data is updated every minute
const earthquakeDataUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Create a Leaflet map instance
var map = L.map('map').setView([0, 0], 2); // Set initial view at center of the world with zoom level 2

// Add a base layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fetch earthquake data
fetch(earthquakeDataUrl)
  .then(response => response.json())
  .then(data => {
    // Iterate over the earthquake data
    data.features.forEach(feature => {
      // Extract coordinates
      const coords = feature.geometry.coordinates;
      const lat = coords[1];
      const lon = coords[0];

      // Create marker and add to map
      L.marker([lat, lon]).addTo(map)
        .bindPopup(`<b>${feature.properties.place}</b><br>Magnitude: ${feature.properties.mag}`);
    });
  })
  .catch(error => {
    console.error('Error fetching earthquake data:', error);
  });