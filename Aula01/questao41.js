let peso = 100
let emagrecimento = 0.20
let ganhoDEmassa = 0.15

let engordar = peso + (peso * ganhoDEmassa) ;
let perda  = peso - ( peso * emagrecimento )

console.log("peso atual "+ peso);

console.log("A perda de massa de 20% é ;" + perda);
console.log("O ganho de peso de 15% será : " + engordar)
