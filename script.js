function Escondertxt() {
    var textoFuncional = document.getElementById('textofuncional');
    textoFuncional.style.display = 'none';
}

function Mostrartxt() {
    var textoFuncional = document.getElementById('textofuncional');
    textoFuncional.style.display = 'block';
}

function Cambiarcolorazul() {
    var textoFuncional = document.getElementById('textofuncional')
    textoFuncional.style.color = 'blue';
}

function Regresarcolor(){
    var textoFuncional = document.getElementById('textofuncional')
    textoFuncional.style.color = 'black';
}

function Cambiarbackground() {
    var fondo = document.getElementById('pagina')
    fondo.style.background = 'red';
    
}

function Regresarbackground(){
    var fondo = document.getElementById('pagina')
    fondo.style.background = 'white';
}

function Cambiartipografia() {
    var textoFuncional = document.getElementById('textofuncional')
    textoFuncional.style.fontFamily = 'Georgia, serif';
}

function Aumentartxt() {
    var textoFuncional = document.getElementById('textofuncional')
    textoFuncional.style.fontSize = '20px';
}

function Subrayartxt() {
    var textoFuncional = document.getElementById('textofuncional')
    textoFuncional.style.background = 'yellow';
}

function regresarInicio() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}

function Scrolldown() {
    const alturaTotal = document.body.scrollHeight;

            window.scrollTo({
                top: alturaTotal,
                behavior: 'smooth' 
            });
}

function Esconderbtn() {
    var botonesScroll = document.querySelectorAll('.btn-scroll');
    
        botonesScroll.forEach(function(boton) {
        boton.style.display = 'none';
    });
}

