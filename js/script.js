
//Perguntar número de cartas para jogador
let numeroDeCartas = prompt("Bem Vindo ao Parrot Card Game!!!\nCom quantas cartar quer jogar");

while ((numeroDeCartas%2 !==0) || numeroDeCartas > 14 ||numeroDeCartas < 2){
    numeroDeCartas = prompt("Você precisa escolher um número par de 2 a 14.\n Com quatas cartas quer jogar");
}

//Distribuir as cartas no navegador
/*
for 
*/
//Virar Carta
function virarCarta(cartaSelecionada){
    cartaSelecionada.classList.toggle("virar");
}

