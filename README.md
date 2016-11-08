# data_widget_js
Create data_widjet with Raw javascript.We have the database and the server side.

Teacher's Instructions

Introducció
===========
L'objectiu és dissenyar una widget javascript que anomenarem "datatable" que ens permetrà
connectar-se mitjançant AJAX i passant una sèrie de paràmetres a un script PHP en la part servidora
que s'encarregarà de servir-nos unes dades emmagatzemades a una taula d'una base de dades mysql.

Aquest widget ens permetrà navegar de manera progressiva i ens permetrà especificar també criteris
d'ordenació per camps així com aplicar filtres de cerca.

Prerequisits
============
Per tal de poder fer l'exercici cal tindre un servidor LAMP instal·lat i configurat.

Descomprimir l'arxiu proxylog_proxyentry.sql.tar.gz
que conté una taula d'una base de dades amb informació de navegació per planes web que usarem 
a l'exercici.

Al descomprimir-la ocuparà 1GB
Crearem una base de dades amb el nom que vulgam. En el meu cas "ies_network" i 
la poblarem amb aquesta taula per desenvolupar aquest exercici.

Ex.
mysql -u root -p ies_network < proxylog_proxyentry.sql

Una vegada sapigam el nom de la base de dades, l'usuari i password que té permisos sobre aquesta i la taula que volem
connectar al nostre "Datatable" widget cal configurar el script php servidor "server_processing2.php"

L'obrirem i modificarem aquesta secció amb les nostres dades. Cal dir-li els camps de la taula que volem
així com quina és la clau primaria/index de la taula.

Ex.

/* Array of database columns which should be read and sent back to DataTables. Use a space where
 * you want to insert a non-database field (for example a counter or static image)
 */
$aColumns = array( 'id','event_date', 'ip_src', 'domain_destination' );
$DEBUG=1;	
/* Indexed column (used for fast and accurate table cardinality) */
$sIndexColumn = "id";
	
/* DB table to use */
$sTable = "proxylog_proxyentry";
	
/* Database connection information */
$gaSql['user']       = "pere";
$gaSql['password']   = "pere";
$gaSql['db']         = "ies_network";
$gaSql['server']     = "127.0.0.1";

Per provar que tot ha anat bé, inclús abans de desenvolupar res de res, tan fàcil com posar al navegador

http://ip_server/server_processing2.php?iDisplayStart=1&iDisplayLength=10

i esperar que es retorne un text JSON amb informació i els primers 10 registres de la taula.


Api per communicar-se amb el script PHP servidor
================================================
És molt senzilla amb el paràmetre iDisplayStart li especifiquem el número del primer registre que volem de la taula
de la base de dades. Amb iDisplayLength li especifiquem quants registres voldrem a partir d'aquest inicial.
Ex.
http://192.168.5.10/exemple_pere/php/server_processing2.php?iDisplayStart=1&iDisplayLength=10



{"sEcho":0,"iTotalRecords":"9889388","iTotalDisplayRecords":"9889388","aaData":[["2","2012-11-06 17:23:25","192.168.28.128","http:\/\/platform.twitter.com"],["3","2012-11-06 17:23:25","192.168.28.128","http:\/\/admin.beticious.com"],["4","2012-11-06 17:23:25","192.168.28.128","http:\/\/admin.beticious.com"],["5","2012-11-06 17:23:25","192.168.28.128","http:\/\/www.google-analytics.com"],["6","2012-11-06 17:23:25","192.168.27.115","http:\/\/notify16.dropbox.com"],["7","2012-11-06 17:23:25","192.168.21.2","http:\/\/notify14.dropbox.com"],["8","2012-11-06 17:23:26","192.168.21.10","http:\/\/notify14.dropbox.com"],["9","2012-11-06 17:23:26","192.168.28.128","http:\/\/www.beticious.com"],["10","2012-11-06 17:23:26","192.168.28.128","http:\/\/www.beticious.com"],["11","2012-11-06 17:23:26","192.168.28.128","http:\/\/platform.twitter.com"]]}

Cal que esbrineu quins paràmetres passar per ordenar ....

Criteris 

Funcionament i presentació	1,5
Codi llegible i ben estructurat	0,75
Prototips com cal	1
Ordenació per columnes	1
Cerca per camp	1
Canvi de número de registres	0,5
Navegació perfecta	0,5
Codi ben documentat	1
Qualitat del codi 	1	
Cookies per saber on ens hem quedat	1,75
