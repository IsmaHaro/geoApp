var geo = {
	lat: null,
	lng: null,
	error: function(err){
		alert(err.code);
	},
	success: function(p){
		alert("Latitud: "+p.coords.latitude);
		geo.lat = p.coords.latitude;
		geo.lng = p.coords.longitude;
	},
	getPosition: function(){
		alert("Obteniendo posicion");
		navigator.geolocation.getCurrentPosition(geo.success, geo.error);
		alert("Latitud: "+geo.lat+" y Longitud: "+geo.lng);
	}
};