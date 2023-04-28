
var dialog = prompt("Escriba algo: ");
var cadenaTexto = [];




var i = 0;
var finiquito = 0;
let nIntervId;

function hablaSapo() {
if(!nIntervId){
nIntervId = setInterval(letras, 200);
finiquito++;
}
}

function detenerInter(){
clearInterval(nIntervId);
nIntervId = null;
i = 0;
}

function letras () {
    cortarTexto();

    if (i < cadenaTexto.length) {
        sonidoLetra(cadenaTexto[i]);
        i++;
    }
}

function cortarTexto() {
    var separador = "";
    cadenaTexto = dialog.split(separador);
    return cadenaTexto;
}

function tiempo(){
    cortarTexto();
    var tiempo = cadenaTexto.length * 200 + 1000;
    return tiempo;
}


function monstruo(){
 if(finiquito == 0){
    hablaSapo();
 }
 else if(finiquito == 1){
    detenerInter();
 }
   
}



$(document).on("keydown", function (e) {
    console.log(e.key);
    sonidoLetra(e.key);
    pressedKey(e.key);
});

function sonidoLetra(letra) {
    var audio = new Audio("audio/alphabet-" + letra + ".mp3");
    audio.play();
}

function pressedKey(pressed) {
    $("#" + pressed).addClass("pressed");
    setTimeout(function () {
        $("#" + pressed).removeClass("pressed");
    }, 100);
}