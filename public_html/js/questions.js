// Variables ini
var formElement = null;
var respTexto = null;
var respTexto2 = null;
var respSelect = null;
var respSelect2 = null;
var respLabel = null;
var respLabel2 = null;

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

//Tratar datos del XML ini
function tratarXML(datos) {
    var xml = datos.responseXML;

    //
//Tipo texto
    //Pregunta 1
    var texto = xml.getElementsByTagName("text")[0].innerHTML;
    mostrarPregunta1(texto);
    respTexto = xml.getElementsByTagName("answer")[0].innerHTML;
    //Pregunta 2
    var texto2 = xml.getElementsByTagName("text")[1].innerHTML;
    mostrarPregunta2(texto2);
    respTexto2 = xml.getElementsByTagName("answer")[1].innerHTML;
    //
//Tipo Select
    //Pregunta 1
    var textoSel = xml.getElementsByTagName("text")[2].innerHTML;
    var opcionSel = [];
    var numMaxOpt = xml.getElementById("3").getElementsByTagName("option").length;
    for (var i = 0; i < numMaxOpt; i++) {
        opcionSel[i] = xml.getElementById("3").getElementsByTagName("option")[i].innerHTML;
    }
    mostrarPregunta3(textoSel, opcionSel);
    respSelect = parseInt(xml.getElementsByTagName("answer")[2].innerHTML);
    //Pregunta 2
    var textoSel2 = xml.getElementsByTagName("text")[3].innerHTML;
    var opcionSel2 = [];
    var numMaxOpt = xml.getElementById("4").getElementsByTagName("option").length;
    for (var i = 0; i < numMaxOpt; i++) {
        opcionSel2[i] = xml.getElementById("4").getElementsByTagName("option")[i].innerHTML;
    }
    mostrarPregunta4(textoSel2, opcionSel2);
    respSelect2 = parseInt(xml.getElementsByTagName("answer")[3].innerHTML);
    //
//Tipo Label
    //Pregunta 1
    var textoLabel = xml.getElementsByTagName("text")[4].innerHTML;
    var opcionLabel = [];
    var numMaxOpt = xml.getElementById("5").getElementsByTagName("option").length;
    for (var i = 0; i < numMaxOpt; i++) {
        opcionLabel[i] = xml.getElementById("5").getElementsByTagName("option")[i].innerHTML;
    }
    mostrarPregunta5(textoLabel, opcionLabel);
    respLabel = parseInt(xml.getElementsByTagName("answer")[4].innerHTML);
    //Pregunta 2
    var textoLabel2 = xml.getElementsByTagName("text")[5].innerHTML;
    var opcionLabel2 = [];
    var numMaxOpt2 = xml.getElementById("6").getElementsByTagName("option").length;
    for (var i = 0; i < numMaxOpt; i++) {
        opcionLabel2[i] = xml.getElementById("6").getElementsByTagName("option")[i].innerHTML;
    }
    mostrarPregunta6(textoLabel2, opcionLabel2);
    respLabel2 = parseInt(xml.getElementsByTagName("answer")[5].innerHTML);
}
//Tratar datos del XML fi


//Mostrar preguntas ini
function mostrarPregunta1(texto) {
    document.getElementById("p01").innerHTML = texto;
}

function mostrarPregunta2(texto) {
    document.getElementById("p02").innerHTML = texto;
}

function mostrarPregunta3(textoSel, opcionSel) {
    document.getElementById("p03").innerHTML = textoSel;
    var select = document.getElementById("r03");
    for (var i = 0; i < opcionSel.length; i++) {
        var option = document.createElement("option");
        option.text = opcionSel[i];
        option.value = i + 1;
        select.options.add(option);
    }
}

function mostrarPregunta4(textoSel, opcionSel) {
    document.getElementById("p04").innerHTML = textoSel;
    var select = document.getElementById("r04");
    for (var i = 0; i < opcionSel.length; i++) {
        var option = document.createElement("option");
        option.text = opcionSel[i];
        option.value = i + 1;
        select.options.add(option);
    }
}

function mostrarPregunta5(textoLabel, opcionLabel) {
    document.getElementById("p05").innerHTML = textoLabel;
    var label = document.getElementById("r05");
    for (var i = 0; i < opcionLabel.length; i++) {
        var option = document.createElement("option");
        option.text = opcionLabel[i];
        option.value = i + 1;
        label.options.add(option);
    }
}
function mostrarPregunta6(textoLabel2, opcionLabel2) {

}
//Mostrar preguntas fi