//Lista de cartas
const baralho = [
    { carta: "bobrossparrot.gif", descricao: "bobrossparrot" },
    { carta: "explodyparrot.gif", descricao: "explodyparrot" },
    { carta: "fiestaparrot.gif", descricao: "fiestaparrot" },
    { carta: "metalparrot.gif", descricao: "metalparrot" },
    { carta: "revertitparrot.gif", descricao: "revertitparrot" },
    { carta: "tripletsparrot.gif", descricao: "tripletsparrot" },
    { carta: "unicornparrot.gif", descricao: "unicornparrot" }
]


//Perguntar número de cartas para jogador

let numeroDeCartas = prompt("Bem Vindo ao jogo da memória Parrot Card Game!!!\nCom quantas cartas quer jogar?\nVocê precisa escolher um nº par entre 4 e 14");

while ((numeroDeCartas % 2 !== 0) || numeroDeCartas > 14 || numeroDeCartas < 4) {
    numeroDeCartas = prompt("Você precisa escolher um número par de 4 a 14.\n Com quatas cartas quer jogar");
}

//Separar cartas para o jogo
const cartaDoJogo = [];
for (let i = 0; i < numeroDeCartas/2; i++) {
    cartaDoJogo.push(baralho[i])
    cartaDoJogo.push(baralho[i])    
}

console.log(cartaDoJogo)
//Embaralhar as cartas

cartaDoJogo.sort(embaralhar);

function embaralhar(){
    return Math.random() - 0.5;
}
//Distribuir as cartas no navegador

const ul = document.querySelector("ul");
for (let i = 0; i < numeroDeCartas; i++) {
    ul.innerHTML += `
    <li class="carta" onclick="virarCarta(this)">
        <div class="tamanhoCarta verso">
            <img src="./img/front.png" alt="parrot">
        </div>
        <div class="tamanhoCarta frente">
            <img src="./img/${cartaDoJogo[i].carta}" alt="${cartaDoJogo[i].descricao}">
        </div>
    </li>
    `;
}

//Contagem de tempo
let tempo =0;
document.querySelector('span').innerHTML=`${tempo} segundos`

setInterval(tempodeJogo, 1000, tempo)

function tempodeJogo(){
    document.querySelector('span').innerHTML = `${tempo} segundos`;
    tempo++

}



//Virar Carta

let turno = 0;
let rodadas = 0;
let cartaTurno1;
let cartaTurno2;
let numeroDeAcertos = 0;
const bloquerTela = document.querySelector('.tela')
const numeroDeCombinações = numeroDeCartas/2;

function virarCarta(cartaSelecionada) {
   
    if (turno === 0){
        cartaTurno1 = cartaSelecionada;
        console.log(cartaTurno1)
        cartaSelecionada.classList.toggle("virar");
        
        turno++;
        rodadas+=2

    }else {
        cartaTurno2 = cartaSelecionada;
        console.log(cartaTurno2)
        cartaSelecionada.classList.toggle("virar");
        
        turno=0;
        
        if(cartaTurno1.innerHTML===cartaTurno2.innerHTML){
            console.log("Parabens")
            numeroDeAcertos++
            cartaTurno1.removeAttribute("onclick")
            cartaTurno2.removeAttribute("onclick")
            if(numeroDeAcertos===numeroDeCombinações){
                alert(`Você precisou de ${tempo} segundos e finalizou em ${rodadas} jogadas`)
                
                if(confirm("Dejesa jogar novamente?"))
                location.reload();
            }
        }else{
            
            bloquerTela.classList.add('bloqueada');
            setTimeout(desvirarCarta, 1000);

        }
    }
}

function desvirarCarta(){
    cartaTurno1.classList.toggle("virar");
    cartaTurno2.classList.toggle("virar");
    bloquerTela.classList.remove('bloqueada')
};