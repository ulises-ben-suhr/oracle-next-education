let textoParaEncriptar = document.getElementById('textoParaEncriptar');
let textoEncriptado = document.getElementById('textoEncriptado');

let resultado = document.getElementById('resultado');
let textoNoEncontrado = document.getElementById('textoNoEncontrado');

let botonEncriptar = document.getElementById('botonEncriptar');
let botonDesencriptar = document.getElementById('botonDesencriptar');
let botonCopiarTexto = document.getElementById('copiarTexto');

botonEncriptar.addEventListener('click', () => {
    if(textoParaEncriptar.value.length > 0) {
        textoEncriptado.innerHTML = encriptar();
        apagar(textoNoEncontrado);
        prender(resultado);
    } else {
        prender(textoNoEncontrado);
        apagar(resultado);
    }
});

botonDesencriptar.addEventListener('click', () => {
    if(textoParaEncriptar.value.length > 0) {
        textoEncriptado.innerHTML = desencriptar();
        apagar(textoNoEncontrado);
        prender(resultado);
    } else {
        prender(textoNoEncontrado);
        apagar(resultado);
    }
});

botonCopiarTexto.addEventListener('click', () => {
    // Copy the text inside the text field
    navigator.clipboard.writeText(textoEncriptado.innerHTML);
})

function apagar(elemento) {
    elemento.classList.remove("visible");
    elemento.classList.add("invisible");
}

function prender(elemento) {
    elemento.classList.remove("invisible");
    elemento.classList.add("visible");
}

function encriptar() {
    let texto = textoParaEncriptar.value;
    texto = texto.toLowerCase();
    let reglas = [  ['e', 'enter'],
                    ['i', 'imes'],
                    ['a', 'ai'],
                    ['o', 'ober'],
                    ['u', 'ufat']];
    for(let i = 0 ; i < reglas.length ; i++) {
        if(texto.includes(reglas[i][0])) {
            texto = texto.replaceAll(reglas[i][0], reglas[i][1]);
        }
    }
    return(texto);
}

function desencriptar() {
    let texto = textoParaEncriptar.value;
    texto = texto.toLowerCase();
    let reglas = [  ['a', 'ai'],
                    ['e', 'enter'],
                    ['i', 'imes'],
                    ['o', 'ober'],
                    ['u', 'ufat']];
    for(let i = 0 ; i < reglas.length ; i++) {
        if(texto.includes(reglas[i][1])) {
            texto = texto.replaceAll(reglas[i][1], reglas[i][0]);
        }
    }
    return(texto);
}