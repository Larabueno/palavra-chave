const botaoMostraPalavras = document.querySelector('#botao-palavrachave');
botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);
function mostraPalavrasChave() {
 const texto = document.querySelector('#entrada-de-texto').value;
 const campoResultado = document.querySelector('#resultado-palavrachave');
 const palavrasChave = processarTexto(texto);
campoResultado.textContent = palavrasChave.join(", ");
}
function processarTexto(texto){
    let palavras = texto.split(/\P{L}+/u);
    let frequencias = [];
    for(let i in palavras) {
        frequencias [i] = 0;
    }
    console.log(frequencias)

    return palavras;
}
