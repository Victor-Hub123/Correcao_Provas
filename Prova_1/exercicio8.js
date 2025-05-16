let alturaCrianca = 1.35;

let podeMontanhaRussa = false;
let podeRodaGigante = false;
let podeBateBate = false;

if (alturaCrianca >= 1.5) {
    podeMontanhaRussa = true;
}

if(alturaCrianca >= 1.2) {
    podeRodaGigante = true;
}

if (alturaCrianca >= 1.1) {
    podeBateBate = true;
}

console.log("Pode brincar na montanha russa? " + (podeMontanhaRussa ? 'Sim' : 'Não'));
console.log("Pode brincar na roda gigante? " + (podeRodaGigante ? 'Sim' : 'Não'));
console.log("Pode brincar no bate bate? " + (podeBateBate ? 'Sim' : 'Não'));
