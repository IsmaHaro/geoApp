var fn = {
	init: function initialize() {
		//Posición del mapa
		var latlng = new google.maps.LatLng(geo.lat, geo.lng);
		var myOptions = {
			zoom: 18,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
		//Marcador
		var marker = new google.maps.Marker({
			position: latlng, 
			map: map, 
			title:"Mi posición"
		});
	},
	ready: function(){
		document.addEventListener("deviceready", geo.getPosition, false);
	}
};
$(fn.ready);