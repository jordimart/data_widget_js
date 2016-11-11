//simple XHR request in pure JavaScript
function load(url, callback) {
	var xhr;
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

function createTable() {

        var myTableDiv = document.getElementById("content");  //indiv
        table = document.createElement("table");   
        table.setAttribute("id", "data");
        table.setAttribute("class", ".rwd-table");
        table.border = '1';
        myTableDiv.appendChild(table);  //appendChild() insert it in the document (table --> myTableDiv)

        var th0 = table.appendChild(document.createElement("th"));
        th0.innerHTML = "Id";
        var th1 = table.appendChild(document.createElement("th"));
        th1.innerHTML = "Data";
        var th2 = table.appendChild(document.createElement("th"));
        th2.innerHTML = "IP Source";
        var th3 = table.appendChild(document.createElement("th"));
        th3.innerHTML = "Web desti";


    }

    function appendRow(json) {
        

        for( var i=0; i < json.aaData.length; i++ ) {
            
           var consulta=json.aaData[i];
           
            for(var  j=0; j < consulta.length; i++ ) {
                 var rowCount = table.rows.length;
                 var row = table.insertRow(rowCount);
                
        row.insertCell(0).innerHTML = json.aaData[i][0];
        row.insertCell(1).innerHTML = json.aaData[i][1];
        row.insertCell(2).innerHTML = json.aaData[i][2];
        row.insertCell(3).innerHTML = json.aaData[i][3];
            }
          }
    }

document.addEventListener('DOMContentLoaded', function() {
    
    createTable();
   
   load('php/server_processing2.php?iDisplayStart=0&iDisplayLength=20', function(xhr) {	
	var result = xhr.responseText;
        var json = JSON.parse(result);
        
        if(json){
        appendRow(json);
    };
        
       
});

});