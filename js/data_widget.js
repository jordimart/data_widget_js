
/*
 * Protoip taula que ens servirá per moure els events i te metodes percrear taula y files
 * @param {type} content agafa l tag content, ids agafa les ids de les columnes, name_columns
 *  agafa els noms que es voran en columnes
 * @returns {Table}
 */

function Table(content, ids, name_columns) {

    this.content = document.getElementById(content);
    this.ids = ids;
    this.columns = name_columns;

    this.addWidget();
}
;

//Pintem element del widget com el selector de files i el input de busqueda
Table.prototype.addWidget = function () {

    var newdiv_select = document.createElement('div');
    newdiv_select.innerHTML = 'Show <select id="rows"><option value="10">10</option><option value="20">20</option><option value="30">30</option> <option value="40">40</option></select> entries<br>';
    document.getElementById("content").appendChild(newdiv_select);
    var newdiv_search = document.createElement('div');
    newdiv_search.innerHTML = '<br>Cercar: <input id="search" value="" type="text" name="fname"></input><br><br>';
    document.getElementById("content").appendChild(newdiv_search);

    //aquestos elements els declarem una vegada estan creats
    this.num_rows = document.getElementById("rows");
    this.search = document.getElementById("search");
};

//métode que crea una taula dinamica si li pasem els camps en columnes.
//no funciona be ja que si ho faig aixina no puc agafar els events per ordenar
//pero si ho deixe aixina si puc añadir files.
Table.prototype.addTable = function () {

    var myTableDiv = this.content;
    this.table = document.createElement("table");
    this.table.setAttribute("id", "data");
    this.table.setAttribute("class", ".rwd-table");
    this.table.border = '1';
    myTableDiv.appendChild(this.table);  
    var columns = this.columns;
    var ids = this.ids;
    for (var i = 0; i < columns.length; i++) {

        var column = document.createElement("th");
        column.setAttribute("id", ids[i]);
        this.table.appendChild(column).innerHTML = columns[i];
    }

};

//métode per añadir dades a les files 
Table.prototype.appendRow = function (json) {

    for (var i = 0; i < json.aaData.length; i++) {

        var consulta = json.aaData[i];
        for (var j = 0; j < consulta.length; i++) {
            var rowCount = this.table.rows.length;
            var row = this.table.insertRow(rowCount);

            row.insertCell(0).innerHTML = json.aaData[i][0];
            row.insertCell(1).innerHTML = json.aaData[i][1];
            row.insertCell(2).innerHTML = json.aaData[i][2];
            row.insertCell(3).innerHTML = json.aaData[i][3];
        }
    }
};
