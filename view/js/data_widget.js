//simple XHR request in pure JavaScript
function load(url, callback) {
	var xhr;
        console.log("estic dins");
        if(typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
	else {
		var versions = ["MSXML2.XmlHttp.5.0", 
			 	"MSXML2.XmlHttp.4.0",
			 	"MSXML2.XmlHttp.3.0", 
			 	"MSXML2.XmlHttp.2.0",
			 	"Microsoft.XmlHttp"]

		for(var i = 0, len = versions.length; i < len; i++) {
		try {
			xhr = new ActiveXObject(versions[i]);
			break;
		}
			catch(e){}
		} // end for
	}
		
	xhr.onreadystatechange = ensureReadiness;
		
	function ensureReadiness() {
		if(xhr.readyState < 4) {
			return;
		}
			
		if(xhr.status !== 200) {
			return;
		}

		// all is well	
		if(xhr.readyState === 4) {
			callback(xhr);
		}			
	}
		
	xhr.open('GET', url, true);
	xhr.send('');
}

document.addEventListener('DOMContentLoaded', function() {
   
   load('php/server_processing2.php?iDisplayStart=0&iDisplayLength=10', function(xhr) {	
	var result = xhr.responseText;
        var json = JSON.parse(result);
        var zero = json.aaData[0][0];
        console.log(zero);
});

});