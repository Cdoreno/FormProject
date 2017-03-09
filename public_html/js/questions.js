<<<<<<< HEAD
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
    for (var i = 0; i < numMaxOpt; i++) {
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
//Pregunta 7
function mostrarPregunta7(texto) {
    document.getElementById("p07").innerHTML = texto;
}
//Pregunta 8
function mostrarPregunta8(texto) {
    document.getElementById("p08").innerHTML = texto;
}
//Mostrar preguntas fi
=======
// Variables ini
var formElement = null;
var respTexto = null;
var respTexto2 = null;
var respSelect = null;
var respSelect2 = null;

var respMulti = [];
var respMulti2 = [];
var respRadio = [];
var respRadio2 = [];
var respCheck = [];
var respCheck2 = [];
var nota = null;
var numMaxOptMulti = null;
var numMaxOptMulti2 = null;
// Variables fi


window.onload = function () {

    //Corrección al apretar, el botón "Realizar Corrección"
    formElement = document.getElementById('cuestionario');
    formElement.onsubmit = function () {
        iniciar();
        correcTexto();
        correcTexto2();
        correcSelect();
        correcSelect2();
        correcMulti();
        correcMulti2();
        correcRadio();
        correcRadio2();
        correcCheck();
        correcCheck2();
        presentarNota();
        // Aqui se colocaran los metodos de las correciones
        return false;
    }

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
    numMaxOptMulti = xml.getElementById("5").getElementsByTagName("option").length;
    for (var i = 0; i < numMaxOptMulti; i++) {
        opcionMulti[i] = xml.getElementById("5").getElementsByTagName("option")[i].innerHTML;
    }
    mostrarPregunta5(textoMulti, opcionMulti);
    var numResp3 = xml.getElementById("5").getElementsByTagName("answer").length;
    for (var i = 0; i < numResp3; i++) {
        respMulti[i] = xml.getElementById("5").getElementsByTagName("answer")[i].childNodes[0].nodeValue;
    }
    //Pregunta 2
    var textoMulti2 = xml.getElementsByTagName("text")[5].innerHTML;
    var opcionMulti2 = [];
    numMaxOptMulti2 = xml.getElementById("6").getElementsByTagName("option").length;
    for (var i = 0; i < numMaxOptMulti2; i++) {
        opcionMulti2[i] = xml.getElementById("6").getElementsByTagName("option")[i].innerHTML;
    }
    mostrarPregunta6(textoMulti2, opcionMulti2);
    var numResp4 = xml.getElementById("6").getElementsByTagName("answer").length;
    for (var i = 0; i < numResp4; i++) {
        respMulti2[i] = xml.getElementById("6").getElementsByTagName("answer")[i].childNodes[0].nodeValue;
    }
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
        var label = document.createElement("label");
        var salto = document.createElement("br");
        label.innerHTML = xml.getElementById("7").getElementsByTagName('option')[i].childNodes[0].nodeValue;
        label.setAttribute("for", "radio_" + i);
        input.type = "radio";
        input.name = "radio1";
        input.id = "radio_" + i;
        radio.appendChild(input);
        radio.appendChild(label);
        radio.appendChild(salto);
    }

    var numResp5 = xml.getElementById("7").getElementsByTagName("answer").length;
    for (var i = 0; i < numResp5; i++) {
        respRadio[i] = xml.getElementById("7").getElementsByTagName("answer")[i].childNodes[0].nodeValue;
    }
    //
    //Pregunta 2
    var radio2 = document.getElementById('p08');
    var h3 = document.createElement("h3");
    h3.innerHTML = xml.getElementsByTagName("text")[7].childNodes[0].nodeValue;
    radio2.appendChild(h3);
    var numMaxOpt = xml.getElementById("8").getElementsByTagName("option").length;
    for (var i = 0; i < numMaxOpt; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        var salto = document.createElement("br");
        label.innerHTML = xml.getElementById("8").getElementsByTagName('option')[i].childNodes[0].nodeValue;
        label.setAttribute("for", "radio2_" + i);
        input.type = "radio";
        input.name = "radio2";
        input.id = "radio2_" + i;
        radio2.appendChild(input);
        radio2.appendChild(label);
        radio2.appendChild(salto);
    }

    var numResp6 = xml.getElementById("8").getElementsByTagName("answer").length;
    for (var i = 0; i < numResp6; i++) {
        respRadio2[i] = xml.getElementById("8").getElementsByTagName("answer")[i].childNodes[0].nodeValue;
    }
    //
//Tipo CheckBox
    //Pregunta 1
    var check = document.getElementById('p09');
    var h3 = document.createElement("h3");
    h3.innerHTML = xml.getElementsByTagName("text")[8].childNodes[0].nodeValue;
    check.appendChild(h3);
    var numMaxOpt = xml.getElementById("9").getElementsByTagName("option").length;
    for (var i = 0; i < numMaxOpt; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        var salto = document.createElement("br");
        label.innerHTML = xml.getElementById("9").getElementsByTagName('option')[i].childNodes[0].nodeValue;
        label.setAttribute("for", "checkbox1_" + i);
        input.type = "checkbox";
        input.name = "checkbox1";
        input.id = "checkbox1_" + i;
        check.appendChild(input);
        check.appendChild(label);
        check.appendChild(salto);
    }
    var numResp = xml.getElementById("9").getElementsByTagName("answer").length;
    for (var i = 0; i < numResp; i++) {
        respCheck[i] = xml.getElementById("9").getElementsByTagName("answer")[i].childNodes[0].nodeValue;
    }
    //Pregunta 2
    var check2 = document.getElementById('p10');
    var h3 = document.createElement("h3");
    h3.innerHTML = xml.getElementsByTagName("text")[9].childNodes[0].nodeValue;
    check2.appendChild(h3);
    var numMaxOpt = xml.getElementById("10").getElementsByTagName("option").length;
    for (var i = 0; i < numMaxOpt; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        var salto = document.createElement("br");
        label.innerHTML = xml.getElementById("10").getElementsByTagName('option')[i].childNodes[0].nodeValue;
        label.setAttribute("for", "checkbox2_" + i);
        input.type = "checkbox";
        input.name = "checkbox2";
        input.id = "checkbox2_" + i;
        check2.appendChild(input);
        check2.appendChild(label);
        check2.appendChild(salto);
    }
    var numResp2 = xml.getElementById("10").getElementsByTagName("answer").length;
    for (var i = 0; i < numResp2; i++) {
        respCheck2[i] = xml.getElementById("10").getElementsByTagName("answer")[i].childNodes[0].nodeValue;
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
//
//Correccion de preguntas
function correcTexto() {
    var resp = formElement.elements[0].value;
    if (resp == respTexto) {
        darRespuesta("Perfecto.");
        nota += 1;
    } else {
        darRespuesta("Te has equivocado.");
    }
}
function correcTexto2() {
    var resp = formElement.elements[1].value;
    if (resp == respTexto2) {
        darRespuesta("Perfecto.");
        nota += 1;
    } else {
        darRespuesta("Te has equivocado.");
    }
}
function correcSelect() {
    var resp = formElement.elements[2].value;
    if (resp == respSelect) {
        darRespuesta("Perfecto.");
        nota += 1;
    } else {
        darRespuesta("Te has equivocado.");
    }
}
function correcSelect2() {
    var resp = formElement.elements[3].value;
    if (resp == respSelect2) {
        darRespuesta("Perfecto.");
        nota += 1;
    } else {
        darRespuesta("Te has equivocado.");
    }
}
function correcMulti() {
    var f = formElement;
    var escorrecta = [];
    darRespuesta("Pregunta número: " + "5");
    for (i = 0; i < f.r05.length; i++) {
        if (f.r05[i].selected) {
            escorrecta[i] = false;
            for (j = 0; j < respMulti.length; j++) {
                if (i == respMulti[j])
                    escorrecta[i] = true;
            }
            if (escorrecta[i]) {
                nota += 1.0;
                darRespuesta("Respuesta número " + i + " correcta");
            } else {
                nota -= 1.0 / numMaxOptMulti;
                darRespuesta("Respuesta número " + i + " incorrecta");
            }
        }
    }
}
function correcMulti2() {
    var f = formElement;
    var escorrecta = [];
    darRespuesta("Pregunta número: " + "6");
    for (i = 0; i < f.r06.length; i++) {
        if (f.r06[i].selected) {
            escorrecta[i] = false;
            for (j = 0; j < respMulti2.length; j++) {
                if (i == respMulti2[j])
                    escorrecta[i] = true;
            }
            if (escorrecta[i]) {
                nota += 1.0;
                darRespuesta("Respuesta número " + i + " correcta");
            } else {
                nota -= 1.0 / numMaxOptMulti2;
                darRespuesta("Respuesta número " + i + " incorrecta");
            }
        }
    }
}
function correcRadio() {
    var f = formElement;
    var escorrecta = [];
    for (i = 0; i < f.radio1.length; i++) {
        if (f.radio1[i].checked) {
            escorrecta[i] = false;
            for (j = 0; j < respRadio.length; j++) {
                if (i == respRadio[j])
                    escorrecta[i] = true;
            }

            if (escorrecta[i]) {
                nota += 1.0;
                darRespuesta("Correcta");
            } else {
                darRespuesta("Incorrecta");
            }
        }
    }
}
function correcRadio2() {
    var f = formElement;
    var escorrecta = [];
    for (i = 0; i < f.radio2.length; i++) {
        if (f.radio2[i].checked) {
            escorrecta[i] = false;
            for (j = 0; j < respRadio2.length; j++) {
                if (i == respRadio2[j])
                    escorrecta[i] = true;
            }
            if (escorrecta[i]) {
                nota += 1.0;
                darRespuesta("Correcta");
            } else {
                darRespuesta("Incorrecta");
            }
        }
    }
}
function correcCheck() {
    var f = formElement;
    var escorrecta = [];
    for (i = 0; i < f.checkbox1.length; i++) {
        if (f.checkbox1[i].checked) {
            escorrecta[i] = false;
            for (j = 0; j < respCheck.length; j++) {
                if (i == respCheck[j])
                    escorrecta[i] = true;
            }
            if (escorrecta[i]) {
                nota += 0.5;
                darRespuesta("Correcta");
            } else {
                nota -= 1.0 / numMaxOptMulti;
                darRespuesta("Incorrecta");
            }
        }
    }
}
function correcCheck2() {
    var f = formElement;
    var escorrecta = [];
    for (i = 0; i < f.checkbox2.length; i++) {
        if (f.checkbox2[i].checked) {
            escorrecta[i] = false;
            for (j = 0; j < respCheck2.length; j++) {
                if (i == respCheck2[j])
                    escorrecta[i] = true;
            }
            if (escorrecta[i]) {
                nota += 0.5;
                darRespuesta("Correcta");
            } else {
                nota -= 1.0 / numMaxOptMulti;
                darRespuesta("Incorrecta");
            }
        }
    }
}
function darRespuesta(texto) {
    var resDiv = document.getElementById('resultadosDiv');
    var p = document.createElement("p");
    var node = document.createTextNode(texto);
    p.appendChild(node);
    resDiv.appendChild(p);
}

function iniciar() {
    document.getElementById('resultadosDiv').innerHTML = "";
    nota = 0.0;
}
function presentarNota() {
    darRespuesta("Ha sacado un " + nota + " sobre 10.");
}
>>>>>>> refs/remotes/origin/Development
