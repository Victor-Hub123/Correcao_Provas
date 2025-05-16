let hp = 500;
let ataques = [30, 50, 20, 70, 60, 40];

for (let i = 0; i < ataques.length; i++) {
    hp -= ataques[i];
    if (hp <= 0) {
        hp = 0;
        break;
    }
}

if (hp > 0) {
    console.log("O castelo resistiu com " + hp + " pontos");
} else {
    console.log("O castelo foi destruído");
}