function Table(){
    
    this.tables=document.getElementById("table");
    this.row=1;
    this.column=4;
    
    addTable(this.row,this.column);
    
};

this.addTable=function(row,column){
      
    //var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=0; i<row; i++){
       var tr = document.createElement('tr');
       tableBody.appendChild(tr);
       
       for (var j=0; j<column; j++){
           var th = document.createElement('th');
           th.width='100';
           
           tr.appendChild(th);
       }
    }
    document.getElementById("table").appendChild(table);
    
};
