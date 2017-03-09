// Variables ini
var formElement = null;
var respTexto = null;
var respTexto2 = null;
var respSelect = null;
var respSelect2 = null;
var respMulti = null;
var respMulti2 = null;
var respRadio = null;
var respRadio2 = null;

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
//Tipo Multiple
    //Pregunta 1
    var textoMulti = xml.getElementsByTagName("text")[4].innerHTML;
    var opcionMulti = [];
    var numMaxOpt = xml.getElementById("5").getElementsByTagName("option").length;
    for (var i = 0; i < numMaxOpt; i++) {
        opcionMulti[i] = xml.getElementById("5").getElementsByTagName("option")[i].innerHTML;
    }
    mostrarPregunta5(textoMulti, opcionMulti);
    respMulti = parseInt(xml.getElementsByTagName("answer")[4].innerHTML);
    //Pregunta 2
    var textoMulti2 = xml.getElementsByTagName("text")[5].innerHTML;
    var opcionMulti2 = [];
    var numMaxOpt2 = xml.getElementById("6").getElementsByTagName("option").length;
    for (var i = 0; i < numMaxOpt2; i++) {
        opcionMulti2[i] = xml.getElementById("6").getElementsByTagName("option")[i].innerHTML;
    }
    mostrarPregunta6(textoMulti2, opcionMulti2);
    respMulti2 = parseInt(xml.getElementsByTagName("answer")[5].innerHTML);
    //
//Tipo Radio
    //Pregunta 1
    var radio = document.getElementById('p07');
    var h3 = document.createElement("h3");
    h3.innerHTML = xml.getElementsByTagName("text")[6].childNodes[0].nodeValue;
    radio.appendChild(h3);
    var numMaxOpt = xml.getElementById("7").getElementsByTagName("option").length;
    for (var i = 0; i < numMaxOpt; i++) {
        var input = document.createElement("input");
        var label = document.createElement("radio");
        var salto = document.createElement("br");
        label.innerHTML = xml.getElementById("7").getElementsByTagName('option')[i].childNodes[0].nodeValue;
        label.setAttribute("for", "color_" + i);
        input.type = "radio";
        input.name = "color";
        input.id = "color_" + i;
        radio.appendChild(input);
        radio.appendChild(label);
        radio.appendChild(salto);
    }
    //Pregunta 2
    var radio2 = document.getElementById('p08');
    var h3 = document.createElement("h3");
    h3.innerHTML = xml.getElementsByTagName("text")[7].childNodes[0].nodeValue;
    radio2.appendChild(h3);
    var numMaxOpt = xml.getElementById("8").getElementsByTagName("option").length;
    for (var i = 0; i < numMaxOpt; i++) {
        var input = document.createElement("input");
        var label = document.createElement("radio");
        var salto = document.createElement("br");
        label.innerHTML = xml.getElementById("8").getElementsByTagName('option')[i].childNodes[0].nodeValue;
        label.setAttribute("for", "color_" + i);
        input.type = "radio";
        input.name = "color";
        input.id = "color_" + i;
        radio2.appendChild(input);
        radio2.appendChild(label);
        radio2.appendChild(salto);
    }
    //
//Tipo CheckBox
    //Pregunta 1
    var checkbox = document.getElementById('p09');
    var h3 = document.createElement("h3");
    h3.innerHTML = xml.getElementsByTagName("text")[8].childNodes[0].nodeValue;
    checkbox.appendChild(h3);
    var numMaxOpt = xml.getElementById("9").getElementsByTagName("option").length;
    for (var i = 0; i < numMaxOpt; i++) {
        var input = document.createElement("input");
        var label = document.createElement("checkbox");
        var salto = document.createElement("br");
        label.innerHTML = xml.getElementById("9").getElementsByTagName('option')[i].childNodes[0].nodeValue;
        label.setAttribute("for", "color_" + i);
        input.type = "checkbox";
        input.name = "color";
        input.id = "color_" + i;
        checkbox.appendChild(input);
        checkbox.appendChild(label);
        checkbox.appendChild(salto);
    }
    //Pregunta 2
    var checkbox2 = document.getElementById('p10');
    var h3 = document.createElement("h3");
    h3.innerHTML = xml.getElementsByTagName("text")[9].childNodes[0].nodeValue;
    checkbox2.appendChild(h3);
    var numMaxOpt = xml.getElementById("10").getElementsByTagName("option").length;
    for (var i = 0; i < numMaxOpt; i++) {
        var input = document.createElement("input");
        var label = document.createElement("checkbox");
        var salto = document.createElement("br");
        label.innerHTML = xml.getElementById("10").getElementsByTagName('option')[i].childNodes[0].nodeValue;
        label.setAttribute("for", "color_" + i);
        input.type = "checkbox";
        input.name = "color";
        input.id = "color_" + i;
        checkbox2.appendChild(input);
        checkbox2.appendChild(label);
        checkbox2.appendChild(salto);
    }
}
//Tratar datos del XML fi


//Mostrar preguntas ini
//Pregunta 1
function mostrarPregunta1(texto) {
    document.getElementById("p01").innerHTML = texto;
}
//Pregunta 2
function mostrarPregunta2(texto) {
    document.getElementById("p02").innerHTML = texto;
}
//Pregunta 3
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
//Pregunta 4
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
//Pregunta 5
function mostrarPregunta5(textoMulti, opcionMulti) {
    document.getElementById("p05").innerHTML = textoMulti;
    var multi = document.getElementById("r05");
    for (var i = 0; i < opcionMulti.length; i++) {
        var option = document.createElement("option");
        option.text = opcionMulti[i];
        option.value = i + 1;
        multi.options.add(option);
    }
}
//Pregunta 6
function mostrarPregunta6(textoMulti2, opcionMulti2) {
    document.getElementById("p06").innerHTML = textoMulti2;
    var multi = document.getElementById("r06");
    for (var i = 0; i < opcionMulti2.length; i++) {
        var option = document.createElement("option");
        option.text = opcionMulti2[i];
        option.value = i + 1;
        multi.options.add(option);
    }
}
//Mostrar preguntas fi