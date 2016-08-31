// console.log('maps.js');
$(function(){

// Historic Wesley Center, 101 E Grant St., Minneapolis, MN 55403
// lat:44.969572
// lng:-93.2760459
// GEOCODE_KEY=AIzaSyASzNw-prZz4_SEa1y2B4alg9JJRn9vm7A
// KEY=AIzaSyBKWA1EBzil2kURhp1qlWC7O0H5rU1UKkE


$.ajax({
      url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyASzNw-prZz4_SEa1y2B4alg9JJRn9vm7A&callback=initMap",
      dataType: "json",
      success: function (data) { console.log("success", data); },
      error  : function (err) { console.log("Hit error fn!", err); }
      });


// DISPLAY THE MAP
google.maps.event.addDomListener(window, "resize", function() {
  var center = map.getCenter();
  google.maps.event.trigger(map, "resize");
  map.setCenter(center); 
})



function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
      center: { lat: 44.969572, lng: -93.2760459 },
      zoom: 18
  });
}


function addMarkers(map) {

		var	marker = new google.maps.Marker ({
				    map: map,
				    icon: '../img/favicon.jpg',
				    position: { lat: 44.969572, lng: -93.2760459 },
				    title: 'Wesley Event Center'
				});

  } 

});
