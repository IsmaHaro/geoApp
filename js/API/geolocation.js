var geo = {
	lat: null,
	lng: null,
	getPosition: function(){
		navigator.geolocation.getCurrentPosition(geo.success, geo.error);
	},
	error: function(err){
		alert(err.code);
	},
	success: function(p){
		geo.lat = p.coords.latitude;
		geo.lng = p.coords.longitude;
	}

};