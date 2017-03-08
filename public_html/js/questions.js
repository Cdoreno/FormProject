// Variables ini
var formElement = null;
var respText = null;
// Variables fi


window.onload = function () {

    //Corrección al apretar, el botón "Realizar Corrección"
    formElement = document.getElementById('cuestionario');
    formElement.onsubmit = function () {
        // Aqui se colocaran los metodos de las correciones
        return false;
    };

    //Leer XML 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            tratarXML(this);
        }
    };
    xhttp.open("GET", '../xml/question.xml', true);
    xhttp.send();
};

//Tratar datos del XML
function tratarXML(datos) {
    var xml = datos.responseXML;

    //Tipo texto
    //Pregunta 1
    var tituloImput = xml.getElementsByTagName("text")[0].innerHTML;
    formElement.getElementByID("p01").innerHTML = tituloImput;
    respText = parseString(xml.getElementsByTagName("answer")[0].innerHTML);
}
