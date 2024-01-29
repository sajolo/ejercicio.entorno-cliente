$(document).ready(inicio); //Espero a la carga del html para ejecutar todo mi programa, contenido en la función inicio()

function inicio() { //Defino todo mi programa aquí dentro

    //Selecciono los li con la clase country y creo un evento para que cuando se clicken conmuten su clse enabled:
    $("li.country").click(function() {
        $(this).toggleClass("enabled");
    });

    //Selecciono los nodos con id Spain y USA y creo un evento para que cuando se clicken salte un alert con su nombre:
    $("#Spain, #USA").click(function() {
        alert($(this).text());
    });

    //Selecciono por separado los botones para eliminar y creo un evento para que al clickarlos eliminen los li que tengan la clase enabled:
    $("#Europe .remove").click(function() {
        $("#Europe .enabled").remove();
    });

    $("#NorthAmerica .remove").click(function() {
        $("#NorthAmerica .enabled").remove();
    });

    //Añado evento keyup para filtrar los países mientras se escribe en la barra de búsqueda:
    $(".q").keyup(function() {
        let busqueda = $(".q").val().toLowerCase(); //Guardo en una variable lo que hay escrito en la barra de búsqueda
        let filtrado = $.grep($("li.country"), function(elem, index) { //Hago un grep() para filtrar todos los li con clase country cuyo texto incluya lo que hay en la búsqueda
            return elem.innerText.toLowerCase().includes(busqueda);
        }, true); //Con este true hago que el filtrado sea al revés, es decir, tengo todos los textos que NO incluyen la búsqueda
        $.each(filtrado, function(index, elem) { //Recorro el array filtrado para ir ocultando los elementos que no coinciden
            $(elem).hide()
        });
    });

    //AJAX
    $("#Europe .reload").click(function() {
        let url = "";
        $.ajax({
            url: url +"getCountries.php", //URL donde realizamos la petición
            type: "GET",
            success: function (respuesta) { //Función si la petición ha ido bien
                console.log(respuesta)
            },
            error: function (xhr, status) { //Función si la petición ha fallado
                alert("Ha ocurrido un error");
            },
            complete: function (xhr, status) {
                alert("Petición realizada");
            }
        });
    });

    $("#NorthAmerica .reload").click(function() {
        let url = "";
        $.ajax({
            url: url +"getCountries.php", //URL donde realizamos la petición
            type: "GET",
            success: function (respuesta) { //Función si la petición ha ido bien
                console.log(respuesta)
            },
            error: function (xhr, status) { //Función si la petición ha fallado
                alert("Ha ocurrido un error");
            },
            complete: function (xhr, status) {
                alert("Petición realizada");
            }
        });
    });

}