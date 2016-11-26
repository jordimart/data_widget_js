
window.onload = function () {

    //Agafe les dades de la tag content per a montar labla i fonarli ids als camps
    var ids = document.getElementById("content").getAttribute("ids");
    var name_columns = document.getElementById("content").getAttribute("name_columns");
    var ids_array = ids.split(",");//ho separe pera fer un array de un string
    var name_columns_array = name_columns.split(",");//ho separe pera fer un array de un string

    //creem objecte taula on li pasem on es montara la taula, els noms de lescolumnes i les ids d eles columnes
    var tabla = new Table("content", ids_array, name_columns_array);
    //creem una consulta básica que depent soles de les linees que tinga el selector, default 10
    change_rows(tabla);

    //Esta funció es la que agafará els events i depenent de on siga l'event fara la seua faena
    var element_selector = function (e) {

        if (e.type == "click") {
            switch (e.target.id) {

                case 'id':
                    var column='id';
                    order_table(tabla,column);
                    break;
                case 'event_date':
                    var column='event_date';
                    order_table(tabla,column);
                    break;
                case 'ip_src':
                    var column='ip_src';
                    order_table(tabla,column);
                    break;
                case 'domain_destination':
                    var column='domain_destination';
                    order_table(tabla,column);
                    break;
            }
        } else if (e.type == "change") {

            switch (e.target.id) {
                case 'rows':
                    change_rows(tabla);
                    break;
                case 'search':
                    var search = tabla.search.value;
                    search_table(tabla,search);
                    break;
            }
        }
        ;

    };

    //Tipus de event que utilitzarem en el main, els dosgastaran la mateixa funció
    document.addEventListener("click", element_selector, false);
    document.addEventListener("change", element_selector, false);

};

