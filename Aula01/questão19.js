let salarioBruto = 1000;
let inss = salarioBruto * 0.07;
let irrf = salarioBruto * 0.14;
let salarioliquido = salarioBruto - (inss + irrf)

console.log("salario Bruto RS" + salarioBruto);
console.log("(-) INSS; R$" + inss)
console.log("(-) IRRF: R$ " + irrf)
console.log("Salario Liquido R$:" + salarioliquido);


