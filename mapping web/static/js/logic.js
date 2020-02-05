hello


var graymap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",

});
ar map1 = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 3
  });





  function style(feature) {
    return {
      opacity: 10,
      fillOpacity: 1,
      fillColor: getColor(feature.properties.mag),
     ,
      radius: getRadius(feature.properties.mag),
      stroke: true,
     
    };
  }


d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson", 
function(data) {function getColor(mag) {
    switch (true) {
    case mag > 5:
      return "#ea2c2c";
    case mag> 4:
      return "#ea822c";
    case mag > 3:
      return "#ee9c00";
    case mag > 2:
      return "#eecc00";
    case mag > 1:
      return "#d4ee00";
   
    }
    function getRadius(mag) {
        if (mag == 0) {
          return 1;
        }
    
        return mag* 5;

        L.geoJson(data, {
            pointToLayer: function(feature, latlng) {
              return L.circleMarker(latlng);
            },
            style: styleInfo,
            onEachFeature: function(feature, layer) {
              layer.bindPopup("Mag: " + feature.properties.mag  + feature.properties.place);
            }
          }).addTo(map);