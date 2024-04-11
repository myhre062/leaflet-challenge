// This data is updated every minute
let earthquakeDataUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

console.log(sum)
d3.json(earthquakeDataUrl).then(function(response) {

    console.log(response);
});

// // Create earthquake layerGroup
var earthquakes = L.layerGroup();

// Create tile layer
var grayscaleMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}", {
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
});

// Can't make this work. This is the best I got. 