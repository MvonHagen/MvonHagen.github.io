//Logging
$.getJSON('http://freegeoip.net/json/?callback=?', function(data) {
	var SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxmvfy73cZLiq50JcD17Psr4lCUjRXThgsg2l3MXQ5_6L9X5_J1/exec";
	console.log(JSON.stringify(data));
	$(document).ready(function() {
		$.getJSON(SCRIPT_URL + "?data=" + encodeURIComponent(JSON.stringify(data)) + "&callback=?", {},function (data2) { });
	});
});
