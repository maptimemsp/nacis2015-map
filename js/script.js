var map = L.map('map').setView([44.98044862724291, -93.26319694519043], 15);


		L.control.locate({
                      strings: {
                                 title: "Zoom to your current location"
                               }
               ,locateOptions: {
                                 maxZoom: 17
                               }
                     }).addTo(map);

var baselayer = new L.tileLayer('https://{s}.tiles.mapbox.com/v4/flatlandmaps.bf82ff09/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZmxhdGxhbmRtYXBzIiwiYSI6IldOSXVCWWMifQ.HhYmSncMHxdF_TGZbXo9sQ', {
    attribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox © OpenStreetMap</a>&nbsp<a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a>'
});
baselayer.addTo(map);

//POI Icons
<<<<<<< HEAD
var poiPins={};
poiPins['conf'] = L.MakiMarkers.icon({
=======
var confPin = L.MakiMarkers.icon({
>>>>>>> MaptimeMSP/master
    icon: "star",
    color: "#ff0000",
    size: "l"
});

var beerPin = L.MakiMarkers.icon({
    icon: "beer",
    color: "#23344c",
    size: "m"
});

var barPin = L.MakiMarkers.icon({
    icon: "bar",
    color: "#23344c",
    size: "m"
});

var restaurantPin = L.MakiMarkers.icon({
    icon: "restaurant",
    color: "#23344c",
    size: "m"
});

var cafePin = L.MakiMarkers.icon({
    icon: "cafe",
    color: "#23344c",
    size: "m"
});

var hotelPin = L.MakiMarkers.icon({
	icon: "lodging",
	color: "#23344c",
	size: "m"
});

var airportPin = L.MakiMarkers.icon({
	icon: "airport",
	color: "#23344c",
	size: "m"
});

<<<<<<< HEAD
poiPins['ice-cream'] = L.MakiMarkers.icon({
=======
var icecreamPin = L.MakiMarkers.icon({
>>>>>>> MaptimeMSP/master
	icon: "ice-cream",
	color: "#23344c",
	size: "m"
});

var museumPin = L.MakiMarkers.icon({
	icon: "museum",
	color: "#23344c",
	size: "m"
});

var parkPin = L.MakiMarkers.icon({
	icon: "park",
	color: "#23344c",
	size: "m"
});

var theatrePin = L.MakiMarkers.icon({
	icon: "theatre",
	color: "#23344c",
	size: "m"
});

var shopPin = L.MakiMarkers.icon({
	icon: "shop",
	color: "#23344c",
	size: "m"
});

//Nice Ride Icon
var niceRidePin = L.MakiMarkers.icon({
	icon: "bicycle",
	color: "#A8CF38",
	size: "s"
});

poiPins['cinema'] = L.MakiMarkers.icon({
	icon: "cinema",
	color: "#23344c",
	size: "m"
});

var defaultPin = L.MakiMarkers.icon({
	icon: "marker",
	color: "#000000",
	size: "s"
});

//LRT Station Icons
<<<<<<< HEAD
lrtPins={};
lrtPins['blueLRT'] = L.MakiMarkers.icon({
=======
var blueLRTPin = L.MakiMarkers.icon({
>>>>>>> MaptimeMSP/master
	icon: "rail-light",
	color: "#0000FF",
	size: "s"
});

<<<<<<< HEAD
lrtPins['greenLRT'] = L.MakiMarkers.icon({
=======
var greenLRTPin = L.MakiMarkers.icon({
>>>>>>> MaptimeMSP/master
	icon: "rail-light",
	color: "#008000",
	size: "s"
});

<<<<<<< HEAD
lrtPins['rail'] = L.MakiMarkers.icon({
=======
var railPin = L.MakiMarkers.icon({
>>>>>>> MaptimeMSP/master
	icon: "rail",
	color: "#FFA500",
	size: "s"
});

<<<<<<< HEAD
=======
var cinemaPin = L.MakiMarkers.icon({
	icon: "cinema",
	color: "#23344c",
	size: "m"
});

var defaultPin = L.MakiMarkers.icon({
	icon: "marker",
	color: "#000000",
	size: "s"
});

>>>>>>> MaptimeMSP/master
//Fun Run Route layer
var funRunRoute = new L.GeoJSON.AJAX("js/transit/funRun.json",{
	style: function (feature) {
		return {
			color: "#CE576F",
			dashArray: [1, 5]
		};
    }
});

//LRT Stations GeoJSON layer
var lrtStations = new L.GeoJSON.AJAX("js/transit/lrtStations.json",{
    pointToLayer: function (feature, latlng) {

		var html = '';
		       if (feature.properties.Station) {
		    	   html += '<h3>' + feature.properties.Station + '</h3>';
		        }
               if (feature.properties.Transitway) {
                   html += '<p>'+ feature.properties.Transitway + '</p>';
            }
		html += '<div class="put"></div>';

		var popup = new L.popup({
			closeButton:false
		}).setContent(html);

		var lrtMarker = new L.marker(latlng);
		      if (feature.properties.Transitway === 'Northstar Line') {
		          lrtMarker.setIcon(lrtPins['rail']);
		         }
		      if (feature.properties.Transitway === 'Green Line') {
		          lrtMarker.setIcon(lrtPins['greenLRT']);
		         }
		      if (feature.properties.Transitway.match(/Blue*/)) {
		          lrtMarker.setIcon(lrtPins['blueLRT']);
		         }
		  	lrtMarker.bindPopup(popup);
		return lrtMarker;
	}
});

//LRT Lines GeoJSON Color
function lrtLineColor(Name) {
	return 	Name === 'Green'     ? '#008000' :
			Name === 'Blue'  	 ? '#0000FF' :
			Name === 'Northstar' ? '#FFA500' :
							 	   '#000';
}

//LRT Lines GeoJSON
var lrtLines = new L.GeoJSON.AJAX("js/transit/lrtLines.json",{
	style: function (feature) {
		return {
			color: lrtLineColor(feature.properties.Name),
			dashArray: [3, 10]
		};
    }
});

//Nice Ride Stations Layer
var niceRideStations = new L.GeoJSON.AJAX("js/transit/niceRideStations.json", {
	pointToLayer: function (feature, latlng) {
		var html = "";
	       if (feature.properties.Station) {
	    	   html += "<h3><a href='http://www.niceridemn.org'>" + feature.properties.Station + "</a></h3>";
	        }
	       if (feature.properties.NB_Docks) {
	    	   html += "<p>" + feature.properties.NB_Docks + " Bike docks</p>";
	       }
	       if (feature.properties.Notes) {
	    	   html += "<p>" + feature.properties.Notes + "</p>";
	       }
        
	html += "<div class='put'></div>";

	var popup = new L.popup({
		closeButton:false
	}).setContent(html);

	var niceRideMarker = new L.marker(latlng);
	  	niceRideMarker.setIcon(poiPins['niceRide']);
	  	niceRideMarker.bindPopup(popup);
	return niceRideMarker;
	}
}).addTo(map);

//POI GeoJSON Layer
var poiLayer = new L.GeoJSON.AJAX("js/places.geojson",{
		    pointToLayer: function (feature, latlng) {

	var html = '';
               if (feature.properties.web) {
                      html += '<h3><a href="'+ feature.properties.web + '">' + feature.properties.title + '</a></h3>';
                }
               else {
                      html += '<h3>' + feature.properties.title + '</h3>';
               }
               if (feature.properties.address) {
                      html += '<p>'+ feature.properties.address + '</p>';
               }
               if (feature.properties.scoop) {
                      html += '<p>'+ feature.properties.scoop + '</p>';
               }
      html += '<div class="put"></div>';
      var popup = new L.popup({closeButton:false}).setContent(html);

      var marker = new L.marker(latlng);
      marker.setIcon(defaultPin);
<<<<<<< HEAD
      if (feature.properties.poi_type in poiPins) {
        marker.setIcon(poiPins[feature.properties.poi_type]);
      }
      
=======
	if (feature.properties.poi_type === 'conf') {
          marker.setIcon(confPin);
         }
      	if (feature.properties.poi_type === 'beer') {
          marker.setIcon(beerPin);
         }
      	if (feature.properties.poi_type === 'bar') {
          marker.setIcon(barPin);
         }
      	if (feature.properties.poi_type === 'restaurant') {
          marker.setIcon(restaurantPin);
         }
      	if (feature.properties.poi_type === 'cafe') {
          marker.setIcon(cafePin);
         }
      	if (feature.properties.poi_type === 'hotel') {
          marker.setIcon(hotelPin);
         }
      	if (feature.properties.poi_type === 'airport') {
          marker.setIcon(airportPin);
         }
      	if (feature.properties.poi_type === 'ice-cream') {
    	  marker.setIcon(icecreamPin);
      	 }
      if (feature.properties.poi_type === 'museum') {
          marker.setIcon(museumPin);
         }
      	if (feature.properties.poi_type === 'park') {
          marker.setIcon(parkPin);
         }
      	if (feature.properties.poi_type === 'theatre') {
      	  marker.setIcon(theatrePin);
      	 }
      	if (feature.properties.poi_type === 'shop') {
      	  marker.setIcon(shopPin);
      	 }
	
>>>>>>> MaptimeMSP/master
	marker.bindPopup(popup);

		  return marker;
		    }
		});

poiLayer.addTo(map);

//Define the Basemap Layers for the legend
var baseMaps = {
};

//Add the LRT Stations and Lines to a group (LRT) and add it to the map
var lrt = L.layerGroup([lrtStations, lrtLines]).addTo(map);

//Define the Overlay Layers for the legend
var overlayMaps = {
    "Fun Run/Walk": funRunRoute,
	"Nice Ride Stations": niceRideStations,
	"Light Rail": lrt
};

/* Larger screens get expanded layer control */
if (document.body.clientWidth <= 767) {
  isCollapsed = true;
} else {
  isCollapsed = false;
}

//Add the Legend to the map.
L.control.layers(baseMaps, overlayMaps, {
	collapsed: isCollapsed
}).addTo(map);
